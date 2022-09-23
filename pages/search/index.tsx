import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { add } from '/store/searchHistorySlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './Search.module.scss'

const Search = () => {
  const dispatch = useDispatch()

  const [searchText, setSearchText] = useState('')
  const [displaySearchResult, setDisplaySearchResult] = useState(false)

  const getInputValue = (e) => {
    setSearchText(e.target.value)
  }

  const searchProduct = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      dispatch(add(searchText))
      setDisplaySearchResult(true)
    }
  }

  const clearInput = () => {
    setSearchText('')
  }

  return (
    <>
      <div className={style['search-container']}>
        <ArrowBackIosNewIcon />
        <FormControl sx={{ width: '100%' }} size="small">
          <OutlinedInput
            placeholder="상품을 검색해주세요"
            value={searchText}
            onChange={getInputValue}
            onKeyDown={searchProduct}
            endAdornment={
              <InputAdornment position="end">
                {!displaySearchResult ? (
                  <SearchIcon
                    sx={{ fontSize: 25 }}
                    className={style['clickable-icon']}
                    onClick={searchProduct}
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
        <div className={style['label']}>최근 검색어</div>
      ) : (
        <div className={style['label']}>상품 검색결과</div>
      )}
    </>
  )
}

export default Search
