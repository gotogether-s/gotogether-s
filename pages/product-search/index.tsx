import { useSearchProductsMutation } from '@api/requestApi'
import NavBar from '@components/NavBar'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CloseIcon from '@mui/icons-material/Close'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import SearchIcon from '@mui/icons-material/Search'
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { add, remove } from '@store/searchHistorySlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Pagination from 'react-js-pagination'
import { useDispatch, useSelector } from 'react-redux'
import 'swiper/css'
import 'swiper/css/pagination'
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
  const [totalElements, setTotalElements] = useState(1)
  const [pageSize, setPageSize] = useState()
  const [page, setPage] = useState<number>(1)

  const getInputValue = (e) => {
    setKeyword(e.target.value)
  }

  const searchProductOrclearInput = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      setDisplaySearchResult(true)
      if (keyword.trim().replace(/\s/g, '') === '') {
        setProductNumber(0)
        setProductLists(null)
      } else {
        dispatch(add(keyword))
        requestSearch(keyword)
      }
    }
    if (e.key === 'Backspace' && e.target.value === '') {
      clearInput()
      requestSearch(keyword)
    }
  }

  const clearInput = () => {
    setKeyword('')
    setDisplaySearchResult(false)
  }

  const clickSearchHistory = (keyword) => {
    setKeyword(keyword)
    setDisplaySearchResult(true)
    requestSearch(keyword)
  }

  const removeSearchHistory = (e, index) => {
    e.stopPropagation()
    dispatch(remove(index))
  }

  const requestSearch = async (keyword) => {
    try {
      const res = await searchProducts(keyword)
      router.push(`/product-search?keyword=${keyword}&page=0`)
      const { content, totalElements } = res.data.data
      const { pageSize } = res.data.data.pageable
      setProductNumber(content.length)
      setProductLists(content)
      setTotalElements(totalElements)
      setPageSize(pageSize)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  useEffect(() => {
    if (keyword === '') {
      setDisplaySearchResult(false)
      router.push('/product-search')
    }
  }, [keyword])

  const handlePageChange = (page: number) => {
    setPage(page)
    router.push(`/product-search?keyword=${keyword}&page=${page - 1}`)
  }

  useEffect(() => {
    handlePageChange(page)
  }, [page])

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
          <List
            sx={{
              padding: 0,
            }}
          >
            {searchHistory.map((list: string, index: number) => (
              <ListItem
                key={index}
                sx={{
                  padding: '1rem 0',
                  borderBottom: '1px solid #ddd',
                  '&:hover': {
                    backgroundColor: '#eee',
                    cursor: 'pointer',
                  },
                }}
                onClick={() => clickSearchHistory(list)}
              >
                <div className={style['flex-wrapper']}>
                  <AccessTimeIcon />
                  <ListItemText primary={list} sx={{ marginLeft: '1rem' }} />
                  <CloseIcon
                    className={style['clickable-icon']}
                    onClick={(e) => removeSearchHistory(e, index)}
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <>
          <div className={style['label']}>검색결과 {productNumber}</div>
          {productNumber ? (
            <>
              <div className="productLists">
                {productLists.map(({ ...list }, index) => (
                  <div className="productList" key={index}>
                    <Link href={`/product-details/${list.id}`}>
                      <img
                        src={list.thumbnail}
                        alt="img"
                        className="imgClick"
                      />
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
              <div className={style['search-pagination']}>
                <Pagination
                  activePage={page}
                  itemsCountPerPage={pageSize}
                  totalItemsCount={totalElements}
                  pageRangeDisplayed={5}
                  prevPageText={'‹'}
                  nextPageText={'›'}
                  onChange={handlePageChange}
                />
              </div>
            </>
          ) : (
            <p className={style['no-result']}>상품 검색 결과가 없습니다.</p>
          )}
        </>
      )}
    </>
  )
}

export default ProductSearch
