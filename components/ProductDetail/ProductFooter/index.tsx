import React from 'react'
import style from './ProductFooter.module.scss'
import { useSelector, useDispatch } from 'react-redux'

function index() {
  const detailToReservation = useSelector((state: any) => {
    return state.detailToReservation
  })
  const reservation = () => {
    console.log(detailToReservation)
  }
  const wish = () => {}

  return (
    <footer className={style.footer}>
      <div className={style.wish} onClick={() => wish()}>
        찜하기
      </div>
      <div className={style.reservation} onClick={() => reservation()}>
        예약하기
      </div>
    </footer>
  )
}

export default index
