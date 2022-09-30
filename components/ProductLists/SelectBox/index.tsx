import React from 'react'
import style from './SelectBox.module.scss'

function index() {
  return (
    <div>
      <div className={style.selectBox_group}>
        <select className={style.selectBox}>
          <option value="">전체</option>
          <option value="">가격 높은 순</option>
          <option value="">가격 낮은 순</option>
        </select>
        <select className={style.selectBox}>
          <option value="">대륙전체</option>
        </select>
        <select className={style.selectBox}>
          <option value="">국가전체</option>
          {/* 국가 데이터 가져와서 .map으로 뿌리기 */}
        </select>
        <select className={style.selectBox}>
          <option value="상관 없음">전체</option>
          <option value="10대">10대</option>
          <option value="20대">20대</option>
          <option value="30대">30대</option>
          <option value="40대">40대</option>
          <option value="50대">50대</option>
          <option value="60대">60대</option>
          <option value="70대 이상">70대 이상</option>
        </select>
        <select className={style.selectBox}>
          <option value="상관 없음">테마 전체</option>
          <option value="문화탐방">문화탐방</option>
          <option value="골프여행">골프여행</option>
          <option value="휴양지">휴양지</option>
          <option value="오지탐험">오지탐험</option>
          <option value="트레킹여행">트레킹여행</option>
          <option value="봉사활동">봉사활동</option>
          <option value="성지순례">성지순례</option>
        </select>
        <select className={style.selectBox}>
          <option value="상관 없음">유형 전체</option>
          <option value="남자끼리">남자끼리</option>
          <option value="여자끼리">여자끼리</option>
          <option value="나홀로 참가">나홀로 참가</option>
          <option value="친구나 동료">친구나 동료</option>
          <option value="연인이나 부부">연인이나 부부</option>
          <option value="자녀를 동반 가족">자녀를 동반 가족</option>
        </select>
      </div>
    </div>
  )
}

export default index
