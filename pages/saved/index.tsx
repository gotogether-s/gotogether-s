import {
  useDeleteLikedItemsMutation,
  useRequestLikedItemsMutation,
} from '@api/requestApi'
import HeadInfo from '@components/HeadInfo'
import NavBar from '@components/NavBar'
import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import productsEnglish from '@public/locales/en/products.json'
import en from '@public/locales/en/saved.json'
import productsKorean from '@public/locales/ko/products.json'
import ko from '@public/locales/ko/saved.json'
import {
  addLikedItems,
  findAndRemoveLikedItem,
  removeLikedItem,
} from '@store/likedItemsSlice'
import {
  addWishIdsToDelete,
  removeWishIdsToDelete,
} from '@store/wishIdsToDeleteSlice'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Saved = () => {
  const StyledSection = styled('div')(() => ({
    backgroundColor: '#fff',
    padding: '1.6rem',
    marginBottom: '1.6rem',
  }))

  const dispatch = useDispatch()
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko
  const translateProducts = locale === 'en' ? productsEnglish : productsKorean

  const [requestLikedItems] = useRequestLikedItemsMutation()
  const [deleteLikedItems] = useDeleteLikedItemsMutation()

  const [checkedAll, setCheckedAll] = useState(false)
  const [checked, setChecked] = useState([])

  const likedItems = useSelector((state) => {
    return state.likedItems
  })

  const wishIdsToDelete = useSelector((state) => {
    return state.wishIdsToDelete
  })

  const getLikedItems = async (accessToken) => {
    try {
      const res = await requestLikedItems({
        accessToken: accessToken,
      })
      dispatch(addLikedItems(res.data.data))
      getInitialChecked(res.data.data)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const requestToRemoveSelectedLikedItems = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      const res = await deleteLikedItems({
        accessToken: accessToken,
        data: { wish_id: wishIdsToDelete },
      })
      dispatch(findAndRemoveLikedItem(wishIdsToDelete))
      setCheckedAll(false)
      setChecked([])
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const requestToRemoveLikedItem = async (e, wish_id, index) => {
    e.stopPropagation()
    const wishIds = []
    wishIds.push(wish_id)
    try {
      const accessToken = localStorage.getItem('accessToken')
      const res = await deleteLikedItems({
        accessToken: accessToken,
        data: { wish_id: wishIds },
      })
      dispatch(removeLikedItem(index))
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const getInitialChecked = (likedItems) => {
    const newChecked = []
    for (const i of likedItems) {
      newChecked.push(false)
    }
    setChecked([...newChecked])
  }

  const handleCheckedChange = (wish_id, index) => {
    const copyChecked = checked.slice()
    copyChecked[index] = !copyChecked[index]
    setChecked([...copyChecked])
    copyChecked[index]
      ? dispatch(addWishIdsToDelete(wish_id))
      : dispatch(removeWishIdsToDelete(wish_id))
  }

  const handleCheckedAllChange = (likedItems) => {
    const newChecked = []
    for (const i of likedItems) {
      newChecked.push(!checkedAll)
    }
    setChecked([...newChecked])
    setCheckedAll(!checkedAll)
    const checkedAllStatus = !checkedAll
    likedItems.map((likedItem) =>
      checkedAllStatus
        ? dispatch(addWishIdsToDelete(likedItem.wish_id))
        : dispatch(removeWishIdsToDelete(likedItem.wish_id)),
    )
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && getLikedItems(accessToken)
  }, [])

  return (
    <>
      <HeadInfo title={translate['페이지 제목']} />
      <NavBar link={`/`} title={translate['찜']} marginBottom="0" />
      <Box sx={{ backgroundColor: '#F2F4FA' }}>
        <StyledSection>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: '#B9B9B9',
                  }}
                  checked={checkedAll}
                  onChange={() => handleCheckedAllChange(likedItems)}
                />
              }
              label={translate['전체 선택']}
            />
            <Button
              variant="outlined"
              sx={{
                border: '1px solid #4581F8',
                backgroundColor: 'transparent',
                color: '#4581F8',
                boxShadow: 'none',
                fontWeight: '500',
                '&:hover': {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                },
              }}
              onClick={requestToRemoveSelectedLikedItems}
            >
              {translate['선택 상품 삭제']}
            </Button>
          </Box>
        </StyledSection>
        {likedItems.length ? (
          <StyledSection sx={{ marginBottom: 0 }}>
            {likedItems.map((likedItem, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.75rem',
                  }}
                >
                  <Checkbox
                    sx={{ padding: 0, color: '#B9B9B9' }}
                    checked={checked[index]}
                    onChange={() =>
                      handleCheckedChange(likedItem.wish_id, index)
                    }
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '1.6rem',
                      width: '100%',
                    }}
                  >
                    <Box sx={{ width: '30%' }}>
                      <Image
                        src={likedItem.thumbnail}
                        alt={likedItem.productName}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        style={{ borderRadius: '0.75rem' }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: '70%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontWeight: 500, lineHeight: 'normal' }}
                        >
                          {translateProducts[likedItem.productName]}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '1.2rem',
                            marginBottom: '0.2rem',
                            color: '#939393',
                          }}
                        >
                          {translate['1인']} /{' '}
                          {likedItem.basicPrice.toLocaleString('ko-KR')}{' '}
                          {translate['원']}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '1.3rem',
                          color: '#4581F8',
                          '&:hover': {
                            cursor: 'pointer',
                          },
                        }}
                        onClick={() =>
                          router.push(`product-details/${likedItem.product_id}`)
                        }
                      >
                        {translate['상세보기']} &gt;
                      </Typography>
                    </Box>
                  </Box>
                  <CloseIcon
                    sx={{
                      color: '#B9B9B9',
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                    onClick={(e) =>
                      requestToRemoveLikedItem(e, likedItem.wish_id, index)
                    }
                  />
                </Box>
                {likedItems.length - 1 !== index && (
                  <Divider sx={{ margin: '1.6rem -1.6rem' }} />
                )}
              </Box>
            ))}
          </StyledSection>
        ) : (
          <StyledSection sx={{ marginBottom: 0 }}>
            <Box sx={{ textAlign: 'center', paddingTop: '5rem' }}>
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: '500',
                  color: '#4581F8',
                  marginBottom: '1rem',
                }}
              >
                {translate['아직 찜한 상품이 없습니다']}
              </Typography>
              <Typography
                sx={{
                  textAlgin: 'center',
                  fontSize: '1.4rem',
                  color: '#8D8D8D',
                  marginBottom: '5rem',
                }}
              >
                {
                  translate[
                    '홈페이지로 돌아가서 더 많은 여행 상품을 찾아보세요.'
                  ]
                }
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  backgroundColor: '#4581F8',
                  boxShadow: 'none',
                  paddingTop: '1rem',
                  paddingBottom: '1rem',
                  fontWeight: '500',
                  '&:hover': {
                    backgroundColor: '#4581F8',
                    boxShadow: 'none',
                  },
                }}
                onClick={() => router.push('/')}
              >
                {translate['홈으로']}
              </Button>
            </Box>
          </StyledSection>
        )}
      </Box>
    </>
  )
}

export default Saved
