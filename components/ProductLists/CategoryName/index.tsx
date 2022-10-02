import React from 'react'
import style from './CategoryName.module.scss'

type propsType = {
  name: string
  api: string
}

function index(props: propsType) {
  return (
    <>
      <div className={style.category}>{props.name}</div>
      <div className={style.line} />
    </>
  )
}

export default index
