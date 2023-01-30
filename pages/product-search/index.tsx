import { useSearchProductsMutation } from '@api/requestApi'
import HeadInfo from '@components/HeadInfo'
import NavBar from '@components/NavBar'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CancelIcon from '@mui/icons-material/Cancel'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Divider,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import en from '@public/locales/en/productSearch.json'
import ko from '@public/locales/ko/productSearch.json'
import { add, remove } from '@store/searchHistorySlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Pagination from 'react-js-pagination'
import { useDispatch, useSelector } from 'react-redux'
import 'swiper/css'
import 'swiper/css/pagination'

const ProductSearch = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const [searchProducts] = useSearchProductsMutation()

  const [keyword, setKeyword] = useState('')
  const [displaySearchResult, setDisplaySearchResult] = useState(false)
  const [productNumber, setProductNumber] = useState(0)
  const [productLists, setProductLists] = useState(null)
  const [totalElements, setTotalElements] = useState(1)
  const [pageSize, setPageSize] = useState()
  const [page, setPage] = useState<number>(1)

  const searchHistory = useSelector((state) => {
    return state.searchHistory
  })

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

  const handlePageChange = (page: number) => {
    setPage(page)
    router.push(`/product-search?keyword=${keyword}&page=${page - 1}`)
  }

  useEffect(() => {
    if (keyword === '') {
      setDisplaySearchResult(false)
      router.push('/product-search')
    }
  }, [keyword])

  useEffect(() => {
    handlePageChange(page)
  }, [page])

  return (
    <>
      <NavBar link="/" title={translate['상품검색']} marginBottom="1rem" />
      <FormControl sx={{ width: '100%', marginBottom: '3rem' }} size="small">
        <OutlinedInput
          placeholder={translate['상품을 검색해주세요']}
          value={keyword}
          autoFocus={true}
          onChange={getInputValue}
          onKeyPress={searchProductOrclearInput}
          endAdornment={
            <InputAdornment position="end">
              {!displaySearchResult ? (
                <SearchIcon
                  sx={{
                    color: '#B9B9B9',
                    fontSize: 25,
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                  onClick={searchProductOrclearInput}
                />
              ) : (
                <CancelIcon
                  sx={{
                    color: '#B9B9B9',
                    fontSize: 20,
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                  onClick={clearInput}
                />
              )}
            </InputAdornment>
          }
        />
      </FormControl>
      {!displaySearchResult ? (
        <>
          <HeadInfo title={translate['페이지 제목1']} />
          <Typography sx={{ paddingBottom: '1rem' }}>
            {translate['최근 검색어']}
          </Typography>
          <Divider sx={{ margin: '0 -1.6rem' }} />
          <List
            sx={{
              padding: 0,
              margin: '0 -1.6rem',
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
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0 1.6rem',
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: 20, color: '#C2C2C2' }} />
                  <ListItemText primary={list} sx={{ marginLeft: '1rem' }} />
                  <CloseIcon
                    sx={{
                      color: '#C2C2C2',
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                    onClick={(e) => removeSearchHistory(e, index)}
                  />
                </Box>
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <>
          <HeadInfo
            title={
              translate['페이지 제목2'] + keyword + translate['페이지 제목3']
            }
          />
          <Typography sx={{ paddingBottom: '1rem' }}>
            {translate['검색결과']} {productNumber}
          </Typography>
          <Divider sx={{ margin: '0 -1.6rem' }} />
          {productNumber ? (
            <>
              <div className="productLists" style={{ marginTop: '2rem' }}>
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
                      <div className="price">{translate['가격 문의']}</div>
                    ) : (
                      <div className="price">
                        {list.basicPrice.toLocaleString('ko-KR')}{' '}
                        {translate['원']}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Box
                sx={{
                  position: 'absolute',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  left: '0',
                  right: '0',
                  bottom: '3rem',
                }}
              >
                <Pagination
                  activePage={page}
                  itemsCountPerPage={pageSize}
                  totalItemsCount={totalElements}
                  pageRangeDisplayed={5}
                  prevPageText={'‹'}
                  nextPageText={'›'}
                  onChange={handlePageChange}
                />
              </Box>
            </>
          ) : (
            <Typography
              sx={{ marginTop: '2rem', color: '#5F5F5F', fontSize: '1.4rem' }}
            >
              {translate['상품 검색 결과가 없습니다.']}
            </Typography>
          )}
        </>
      )}
    </>
  )
}

export default ProductSearch
