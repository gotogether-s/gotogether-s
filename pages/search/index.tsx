import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import style from './Search.module.scss'
import { add } from '/store/searchHistorySlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch()

  const [searchText, setSearchText] = useState('')

  const getInputValue = (e) => {
    setSearchText(e.target.value)
  }

  const searchProduct = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      dispatch(add(searchText))
      setSearchText('')
    }
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
              <InputAdornment position="end" onClick={searchProduct}>
                <SearchIcon
                  sx={{ fontSize: 25 }}
                  className={style['search-icon']}
                />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className={style['recent-search']}>최근 검색어</div>
    </>
  )
}

export default Search
