import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import React from 'react'
import button from './TopButton.module.scss'
import Fab from '@mui/material/Fab'
function index() {
  const upToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Fab className={button.buttonBackground} onClick={() => upToTop()}>
        <KeyboardArrowUpIcon className={button.button} />
      </Fab>
    </>
  )
}

export default index
