import * as React from 'react'
import { Box, Button, Typography, Modal, Backdrop } from '@mui/material'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '@store/displayModalWindowSlice'
import style from './ModalWindow.module.scss'

const ModalWindow = ({ text, primaryBtnText, primaryBtnLink }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const displayModalWindow = useSelector((state) => {
    return state.displayModalWindow
  })

  const { isOpen } = displayModalWindow

  const clickBtn = () => {
    router.push(`${primaryBtnLink}`)
    dispatch(closeModal())
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeModal)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          zIndex: 4,
        }}
      >
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '26rem',
            borderRadius: '6px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 3,
            zIndex: 4,
          }}
        >
          <Typography
            id="modal-modal-description"
            sx={{ mb: 2, textAlign: 'center' }}
          >
            {text}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button variant="contained" size="large" onClick={clickBtn}>
              {primaryBtnText}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalWindow
