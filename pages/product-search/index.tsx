import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import SearchIcon from '@mui/icons-material/Search'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CloseIcon from '@mui/icons-material/Close'
import { useSearchProductsMutation } from '@api/requestApi'
import { FormControl, OutlinedInput, InputAdornment } from '@mui/material'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '@store/searchHistorySlice'
import { useState } from 'react'
import style from './Search.module.scss'

const ProductSearch = () => {
  const [searchProducts] = useSearchProductsMutation()
  const router = useRouter()

  const dispatch = useDispatch()

  const searchHistory = useSelector((state) => {
    return state.searchHistory
  })

  const [keyword, setKeyword] = useState('')
  const [displaySearchResult, setDisplaySearchResult] = useState(false)

  const getInputValue = (e) => {
    setKeyword(e.target.value)
  }

  const searchProductOrclearInput = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      dispatch(add(keyword))
      setDisplaySearchResult(true)
      requestSearch()
    }
    if (e.key === 'Backspace' && e.target.value === '') {
      clearInput()
      requestSearch()
    }
  }

  const clearInput = () => {
    setKeyword('')
    setDisplaySearchResult(false)
  }

  const requestSearch = async () => {
    try {
      const res = await searchProducts(keyword)
      console.log('res: ', res)
      router.push(`/product-search?keyword=${keyword}&page=0`)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  return (
    <>
      <div className={style['search-container']}>
        <ArrowBackIosNewIcon
          className={style['clickable-icon']}
          onClick={() => {
            router.push('/')
          }}
        />
        <FormControl sx={{ width: '100%' }} size="small">
          <OutlinedInput
            placeholder="상품을 검색해주세요"
            value={keyword}
            autoFocus={true}
            onChange={getInputValue}
            onKeyDown={searchProductOrclearInput}
            endAdornment={
              <InputAdornment position="end">
                {!displaySearchResult ? (
                  <SearchIcon
                    sx={{ fontSize: 25 }}
                    className={style['clickable-icon']}
                    onClick={searchProductOrclearInput}
                  />
                ) : (
                  <HighlightOffIcon
                    sx={{ fontSize: 25 }}
                    className={style['clickable-icon']}
                    onClick={clearInput}
                  />
                )}
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      {!displaySearchResult ? (
        <>
          <div className={style['label']}>최근 검색어</div>
          {searchHistory.map((list: string, index: number) => (
            <div className={style['search-history']} key={index}>
              <div className={style['flex-wrapper']}>
                <AccessTimeIcon />
                <p key={index}>{list}</p>
              </div>
              <CloseIcon
                className={style['clickable-icon']}
                onClick={() => dispatch(remove(index))}
              />
            </div>
          ))}
        </>
      ) : (
        <>
          <div className={style['label']}>상품 검색결과 0</div>
          <p className={style['no-result']}>상품 검색 결과가 없습니다.</p>
        </>
      )}
    </>
  )
}

export default ProductSearch
