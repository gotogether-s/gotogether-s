import { useRequestReservationMutation } from '@api/requestApi'
import ModalWindow from '@components/ModalWindow'
import NavBar from '@components/NavBar'
import TravellerInfoForm from '@components/TravellerInfoForm'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Radio,
  TextField,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { updateBookingClientInfo } from '@store/bookingClientInfoSlice'
import {
  createReservationPersonList,
  deleteReservationPersonList,
  updateReservationDetail,
} from '@store/makeReservationSlice'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Book.module.scss'

const StyledSection = styled('div')(() => ({
  backgroundColor: '#fff',
  padding: '1.6rem',
  marginBottom: '1.6rem',
}))

const Book = () => {
  const router = useRouter()

  const [requestReservation] = useRequestReservationMutation()

  const [numberOfTravellers, setNumberOfTravellers] = useState(1)
  const [TravellerInfoFormComponents, setTravellerInfoFormComponents] =
    useState([<TravellerInfoForm />])
  const [totalFee, setTotalFee] = useState(0)
  const [bookingClientValuesErrors, setBookingClientValuesErrors] = useState({})
  const [travellerValuesErrors, setTravellerValuesErrors] = useState([])
  const [depositor, setDepositor] = useState('')
  const [agreement, setAgreement] = useState(false)

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

  const bookingDurationDate = productOptionList
    .trim()
    .replace(/\s/g, '')
    .split('~')

  const getDayName = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('ko-KR', { weekday: 'long' })
  }

  const bookingDurationDay = bookingDurationDate.map((date) =>
    getDayName(date).charAt(0),
  )

  const getBookingClientInfo = useSelector((state) => {
    return state.bookingClientInfo
  })

  const dispatch = useDispatch()

  const inputChangeHandler = (e) => {
    const { name, value, checked } = e.target
    if (name === 'depositor') {
      setDepositor(value)
    } else if (name === 'agreement') {
      setAgreement(checked)
    } else {
      dispatch(updateBookingClientInfo({ [name]: value }))
    }
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    const removedSpacesValue = value.trim().replace(/\s/g, '')
    if (name === 'depositor') {
      setDepositor(removedSpacesValue)
    } else if (name === 'phoneNumber' && removedSpacesValue.length === 11) {
      const removedDashValue = removedSpacesValue.replaceAll('-', '')
      const formattedPhoneNumber =
        removedDashValue.slice(0, 3) +
        '-' +
        removedDashValue.slice(3, 7) +
        '-' +
        removedDashValue.slice(7)
      dispatch(updateBookingClientInfo({ [name]: formattedPhoneNumber }))
    } else {
      dispatch(updateBookingClientInfo({ [name]: removedSpacesValue }))
    }
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

  const validateValues = (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = '이름을 입력해주세요!'
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = '전화번호를 입력해주세요!'
    } else if (values.phoneNumber.length !== 13) {
      errors.phoneNumber = '전화번호는 11자리여야 합니다!'
    }
    if (!values.depositor) {
      errors.depositor = '입금자명을 입력해주세요!'
    }
    if (!values.agreement) {
      errors.agreement = '예약조건 확인 및 결제진행에 동의해주세요!'
    }
    return errors
  }

  const validateTravellerValues = (values) => {
    const errors = []
    const newObj = {
      name: '',
      phoneNumber: '',
    }
    for (let i = 0; i < values.length; i++) {
      if (values[i].name && values[i].phoneNumber) return
      errors.push(newObj)
      if (!values[i].name) {
        errors[i].name = '이름을 입력해주세요!'
      }
      if (!values[i].phoneNumber) {
        errors[i].phoneNumber = '전화번호를 입력해주세요!'
      } else if (values[i].phoneNumber.length !== 13) {
        errors[i].phoneNumber = '전화번호는 11자리여야 합니다!'
      }
    }
    return errors
  }

  const makeReservation = useSelector((state) => {
    return state.makeReservation
  })

  const clickReservationRequest = async (e) => {
    const bookingClientValuesValidation = validateValues({
      ...getBookingClientInfo,
      depositor: depositor,
      agreement: agreement,
    })
    setBookingClientValuesErrors(
      validateValues({
        ...getBookingClientInfo,
        depositor: depositor,
        agreement: agreement,
      }),
    )
    const { reservationPersonListDto } = makeReservation

    const travellerValuesValidation = validateTravellerValues(
      reservationPersonListDto,
    )
    setTravellerValuesErrors(validateTravellerValues(reservationPersonListDto))

    if (
      Object.keys(bookingClientValuesValidation).length ||
      (travellerValuesValidation &&
        Object.keys(travellerValuesValidation).length !== 0)
    )
      return

    try {
      const accessToken = localStorage.getItem('accessToken')
      const res = await requestReservation({
        data: makeReservation,
        accessToken: accessToken,
      })
      router.push('payment')
    } catch (e) {
      console.log('e: ', e)
    }
  }

  useEffect(() => {
    const reservationDetail = {
      product_id: productId,
      reservationDto: {
        totalReservationPeople: numberOfTravellers,
        totalBasicPrice: totalFee,
        totalPrice: totalFee,
        duration: productOptionList,
      },
    }
    dispatch(updateReservationDetail(reservationDetail))
  }, [productId, numberOfTravellers, totalFee, productOptionList])

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
                    출발 {bookingDurationDate[0]} ({bookingDurationDay[0]})
                  </Typography>
                  <Typography>
                    도착 {bookingDurationDate[1]} ({bookingDurationDay[1]})
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
              onChange={inputChangeHandler}
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
              onChange={inputChangeHandler}
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
            return (
              <TravellerInfoForm
                key={index}
                number={index + 1}
                travellerValuesErrors={travellerValuesErrors}
              />
            )
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
                출발 {bookingDurationDate[0]} ({bookingDurationDay[0]})
              </Typography>
              <Typography>
                도착 {bookingDurationDate[1]} ({bookingDurationDay[1]})
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
            value={depositor}
            onChange={inputChangeHandler}
            onBlur={removeInputSpaces}
            sx={{ width: '100%' }}
          />
          <p
            style={{
              visibility: bookingClientValuesErrors.depositor
                ? 'visible'
                : 'hidden',
            }}
            className={style['error-message']}
          >
            {bookingClientValuesErrors.depositor}
          </p>
        </StyledSection>
        <StyledSection
          sx={{
            marginBottom: 0,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                sx={{ padding: '0 0.5rem 0 0' }}
                name="agreement"
                checked={agreement}
                onChange={inputChangeHandler}
              />
            }
            label="예약조건 확인 및 결제진행에 동의"
            sx={{ margin: 0 }}
          />
          <p
            style={{
              visibility: bookingClientValuesErrors.agreement
                ? 'visible'
                : 'hidden',
              marginBottom: '1.6rem',
            }}
            className={style['error-message']}
          >
            {bookingClientValuesErrors.agreement}
          </p>
          <Button
            variant="contained"
            sx={{
              width: '100%',
            }}
            onClick={clickReservationRequest}
          >
            예약 완료
          </Button>
        </StyledSection>
      </Box>
    </>
  )
}

export default Book
