import React, { useState, useEffect } from 'react'
import style from './ReservationWay.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function index() {
  const [showMore, setShowMore] = useState<boolean>(false)
  const [visible, setVisible] = useState<string>('hidden')
  const [maxHeight, setMaxHeight] = useState<string>('20rem')

  useEffect(() => {
    if (showMore) {
      setVisible('visible')
      setMaxHeight('100%')
    } else {
      setVisible('hidden')
      setMaxHeight('20rem')
    }
  }, [showMore, visible, maxHeight])

  const Origin = () => {
    window.scrollTo(0, 2600)
  }
  return (
    <>
      <div className={style.main}>[예약 방법]</div>
      <div
        className={style.all}
        style={{ overflow: `${visible}`, maxHeight: `${maxHeight}` }}
      >
        <div className={style.container}>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/1f446.svg"
            alt=""
            width="50px"
            height="50px"
            className={style.img}
          />
          <div className={style.title}>1. 예약하기</div>

          <div className={style.content}>
            가고싶은 여행상품 페이지에서
            <br />
            예약하기 버튼으로 신청합니다.
          </div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/1f4b5.svg"
            alt=""
            width="50px"
            height="50px"
            className={style.img}
          />
          <div className={style.title}>2. 계약금 입금</div>
          <div className={style.content}>
            메일 또는 메시지 확인 후
            <br />
            24시간내 계약금을 입금해주세요.
          </div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/1f4b5.svg"
            alt=""
            width="50px"
            height="50px"
            className={style.img}
          />
          <div className={style.title}>3. 출발확정/중도금 입금</div>
          <div className={style.content}>
            출발확정시 담당자의 안내에 따라
            <br />
            중도금을 입금해 주세요.
          </div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/1f4d1.svg"
            alt=""
            width="50px"
            height="50px"
            className={style.img}
          />
          <div className={style.title}>4. 잔금 입금/서류 신청</div>
          <div className={style.content}>
            출발 4주전 잔금안내를 드립니다.
            <br />
            이때 입국서류도 도 신청해 주세요.
          </div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/1f4de.svg"
            alt=""
            width="50px"
            height="50px"
            className={style.img}
          />
          <div className={style.title}>5. 여행 준비/공항 미팅</div>
          <div className={style.content}>
            출발 2~4주 전 여행 일정, 준비물,
            <br />
            공항 미팅장소를 안내해 드려요.
          </div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2708.svg"
            alt=""
            width="50px"
            height="50px"
            className={style.img}
          />
          <div className={style.title}>6. 여행 출발/추억 만들기</div>
          <div className={style.content}>
            공항 미팅 후 여행 출발, 여행 후에
            <br />
            생생한 후기로 추억을 나누세요.
          </div>
        </div>
        <div className={style.end}>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/1f4f1.svg"
            alt=""
            width="25px"
            height="25px"
            className={style.img}
          />
          <div className={style.content}>전화로 예약하실 수도 있습니다.</div>{' '}
        </div>
        <div className={style.endFinal}>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/1f4cc.svg"
            alt=""
            width="25px"
            height="25px"
            className={style.img}
          />
          <div className={style.content}>
            본 상품은 특별약관이 적용됩니다. 예약 전 약관을 꼭 읽어보세요.
          </div>
        </div>
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
    </>
  )
}

export default index
