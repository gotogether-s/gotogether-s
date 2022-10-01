import React, { useEffect } from 'react'
import style from './Category.module.scss'
import Link from 'next/link'
import { view } from '../../../store/viewProductListSlice'
import { useDispatch } from 'react-redux'

function index() {
  const dispatch = useDispatch()
  type Props = {
    name: string
    api: string
  }
  const propsAll: Props = {
    name: '전체',
    api: 'all',
  }
  const propsContinents: Props = {
    name: '국가별 여행',
    api: 'continents',
  }
  const propsAges: Props = {
    name: '연령대별 여행',
    api: 'ages',
  }
  const propsCompanion: Props = {
    name: '유형별 여행',
    api: 'companion',
  }
  const propsThemes: Props = {
    name: '테마별 여행',
    api: 'themes',
  }

  const viewList = (props: Props) => {
    dispatch(view(props))
  }

  return (
    <>
      <div className={style.main}>카테고리</div>
      <div className={style.category}>
        <div className={style.bundle1}>
          <Link href="/productlist" className={style.more}>
            <a onClick={() => viewList(propsAll)}>
              <img className={style.img} src="./logo.png" alt="" />
            </a>
          </Link>
          <div className={style.categoryName}>전체</div>
        </div>
        <div className={style.bundle2}>
          <Link href="/productlist" className={style.more}>
            <a onClick={() => viewList(propsContinents)}>
              <img className={style.img} src="./logo.png" alt="" />
            </a>
          </Link>
          <div className={style.categoryName}>국가별여행</div>
        </div>
        <div className={style.bundle2}>
          <Link href="/productlist" className={style.more}>
            <a onClick={() => viewList(propsAges)}>
              <img className={style.img} src="./logo.png" alt="" />
            </a>
          </Link>
          <div className={style.categoryName}>연령대별여행</div>
        </div>
        <div className={style.bundle2}>
          <Link href="/productlist" className={style.more}>
            <a onClick={() => viewList(propsCompanion)}>
              <img className={style.img} src="./logo.png" alt="" />
            </a>
          </Link>
          <div className={style.categoryName}>유형별여행</div>
        </div>
        <div className={style.bundle2}>
          <Link href="/productlist" className={style.more}>
            <a onClick={() => viewList(propsThemes)}>
              <img className={style.img} src="./logo.png" alt="" />
            </a>
          </Link>
          <div className={style.categoryName}>테마별여행</div>
        </div>
      </div>
    </>
  )
}

export default index
