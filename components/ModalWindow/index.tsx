import { Box, Button, Modal, Typography } from '@mui/material'
import { closeModal } from '@store/displayModalWindowSlice'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

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
    <Box>
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
            padding: '3.5rem 3rem',
            zIndex: 4,
          }}
        >
          <Typography
            id="modal-modal-description"
            sx={{ mb: 3, textAlign: 'center' }}
          >
            {text}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={clickBtn}
              sx={{
                backgroundColor: '#4581F8',
                boxShadow: 'none',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                fontWeight: '500',
                '&:hover': {
                  backgroundColor: '#4581F8',
                  boxShadow: 'none',
                },
              }}
            >
              {primaryBtnText}
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default ModalWindow
