import { styled } from '@mui/material/styles'
import { Box, Select, MenuItem } from '@mui/material'
import { useState } from 'react'
import NavBar from '@components/NavBar'
import style from './MyBooking.module.scss'

const reservationDurationOptions = [
  {
    label: '최근 3개월',
    value: '90',
  },
  {
    label: '최근 6개월',
    value: '180',
  },
  {
    label: '최근 1년',
    value: '365',
  },
  {
    label: '전체',
    value: 'all',
  },
]

const MyBooking = () => {
  const StyledSection = styled('div')(() => ({
    backgroundColor: '#fff',
    padding: '1.6rem',
    marginBottom: '1.6rem',
  }))

  const [reservationDuration, setReservationDuration] = useState(
    reservationDurationOptions[0].value,
  )

  const handleChange = (e) => {
    setReservationDuration(e.target.value)
  }

  return (
    <>
      <NavBar link={`/`} title="예약 확인 및 취소" marginBottom="0" />
      <Box sx={{ backgroundColor: '#F2F4FA' }}>
        <StyledSection>
          <Box>
            <Select
              fullWidth
              value={reservationDuration}
              onChange={handleChange}
              sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 } }}
            >
              {reservationDurationOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </StyledSection>
      </Box>
    </>
  )
}

export default MyBooking
