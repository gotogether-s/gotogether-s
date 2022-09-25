import React from 'react'
import style from './Deperture.module.scss'
import NextArea from '../NextArea'

function index() {
  return (
    <>
      <div className={style.departureDate}>
        <div className={style.departure}>출발일 (필수)</div>
        <div className={style.selectDepartureDate}>
          <select className={style.select}>
            <option value="">출발일 선택하기</option>
          </select>
        </div>
      </div>
      <NextArea />
    </>
  )
}

export default index
