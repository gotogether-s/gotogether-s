import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Radio,
  Checkbox,
} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { styled } from '@mui/material/styles'
import { useSelector, useDispatch } from 'react-redux'
import { updateBookingClientInfo } from '@store/bookingClientInfoSlice'
import {
  createReservationPersonList,
  deleteReservationPersonList,
} from '@store/makeReservationSlice'
import { useState, useEffect } from 'react'
import NavBar from '@components/NavBar'
import ModalWindow from '@components/ModalWindow'
import TravellerInfoForm from '@components/TravellerInfoForm'
import style from './Book.module.scss'

const StyledSection = styled('div')(() => ({
  backgroundColor: '#fff',
  padding: '1.6rem',
  marginBottom: '1.6rem',
}))

const isNum = /^\d+$/

const Book = () => {
  const [numberOfTravellers, setNumberOfTravellers] = useState(1)
  const [TravellerInfoFormComponents, setTravellerInfoFormComponents] =
    useState([<TravellerInfoForm />])
  const [totalFee, setTotalFee] = useState(0)
  const [bookingClientValuesErrors, setBookingClientValuesErrors] = useState({})

  const displayModalWindow = useSelector((state) => {
    return state.displayModalWindow
  })

  const { isOpen } = displayModalWindow

  const getReservationDetail = useSelector((state) => {
    return state.reservationDetail
  })

  const {
    thumbnail,
    productName,
    airport,
    productOptionList,
    basicPrice,
    productId,
  } = getReservationDetail

  const reservationDate = productOptionList.trim().replace(/\s/g, '').split('~')

  const getDayName = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('ko-KR', { weekday: 'long' })
  }

  const reservationDay = reservationDate.map((date) =>
    getDayName(date).charAt(0),
  )

  const getBookingClientInfo = useSelector((state) => {
    return state.bookingClientInfo
  })

  const dispatch = useDispatch()

  const handleClientInfoChange = (e) => {
    const { name, value } = e.target
    dispatch(updateBookingClientInfo({ [name]: value }))
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    dispatch(
      updateBookingClientInfo({ [name]: value.trim().replace(/\s/g, '') }),
    )
  }

  const removeTravellerInfoFormComponent = () => {
    if (numberOfTravellers === 1) return
    setNumberOfTravellers(numberOfTravellers - 1)
    dispatch(deleteReservationPersonList())
    const newData = [...TravellerInfoFormComponents].slice(0, -1)
    setTravellerInfoFormComponents(newData)
  }

  const AddTravellerInfoFormComponent = () => {
    if (numberOfTravellers === 4) return
    setNumberOfTravellers(numberOfTravellers + 1)
    dispatch(createReservationPersonList())
    setTravellerInfoFormComponents([
      ...TravellerInfoFormComponents,
      <TravellerInfoForm />,
    ])
  }

  useEffect(() => {
    setTotalFee(basicPrice * numberOfTravellers)
  }, [basicPrice, numberOfTravellers])

  const validateBookingClientValues = (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = '이름을 입력해주세요!'
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = '전화번호를 입력해주세요!'
    } else if (!isNum.test(values.phoneNumber)) {
      errors.phoneNumber = '숫자만 입력해주세요!'
    }
    return errors
  }

  const requestReservation = () => {
    const bookingClientValuesValidation =
      validateBookingClientValues(getBookingClientInfo)
    setBookingClientValuesErrors(
      validateBookingClientValues(getBookingClientInfo),
    )
    if (Object.keys(bookingClientValuesValidation).length !== 0) return
  }

  return (
    <>
      <NavBar
        link={`/product-details/${productId}`}
        title="예약"
        marginBottom="0"
      />
      {isOpen && (
        <ModalWindow
          text="예약자 정보를 먼저 입력해주세요"
          primaryBtnText="확인"
          primaryBtnLink=""
        />
      )}
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
                <Box>
                  <Typography>
                    출발 {reservationDate[0]} ({reservationDay[0]})
                  </Typography>
                  <Typography>
                    도착 {reservationDate[1]} ({reservationDay[1]})
                  </Typography>
                </Box>
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
              value={getBookingClientInfo.name}
              onChange={handleClientInfoChange}
              onBlur={removeInputSpaces}
            />
            <p
              style={{
                visibility: bookingClientValuesErrors.name
                  ? 'visible'
                  : 'hidden',
              }}
              className={style['error-message']}
            >
              {bookingClientValuesErrors.name}
            </p>
          </div>
          <div className={style['input-wrapper']}>
            <div className={style['label']}>전화번호</div>
            <TextField
              name="phoneNumber"
              size="small"
              placeholder="전화번호 11자리를 입력해주세요"
              sx={{ width: '100%' }}
              value={getBookingClientInfo.phoneNumber}
              onChange={handleClientInfoChange}
              onBlur={removeInputSpaces}
            />
            <p
              style={{
                visibility: bookingClientValuesErrors.phoneNumber
                  ? 'visible'
                  : 'hidden',
              }}
              className={style['error-message']}
            >
              {bookingClientValuesErrors.phoneNumber}
            </p>
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
        <StyledSection>
          <Typography>최종 요금</Typography>
          <Box
            sx={{
              padding: '1rem 0',
            }}
          >
            <Typography>{productName}</Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography>
                출발 {reservationDate[0]} ({reservationDay[0]})
              </Typography>
              <Typography>
                도착 {reservationDate[1]} ({reservationDay[1]})
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1rem 0',
            }}
          >
            <Typography>성인 x{numberOfTravellers}</Typography>
            <Typography>￦ {totalFee.toLocaleString('ko-KR')}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '1rem 0',
            }}
          >
            <Typography>합계</Typography>
            <Typography>￦ {totalFee.toLocaleString('ko-KR')}</Typography>
          </Box>
        </StyledSection>
        <StyledSection>
          <Typography>결제 방법</Typography>
          <FormControlLabel
            control={<Radio defaultChecked />}
            label="무통장입금"
          />
          <Typography>입금자명</Typography>
          <TextField
            name="depositor"
            size="small"
            placeholder="입금자명을 입력해주세요"
            sx={{ width: '100%' }}
          />
        </StyledSection>
        <StyledSection
          sx={{
            marginBottom: 0,
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="예약조건 확인 및 결제진행에 동의"
          />
          <Button
            variant="contained"
            sx={{
              width: '100%',
            }}
            onClick={requestReservation}
          >
            예약 완료
          </Button>
        </StyledSection>
      </Box>
    </>
  )
}

export default Book
