import React from 'react'
import style from './Category.module.scss'

function index() {
  return (
    <>
      <div className={style.main}>카테고리</div>
      <div className={style.category}>
        <div className={style.bundle1}>
          <img width={40} height={40} src="./logo.png" alt="" />
          <div className={style.categoryName}>전체</div>
        </div>
        <div className={style.bundle2}>
          <img width={40} height={40} src="./logo.png" alt="" />
          <div className={style.categoryName}>국가별여행</div>
        </div>
        <div className={style.bundle2}>
          <img width={40} height={40} src="./logo.png" alt="" />
          <div className={style.categoryName}>연령대별여행</div>
        </div>
        <div className={style.bundle2}>
          <img width={40} height={40} src="./logo.png" alt="" />
          <div className={style.categoryName}>그룹별여행</div>
        </div>
        <div className={style.bundle2}>
          <img width={40} height={40} src="./logo.png" alt="" />
          <div className={style.categoryName}>테마별여행</div>
        </div>
      </div>
    </>
  )
}

export default index
