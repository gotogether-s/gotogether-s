import { Box, Button, Modal, Typography } from '@mui/material'
import en from '@public/locales/en/mainNav.json'
import ko from '@public/locales/ko/mainNav.json'
import { closeModal } from '@store/displayModalWindowSlice'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

const ModalWindow = ({ text, primaryBtnText, primaryBtnLink, options }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { locale, push } = router
  const translate = locale === 'en' ? en : ko

  const displayModalWindow = useSelector((state) => {
    return state.displayModalWindow
  })

  const { isOpen } = displayModalWindow

  const clickBtn = () => {
    router.push(`${primaryBtnLink}`)
    dispatch(closeModal())
  }

  const updateLanguageSetting = (language) => {
    if (language === translate['한국어']) {
      push(`/`, undefined, { locale: 'ko' })
    } else if (language === translate['영어']) {
      push(`/`, undefined, { locale: 'en' })
    }
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
            sx={{ marginBottom: '2rem', textAlign: 'center' }}
          >
            {text}
          </Typography>
          {options && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
              }}
            >
              {options.map((option) => (
                <Box
                  key={option.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    '&:hover': {
                      cursor: 'pointer',
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                  onClick={() => updateLanguageSetting(option.label)}
                >
                  <Image
                    src={option.icon}
                    alt={option.label}
                    width="50%"
                    height="50%"
                    objectFit="contain"
                  />
                  <Typography>{option.label}</Typography>
                </Box>
              ))}
            </Box>
          )}

          {primaryBtnText && (
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
          )}
        </Box>
      </Modal>
    </Box>
  )
}

export default ModalWindow
