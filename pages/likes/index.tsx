import { styled } from '@mui/material/styles'
import { Box, FormControlLabel, Checkbox, Button } from '@mui/material'
import { useRequestLikedItemsMutation } from '@api/requestApi'
import NavBar from '@components/NavBar'
import style from './Likes.module.scss'
import { useEffect } from 'react'

const Likes = () => {
  const StyledSection = styled('div')(() => ({
    backgroundColor: '#fff',
    padding: '1.6rem',
    marginBottom: '1.6rem',
  }))

  const [requestLikedItems] = useRequestLikedItemsMutation()

  const getLikedItems = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      const res = await requestLikedItems({
        accessToken: accessToken,
      })
      console.log('res: ', res)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  useEffect(() => {
    getLikedItems()
  }, [])

  return (
    <>
      <NavBar link={`/`} title="찜" marginBottom="0" />
      <StyledSection>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <FormControlLabel control={<Checkbox />} label="전체 선택" />
          <Button
            variant="outlined"
            sx={{
              color: '#222',
              border: '1px solid #BEBEBE',
              borderRadius: '3rem',
              padding: '0.5rem 1.5rem',
              height: '100%',
            }}
          >
            선택 상품 삭제
          </Button>
        </Box>
      </StyledSection>
    </>
  )
}

export default Likes
