import {
  Box,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Typography,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { updatePersonInfo } from '@store/makeReservationSlice'
import { openModal } from '@store/displayModalWindowSlice'
import { useState, useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ModalWindow from '@components/ModalWindow'
import style from './TravellerInfoForm.module.scss'

const TravellerInfoForm = ({ number }) => {
  const dispatch = useDispatch()

  const [duplicateClientInfo, setDuplicateClientInfo] = useState(false)

  const updateDuplicateClientInfoState = () => {
    setDuplicateClientInfo(!duplicateClientInfo)
  }

  const getBookingClientInfo = useSelector((state) => {
    return state.bookingClientInfo
  })

  const displayModalWindow = useSelector((state) => {
    return state.displayModalWindow
  })

  const { isOpen } = displayModalWindow

  const makeReservation = useSelector((state) => {
    return state.makeReservation
  })

  const { reservationPersonListDto } = makeReservation

  const getClientInfo = () => {
    const { name, phone } = getBookingClientInfo
    if (name === '' || phone === '') {
      setDuplicateClientInfo(false)
      dispatch(openModal())
    } else {
      console.log('예약자 정보 복사 후 입력')
    }
  }

  useEffect(() => {
    duplicateClientInfo && getClientInfo()
  }, [duplicateClientInfo])

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    const index = number - 1
    dispatch(updatePersonInfo({ [name]: value, index: index }))
  }

  return (
    <>
      {isOpen && (
        <ModalWindow
          text="예약자 정보를 먼저 입력해주세요"
          primaryBtnText="확인"
          primaryBtnLink=""
        />
      )}
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
          <Typography>여행자 정보 {number}</Typography>
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
                label="예약자 정보와 동일"
                sx={{
                  margin: '0 0 1rem 0',
                  '& .MuiButtonBase-root': {
                    padding: '0 0.5rem 0 0',
                  },
                }}
              />
            </Box>
            <div className={style['input-wrapper']}>
              <div className={style['label']}>이름</div>
              <TextField
                name="name"
                size="small"
                placeholder="이름을 입력해주세요"
                value={reservationPersonListDto[number - 1].name}
                onChange={inputChangeHandler}
                sx={{ width: '100%' }}
              />
            </div>
            <div className={style['input-wrapper']}>
              <div className={style['label']}>전화번호</div>
              <TextField
                name="phoneNumber"
                size="small"
                placeholder="전화번호을 입력해주세요"
                value={reservationPersonListDto[number - 1].phoneNumber}
                onChange={inputChangeHandler}
                sx={{ width: '100%' }}
              />
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default TravellerInfoForm
