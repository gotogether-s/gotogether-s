import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Button,
} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { styled } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import NavBar from '@components/NavBar'
import style from './Book.module.scss'
import TravellerInfoForm from '@components/TravellerInfoForm'

const StyledSection = styled('div')(() => ({
  backgroundColor: '#fff',
  padding: '1.6rem',
  marginBottom: '1.6rem',
}))

const Book = () => {
  const [clientInfo, setClientInfo] = useState({
    name: '',
    phone: '',
  })
  const [numberOfTravellers, setNumberOfTravellers] = useState(1)
  const [TravellerInfoFormComponents, setTravellerInfoFormComponents] =
    useState([<TravellerInfoForm />])

  const getReservationDetail = useSelector((state) => {
    return state.reservationDetail
  })

  const { thumbnail, productName, airport, productOptionList, basicPrice } =
    getReservationDetail

  const reservationDate = productOptionList.trim().replace(/\s/g, '').split('~')

  const getDayName = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('ko-KR', { weekday: 'long' })
  }

  const reservationDay = reservationDate.map((date) => getDayName(date))

  const handleClientInfoChange = (e) => {
    const { name, value } = e.target
    setClientInfo({ ...clientInfo, [name]: value })
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    setClientInfo({
      ...clientInfo,
      [name]: value.trim().replace(/\s/g, ''),
    })
  }

  const removeTravellerInfoFormComponent = () => {
    if (numberOfTravellers === 1) return
    setNumberOfTravellers(numberOfTravellers - 1)
    const newData = [...TravellerInfoFormComponents].slice(0, -1)
    setTravellerInfoFormComponents(newData)
  }

  const AddTravellerInfoFormComponent = () => {
    if (numberOfTravellers === 4) return
    setNumberOfTravellers(numberOfTravellers + 1)
    setTravellerInfoFormComponents([
      ...TravellerInfoFormComponents,
      <TravellerInfoForm />,
    ])
  }

  return (
    <>
      <NavBar link="/" title="예약" marginBottom="0" />
      <Box sx={{ backgroundColor: '#F2F4FA' }}>
        <StyledSection>
          <Card sx={{ display: 'flex', borderRadius: 0, boxShadow: 'none' }}>
            <CardMedia
              component="img"
              sx={{ width: 120, borderRadius: '0.8rem' }}
              image={thumbnail}
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0 1.6rem',
              }}
            >
              <Box>
                <Typography>{productName}</Typography>
                <Typography>{airport}</Typography>
                <Typography>
                  출발 {reservationDate[0]} {reservationDay[0]}
                  도착 {reservationDate[1]} {reservationDay[1]}
                </Typography>
              </Box>
              <Typography>
                1인 / {basicPrice.toLocaleString('ko-KR')} 원
              </Typography>
            </CardContent>
          </Card>
        </StyledSection>
        <StyledSection>
          <Typography>예약자 정보 (대표)</Typography>
          <div className={style['input-wrapper']}>
            <div className={style['label']}>이름</div>
            <TextField
              name="name"
              size="small"
              placeholder="이름을 입력해주세요"
              sx={{ width: '100%' }}
              value={clientInfo.name}
              onChange={handleClientInfoChange}
              onBlur={removeInputSpaces}
            />
          </div>
          <div className={style['input-wrapper']}>
            <div className={style['label']}>전화번호</div>
            <TextField
              name="phone"
              size="small"
              placeholder="전화번호를 입력해주세요"
              sx={{ width: '100%' }}
              value={clientInfo.phone}
              onChange={handleClientInfoChange}
              onBlur={removeInputSpaces}
            />
          </div>
        </StyledSection>
        <StyledSection>
          <Typography>인원</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>인원수</Typography>
            <Box sx={{ display: 'flex', gap: '1.6rem' }}>
              <Button
                aria-label="reduce"
                sx={{
                  padding: '0.3rem',
                  minWidth: '0',
                  border: '1px solid #ddd',
                  borderRadius: '100%',
                }}
                onClick={removeTravellerInfoFormComponent}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Typography>{numberOfTravellers}</Typography>
              <Button
                aria-label="increase"
                sx={{
                  padding: '0.3rem',
                  minWidth: '0',
                  border: '1px solid #ddd',
                  borderRadius: '100%',
                }}
                onClick={AddTravellerInfoFormComponent}
              >
                <AddIcon fontSize="small" />
              </Button>
            </Box>
          </Box>
          {TravellerInfoFormComponents.map((element, index) => {
            return <TravellerInfoForm key={index} number={index + 1} />
          })}
        </StyledSection>
      </Box>
    </>
  )
}

export default Book
