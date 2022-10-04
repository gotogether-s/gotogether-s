import React, { useState, useEffect } from 'react'
import style from './IntroduceTravel.module.scss'
import NextArea from '../NextArea'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function index() {
  const [showMore, setShowMore] = useState<boolean>(false)
  const [visible, setVisible] = useState<string>('hidden')
  const [maxHeight, setMaxHeight] = useState<string>('50rem')

  useEffect(() => {
    if (showMore) {
      setVisible('visible')
      setMaxHeight('100%')
    } else {
      setVisible('hidden')
      setMaxHeight('50rem')
    }
  }, [showMore, visible, maxHeight])

  const Origin = () => {
    window.scrollTo(0, 1000)
  }

  return (
    <>
      <div className={style.main}>[여행 소개]</div>
      <div
        className={style.container}
        style={{ overflow: `${visible}`, maxHeight: `${maxHeight}` }}
      >
        <img
          src="https://cdn.imweb.me/upload/S202107158604372051740/4be833668f4d3.jpg"
          alt=""
          width="100%"
          height="100%"
        />
        <img
          src="https://cdn.imweb.me/upload/S202107158604372051740/3817a66bebc67.jpg"
          alt=""
          width="100%"
          height="100%"
        />
        <img
          src="https://cdn.imweb.me/upload/S202107158604372051740/685a60e6f7a5c.jpg"
          alt=""
          width="100%"
          height="100%"
        />
        <img
          src="https://cdn.imweb.me/upload/S202107158604372051740/08174412b1f42.jpg"
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <div className={style.more} onClick={() => Origin()}>
            <KeyboardArrowUpIcon fontSize="large" />
            접기
          </div>
        ) : (
          <div className={style.more}>
            <KeyboardArrowDownIcon fontSize="large" />
            더보기
          </div>
        )}
      </div>
      <NextArea />
    </>
  )
}

export default index
