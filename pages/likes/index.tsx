import {
  useDeleteLikedItemsMutation,
  useRequestLikedItemsMutation,
} from '@api/requestApi'
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

const StyledSection = styled('div')(() => ({
  backgroundColor: '#fff',
  padding: '1.6rem',
  marginBottom: '1.6rem',
}))

const Likes = () => {
  const dispatch = useDispatch()
  const router = useRouter()

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

  const getLikedItems = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
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
    getLikedItems()
  }, [])

  return (
    <>
      <NavBar link={`/`} title="찜" marginBottom="0" />
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
              label="전체 선택"
            />
            <Button
              variant="outlined"
              sx={{
                width: '12rem',
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
              선택 상품 삭제
            </Button>
          </Box>
        </StyledSection>
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
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ padding: 0, color: '#B9B9B9' }}
                      checked={checked[index]}
                      onChange={() =>
                        handleCheckedChange(likedItem.wish_id, index)
                      }
                    />
                  }
                  sx={{ margin: 0 }}
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
                        {likedItem.productName}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '1.2rem',
                          marginBottom: '0.2rem',
                          color: '#939393',
                        }}
                      >
                        1인 / {likedItem.basicPrice.toLocaleString('ko-KR')} 원
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
                      상세보기 &gt;
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
      </Box>
    </>
  )
}

export default Likes
