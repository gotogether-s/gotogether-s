import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material'
import en from '@public/locales/en/book.json'
import ko from '@public/locales/ko/book.json'
import { openModal } from '@store/displayModalWindowSlice'
import {
  resetReservation,
  updateReservationPersonInfo,
} from '@store/makeReservationSlice'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TravellerInfoForm = ({ travellerValuesErrors, number }) => {
  const index = number - 1

  const dispatch = useDispatch()
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const [duplicateClientInfo, setDuplicateClientInfo] = useState(false)

  const updateDuplicateClientInfoState = () => {
    setDuplicateClientInfo(!duplicateClientInfo)
  }

  const bookingClientInfo = useSelector((state) => {
    return state.bookingClientInfo
  })

  const { name, phoneNumber } = bookingClientInfo

  const makeReservation = useSelector((state) => {
    return state.makeReservation
  })

  const { reservationPersonListDto } = makeReservation

  const getClientInfo = (duplicateClientInfo) => {
    if (duplicateClientInfo) {
      if (name === '' || phoneNumber === '') {
        setDuplicateClientInfo(false)
        dispatch(openModal())
      } else {
        dispatch(
          updateReservationPersonInfo({
            name: name,
            phoneNumber: phoneNumber,
            index: index,
          }),
        )
      }
    } else {
      if (name === '' || phoneNumber === '') {
        return
      } else {
        dispatch(
          updateReservationPersonInfo({
            name: '',
            phoneNumber: '',
            index: index,
          }),
        )
      }
    }
  }

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    dispatch(updateReservationPersonInfo({ [name]: value, index: index }))
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    const removedSpacesValue = value.trim().replace(/\s/g, '')
    if (name === 'phoneNumber' && removedSpacesValue.length === 11) {
      const removedDashValue = removedSpacesValue.replaceAll('-', '')
      const formattedPhoneNumber =
        removedDashValue.slice(0, 3) +
        '-' +
        removedDashValue.slice(3, 7) +
        '-' +
        removedDashValue.slice(7)
      dispatch(
        updateReservationPersonInfo({
          [name]: formattedPhoneNumber,
          index: index,
        }),
      )
    } else {
      dispatch(
        updateReservationPersonInfo({
          [name]: removedSpacesValue,
          index: index,
        }),
      )
    }
  }

  useEffect(() => {
    getClientInfo(duplicateClientInfo)
  }, [duplicateClientInfo])

  useEffect(() => {
    return () => {
      dispatch(resetReservation())
    }
  }, [])

  return (
    <Accordion
      defaultExpanded={true}
      disableGutters={true}
      sx={{
        marginTop: '2rem',
        boxShadow: 'unset',
        border: '1px solid #ddd',
        borderRadius: '5px',
        '&::before': {
          height: 0,
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        sx={{ backgroundColor: '#F2F4FA', marginBottom: '0' }}
      >
        <Typography>
          {translate['여행자 정보']} {number}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '1.6rem' }}>
        <Box>
          <Box
            sx={{
              display: number === 1 ? 'flex' : 'none',
              justifyContent: 'flex-end',
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={duplicateClientInfo}
                  onChange={updateDuplicateClientInfoState}
                />
              }
              label={
                <Typography sx={{ fontSize: '1.4rem' }}>
                  {translate['예약자 정보와 동일']}
                </Typography>
              }
              sx={{
                margin: '0 0 0.5rem',
                '& .MuiButtonBase-root': {
                  padding: '0 0.5rem 0 0',
                },
              }}
            />
          </Box>
          <Box sx={{ marginBottom: '1rem' }}>
            <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
              {translate['이름']}
            </Typography>
            <TextField
              name="name"
              size="small"
              placeholder={translate['이름을 입력해주세요']}
              value={reservationPersonListDto[number - 1].name}
              onChange={inputChangeHandler}
              onBlur={removeInputSpaces}
              sx={{ width: '100%' }}
            />
            <Typography
              sx={{
                visibility:
                  travellerValuesErrors &&
                  travellerValuesErrors[index] &&
                  travellerValuesErrors[index].name
                    ? 'visible'
                    : 'hidden',
                color: 'tomato',
                fontSize: '1.4rem',
                height: '1.6rem',
                paddingTop: '0.3rem',
                lineHeight: 'normal',
              }}
            >
              {travellerValuesErrors &&
                travellerValuesErrors[index] &&
                travellerValuesErrors[index].name}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 500, paddingBottom: '0.5rem' }}>
              {translate['전화번호']}
            </Typography>
            <TextField
              name="phoneNumber"
              size="small"
              placeholder={translate['전화번호 11자리를 입력해주세요']}
              value={reservationPersonListDto[number - 1].phoneNumber}
              onChange={inputChangeHandler}
              onBlur={removeInputSpaces}
              sx={{ width: '100%' }}
            />
            <Typography
              sx={{
                visibility:
                  travellerValuesErrors &&
                  travellerValuesErrors[index] &&
                  travellerValuesErrors[index].phoneNumber
                    ? 'visible'
                    : 'hidden',
                color: 'tomato',
                fontSize: '1.4rem',
                height: '1.6rem',
                paddingTop: '0.3rem',
                lineHeight: 'normal',
              }}
            >
              {travellerValuesErrors &&
                travellerValuesErrors[index] &&
                travellerValuesErrors[index].phoneNumber}
            </Typography>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default TravellerInfoForm
