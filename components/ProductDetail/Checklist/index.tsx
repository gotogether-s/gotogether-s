import React from 'react'
import style from './Checklist.module.scss'
import NextArea from '../NextArea'

function index() {
  return (
    <>
      <div className={style.main}>[확인 사항]</div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2714.svg"
          alt=""
          width="25px"
          height="25px"
        />
        <div className={style.title}>포 함 사 항</div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2611.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>국제선 왕복항공권+유류할증료&TAX</div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2611.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>카사블랑카-튀니스 항공권</div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2611.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>일정상 표기된 숙박(2인 1실)</div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2611.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>일정상 표기된 식사</div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2611.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>일정상 표기된 전용차량</div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2611.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>
          일정상 표기된 포함투어(하단 내역 참고)
        </div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2611.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>한국인 인솔자 및 현지 가이드 비용</div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2611.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>
          3억 원 여행자보험(현지합류 고객은 불포함으로 직접 가입하셔야 합니다.)
        </div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2611.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>
          여권 커버/네임택/여행용 파우치/안내책자
        </div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2611.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>일정상 표기된 식사</div>
      </div>

      <div className={style.line} />
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/274c.svg"
          alt=""
          width="25px"
          height="25px"
        />
        <div className={style.title}>불 포 함 사 항</div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/274e.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>
          튀니지 유적지에서의 사진 또는 비디오 촬영비
        </div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/274e.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>에티켓 팁 등의 기타 개인경비</div>
      </div>
      <div className={style.container}>
        <img
          src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/274e.svg"
          alt=""
          width="20px"
          height="20px"
        />
        <div className={style.content}>1인 싱글룸 사용료 650,000원</div>
      </div>
      <NextArea />
    </>
  )
}

export default index
