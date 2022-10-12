import React from 'react'
import style from './SelectModal.module.scss'
import { filter } from '@store/filterSlice'

import { useSelector, useDispatch } from 'react-redux'

type Props = {
  age: String
  companion: String
  continent: String
  theme: String
  api: String
}

function index(props: any) {
  const closeModal = () => {
    props.closeModal()
  }
  const filter = useSelector((state: any) => {
    return state.filter
  })
  const dispatch = useDispatch()

  const propsContinents: Props = {
    age: '',
    companion: '',
    continent: '',
    theme: '',
    api: 'continent',
  }

  const filterList = (props: Props) => {
    dispatch(filter(props))
  }
  return (
    <div className={style.container} onClick={closeModal}>
      <div className={style.modalBody} onClick={(e) => e.stopPropagation()}>
        <div className={style.top}>
          <div className={style.sharePhrases}>국가 선택</div>
        </div>
        <div className={style.middle}>
          <div className={style.select}>
            <span className={style.name}>전체상품</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>괌&사이판&하와이</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>동남아시아</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>동남아프리카</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>대만</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>북미</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>북아프리카&중동</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>인도&주변국</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>유럽</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>일본</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>중국</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>중남미</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>코카서스</span>
          </div>
          <div className={style.select}>
            <span className={style.name}>호주&뉴질랜드</span>
          </div>
        </div>

        <div className={style.bottom}>
          <div className={style.result} onClick={closeModal}>
            결과보기
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
