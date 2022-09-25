import React from 'react'
import style from './ProductFooter.module.scss'

function index() {
  return (
    <footer className={style.footer}>
      <div className={style.wish}>찜하기</div>
      <div className={style.reservation}>예약하기</div>
    </footer>
  )
}

export default index
