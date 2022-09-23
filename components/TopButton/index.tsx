import { style } from '@mui/system'
import React from 'react'
import button from './TopButton.module.scss'

function index() {
  const upToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={button.button} onClick={() => upToTop()}>
      topbutton
    </div>
  )
}

export default index
