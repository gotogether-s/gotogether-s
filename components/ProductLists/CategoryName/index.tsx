import React from 'react'
import style from './CategoryName.module.scss'

function index(name: any) {
  return (
    <>
      <div className={style.category}>{name}</div>
      <div className={style.line} />
    </>
  )
}

export default index
