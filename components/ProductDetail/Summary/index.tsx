import React from 'react'
import style from './Summary.module.scss'
import NextArea from '../NextArea'

function index() {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>지역</div>
        <div className={style.content}>이탈리아 시칠리아 섬</div>
      </div>
      <div className={style.container}>
        <div className={style.title}>특징</div>
        <div className={style.content}>
          시칠리아 완전 일주 여행 / 팁 없음 / 쇼핑 없음 / 옵션 없음
        </div>
      </div>
      <div className={style.container}>
        <div className={style.title}>항공</div>
        <div className={style.content}>
          터키항공 인천-카타니아 왕복(이스탄불경유)
        </div>
      </div>
      <div className={style.share}>공유하기</div>
      <NextArea />
    </>
  )
}

export default index
