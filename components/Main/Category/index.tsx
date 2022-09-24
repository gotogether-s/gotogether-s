import React from 'react'
import style from './Category.module.scss'
import Link from 'next/link'

function index() {
  return (
    <>
      <div className={style.main}>카테고리</div>
      <div className={style.category}>
        <div className={style.bundle1}>
          <Link href="/productlist" className={style.more}>
            <img className={style.img} src="./logo.png" alt="" />
          </Link>
          <div className={style.categoryName}>전체</div>
        </div>
        <div className={style.bundle2}>
          <Link href="/productlist/nation" className={style.more}>
            <img className={style.img} src="./logo.png" alt="" />
          </Link>
          <div className={style.categoryName}>국가별여행</div>
        </div>
        <div className={style.bundle2}>
          <Link href="/productlist/age" className={style.more}>
            <img className={style.img} src="./logo.png" alt="" />
          </Link>
          <div className={style.categoryName}>연령대별여행</div>
        </div>
        <div className={style.bundle2}>
          <Link href="/productlist/type" className={style.more}>
            <img className={style.img} src="./logo.png" alt="" />
          </Link>
          <div className={style.categoryName}>유형별여행</div>
        </div>
        <div className={style.bundle2}>
          <Link href="/productlist/theme" className={style.more}>
            <img className={style.img} src="./logo.png" alt="" />
          </Link>
          <div className={style.categoryName}>테마별여행</div>
        </div>
      </div>
    </>
  )
}

export default index
