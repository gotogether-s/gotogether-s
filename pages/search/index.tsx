import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import style from './Search.module.scss'

const Search = () => {
  return (
    <>
      <div className={style['search-container']}>
        <ArrowBackIosNewIcon />
        <FormControl sx={{ width: '100%' }} size="small">
          <OutlinedInput
            placeholder="상품을 검색해주세요"
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon sx={{ fontSize: 25 }} />
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
