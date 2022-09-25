import React from 'react'
import style from './Thumbnail.module.scss'

function index() {
  return (
    <div className={style.thumbnail}>
      <img
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
        alt="img"
        className={style.img}
      />
    </div>
  )
}

export default index
