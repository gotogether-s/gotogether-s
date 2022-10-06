import React, { useState } from 'react'
import Modal from '../Modal'
import style from './Share.module.scss'

function index() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  return (
    <>
      <div className={style.share} onClick={() => setModalIsOpen(true)}>
        공유하기
      </div>
      {modalIsOpen && <Modal closeModal={() => setModalIsOpen(!modalIsOpen)} />}
    </>
  )
}

export default index
