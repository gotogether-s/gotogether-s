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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import style from './BookingClerkForm.module.scss'

const BookingClerkForm = ({ number }) => {
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
              control={<Checkbox />}
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
              sx={{ width: '100%' }}
            />
          </div>
          <div className={style['input-wrapper']}>
            <div className={style['label']}>전화번호</div>
            <TextField
              name="phoneNumber"
              size="small"
              placeholder="전화번호을 입력해주세요"
              sx={{ width: '100%' }}
            />
          </div>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default BookingClerkForm
