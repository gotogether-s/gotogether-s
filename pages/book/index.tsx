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
  Divider,
  FormControlLabel,
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

const StyledSection = styled('div')(() => ({
  backgroundColor: '#fff',
  padding: '1.6rem',
  marginBottom: '1.6rem',
}))

const Book = () => {
  const dispatch = useDispatch()
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
      errors.name = '????????? ??????????????????!'
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = '??????????????? ??????????????????!'
    } else if (values.phoneNumber.length !== 13) {
      errors.phoneNumber = '??????????????? 11???????????? ?????????!'
    }
    if (!values.depositor) {
      errors.depositor = '??????????????? ??????????????????!'
    }
    if (!values.agreement) {
      errors.agreement = '???????????? ?????? ??? ??????????????? ??????????????????!'
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
        errors[i].name = '????????? ??????????????????!'
      }
      if (!values[i].phoneNumber) {
        errors[i].phoneNumber = '??????????????? ??????????????????!'
      } else if (values[i].phoneNumber.length !== 13) {
        errors[i].phoneNumber = '??????????????? 11???????????? ?????????!'
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
        title="??????"
        marginBottom="0"
      />
      {isOpen && (
        <ModalWindow
          text="????????? ????????? ?????? ??????????????????"
          primaryBtnText="??????"
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
                <Typography sx={{ fontWeight: 500 }}>{productName}</Typography>
                <Typography sx={{ fontSize: '1.3rem' }}>{airport}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.5rem',
                  }}
                >
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 500 }}>
                    ??????
                  </Typography>
                  <Typography sx={{ fontSize: '1.3rem', color: '#4581F8' }}>
                    {bookingDurationDate[0]} ({bookingDurationDay[0]})
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.5rem',
                  }}
                >
                  <Typography sx={{ fontSize: '1.3rem', fontWeight: 500 }}>
                    ??????
                  </Typography>
                  <Box sx={{ fontSize: '1.3rem', color: '#4581F8' }}>
                    {bookingDurationDate[1]} ({bookingDurationDay[1]})
                  </Box>
                </Box>
              </Box>
              <Typography sx={{ fontSize: '1.3rem' }}>
                1??? /{' '}
                <Box sx={{ display: 'inline', fontWeight: 500 }}>
                  {basicPrice.toLocaleString('ko-KR')} ???
                </Box>
              </Typography>
            </CardContent>
          </Card>
        </StyledSection>
        <StyledSection>
          <Typography
            sx={{ fontWeight: 600, fontSize: '1.7rem', marginBottom: '1rem' }}
          >
            ????????? ?????? (??????)
          </Typography>
          <Divider sx={{ margin: '0 -1.6rem 1.6rem' }} />
          <Box sx={{ marginBottom: '1rem' }}>
            <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
              ??????
            </Typography>
            <TextField
              name="name"
              size="small"
              placeholder="????????? ??????????????????"
              sx={{ width: '100%' }}
              value={getBookingClientInfo.name}
              onChange={inputChangeHandler}
              onBlur={removeInputSpaces}
            />
            <Typography
              sx={{
                visibility: bookingClientValuesErrors.name
                  ? 'visible'
                  : 'hidden',
                color: 'tomato',
                fontSize: '1.4rem',
                height: '1.6rem',
                paddingTop: '0.3rem',
                lineHeight: 'normal',
              }}
            >
              {bookingClientValuesErrors.name}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: '1rem' }}>
            <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
              ????????????
            </Typography>
            <TextField
              name="phoneNumber"
              size="small"
              placeholder="???????????? 11????????? ??????????????????"
              sx={{ width: '100%' }}
              value={getBookingClientInfo.phoneNumber}
              onChange={inputChangeHandler}
              onBlur={removeInputSpaces}
            />
            <Typography
              sx={{
                visibility: bookingClientValuesErrors.phoneNumber
                  ? 'visible'
                  : 'hidden',
                color: 'tomato',
                fontSize: '1.4rem',
                height: '1.6rem',
                paddingTop: '0.3rem',
                lineHeight: 'normal',
              }}
            >
              {bookingClientValuesErrors.phoneNumber}
            </Typography>
          </Box>
        </StyledSection>
        <StyledSection>
          <Typography
            sx={{ fontWeight: 600, fontSize: '1.7rem', marginBottom: '1rem' }}
          >
            ??????
          </Typography>
          <Divider sx={{ margin: '0 -1.6rem 1.6rem' }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>?????????</Typography>
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
          <Typography
            sx={{ fontWeight: 600, fontSize: '1.7rem', marginBottom: '1rem' }}
          >
            ?????? ??????
          </Typography>
          <Divider sx={{ margin: '0 -1.6rem 1.6rem' }} />
          <Box
            sx={{
              padding: '1rem 0',
            }}
          >
            <Typography>{productName}</Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                }}
              >
                <Typography sx={{ fontSize: '1.3rem', fontWeight: 500 }}>
                  ??????
                </Typography>
                <Typography sx={{ fontSize: '1.3rem', color: '#4581F8' }}>
                  {bookingDurationDate[0]} ({bookingDurationDay[0]})
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                }}
              >
                <Typography sx={{ fontSize: '1.3rem', fontWeight: 500 }}>
                  ??????
                </Typography>
                <Box sx={{ fontSize: '1.3rem', color: '#4581F8' }}>
                  {bookingDurationDate[1]} ({bookingDurationDay[1]})
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 0',
            }}
          >
            <Typography>?????? x{numberOfTravellers}</Typography>
            <Typography>??? {totalFee.toLocaleString('ko-KR')}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 0 0',
            }}
          >
            <Typography sx={{ fontWeight: 500 }}>??????</Typography>
            <Typography>??? {totalFee.toLocaleString('ko-KR')}</Typography>
          </Box>
        </StyledSection>
        <StyledSection>
          <Typography
            sx={{ fontWeight: 600, fontSize: '1.7rem', marginBottom: '1rem' }}
          >
            ??????
          </Typography>
          <Divider sx={{ margin: '0 -1.6rem 1.6rem' }} />

          <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
            ????????????
          </Typography>
          <TextField
            name="depositor"
            size="small"
            placeholder="??????????????? ??????????????????"
            value={depositor}
            onChange={inputChangeHandler}
            onBlur={removeInputSpaces}
            sx={{ width: '100%' }}
          />

          <Typography
            sx={{
              visibility: bookingClientValuesErrors.depositor
                ? 'visible'
                : 'hidden',
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.3rem',
              lineHeight: 'normal',
            }}
          >
            {bookingClientValuesErrors.depositor}
          </Typography>
          <Typography sx={{ fontSize: '1.3rem', color: '#B9B9B9' }}>
            *KEB???????????? 267-910020-36604 (???)????????????
          </Typography>
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
            label="???????????? ?????? ??? ??????????????? ??????"
            sx={{ margin: 0 }}
          />
          <Typography
            sx={{
              visibility: bookingClientValuesErrors.agreement
                ? 'visible'
                : 'hidden',
              color: 'tomato',
              fontSize: '1.4rem',
              height: '1.6rem',
              paddingTop: '0.3rem',
              lineHeight: 'normal',
            }}
          >
            {bookingClientValuesErrors.agreement}
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
              margin: '1rem 0',
              '&:hover': {
                backgroundColor: '#4581F8',
                boxShadow: 'none',
              },
            }}
            onClick={clickReservationRequest}
          >
            ?????? ??????
          </Button>
        </StyledSection>
      </Box>
    </>
  )
}

export default Book
