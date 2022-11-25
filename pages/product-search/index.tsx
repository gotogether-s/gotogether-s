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
import Link from 'next/link'
import NavBar from '@components/NavBar'
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
  const [productNumber, setProductNumber] = useState(0)
  const [productLists, setProductLists] = useState(null)

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
      const { content } = res.data.data
      console.log(content)
      setProductNumber(content.length)
      setProductLists(content)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  return (
    <>
      <NavBar link="/" title="상품검색" marginBottom="1rem" />
      <FormControl sx={{ width: '100%', marginBottom: '3rem' }} size="small">
        <OutlinedInput
          placeholder="상품을 검색해주세요"
          value={keyword}
          autoFocus={true}
          onChange={getInputValue}
          onKeyPress={searchProductOrclearInput}
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
          <div className={style['label']}>검색결과 {productNumber}</div>
          {productNumber ? (
            <div className="productLists">
              {productLists.map(({ ...list }, index) => (
                <div className="productList" key={index}>
                  <Link href={`/product-details/${list.id}`}>
                    <img src={list.thumbnail} alt="img" className="imgClick" />
                  </Link>
                  <span className="nation">{list.country}</span>
                  <div className="title">{list.productName}</div>
                  <div className="hashTags">
                    <div className="hashTag1">#{list.ages} &nbsp;</div>
                    <div className="hashTag2">#{list.theme} &nbsp;</div>
                  </div>
                  {list.basicPrice == 0 ? (
                    <div className="price">가격 문의</div>
                  ) : (
                    <div className="price">
                      {list.basicPrice.toLocaleString('ko-KR')}원
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className={style['no-result']}>상품 검색 결과가 없습니다.</p>
          )}
        </>
      )}
    </>
  )
}

export default ProductSearch
