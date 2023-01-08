import { styled } from '@mui/material/styles'
import {
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Divider,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {
  useRequestLikedItemsMutation,
  useDeleteLikedItemsMutation,
} from '@api/requestApi'
import { useSelector, useDispatch } from 'react-redux'
import {
  addLikedItems,
  removeLikedItem,
  findAndRemoveLikedItem,
} from '@store/likedItemsSlice'
import {
  addWishIdsToDelete,
  removeWishIdsToDelete,
} from '@store/wishIdsToDeleteSlice'
import Image from 'next/image'
import NavBar from '@components/NavBar'
import style from './Likes.module.scss'
import { useState, useEffect } from 'react'

const Likes = () => {
  const StyledSection = styled('div')(() => ({
    backgroundColor: '#fff',
    padding: '1.6rem',
    marginBottom: '1.6rem',
  }))

  const dispatch = useDispatch()

  const [checkedAll, setCheckedAll] = useState(false)
  const [checked, setChecked] = useState([])

  const likedItems = useSelector((state) => {
    return state.likedItems
  })

  const wishIdsToDelete = useSelector((state) => {
    return state.wishIdsToDelete
  })

  const [requestLikedItems] = useRequestLikedItemsMutation()
  const [deleteLikedItems] = useDeleteLikedItemsMutation()

  const getLikedItems = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      const res = await requestLikedItems({
        accessToken: accessToken,
      })
      console.log('res: ', res)
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
      console.log('res: ', res)
      dispatch(findAndRemoveLikedItem(wishIdsToDelete))
      setCheckedAll(false)
      setChecked([])
    } catch (e) {
      console.log('e: ', e)
    }
  }

  const requestToRemoveLikedItem = async (wish_id, index) => {
    const wishIds = []
    wishIds.push(wish_id)
    try {
      const accessToken = localStorage.getItem('accessToken')
      const res = await deleteLikedItems({
        accessToken: accessToken,
        data: { wish_id: wishIds },
      })
      console.log('res: ', res)
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
                  checked={checkedAll}
                  onChange={() => handleCheckedAllChange(likedItems)}
                />
              }
              label="전체 선택"
            />
            <Button
              variant="outlined"
              sx={{
                color: '#222',
                border: '1px solid #BEBEBE',
                borderRadius: '3rem',
                padding: '0.5rem 1.5rem',
                height: '100%',
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
                  padding: '1rem 0',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '0.5rem',
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ padding: 0 }}
                          checked={checked[index]}
                          onChange={() =>
                            handleCheckedChange(likedItem.wish_id, index)
                          }
                        />
                      }
                      sx={{ margin: 0 }}
                    />
                    <Typography>{likedItem.productName}</Typography>
                  </Box>
                  <CloseIcon
                    sx={{
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                    onClick={() =>
                      requestToRemoveLikedItem(likedItem.wish_id, index)
                    }
                  />
                </Box>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <Image
                    src={likedItem.thumbnail}
                    alt={likedItem.productName}
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    style={{ borderRadius: '0.75rem' }}
                  />
                  <Box>
                    <Typography sx={{ fontSize: '1.2rem', color: '#4E4E4E' }}>
                      예약 시 여행일정 선택
                    </Typography>
                    <Typography>
                      1인 / {likedItem.basicPrice.toLocaleString('ko-KR')} 원
                    </Typography>
                  </Box>
                </Box>
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
