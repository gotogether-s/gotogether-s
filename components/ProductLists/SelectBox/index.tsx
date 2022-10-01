import React from 'react'
import style from './SelectBox.module.scss'

type props = {
  api: string
}

function index({ api }: props) {
  return (
    <div className={style.selectBox_group}>
      <select className={style.selectBox}>
        <option value="">전체</option>
        <option value="">가격 높은 순</option>
        <option value="">가격 낮은 순</option>
      </select>

      {api == 'all' || api == 'continents' ? (
        <select className={style.selectBox}>
          <option value="상관 없음">국가전체</option>
          <option value="동남아시아">동남아시아</option>
          <option value="괌&사이판&하와이">괌&사이판&하와이</option>
          <option value="인도&주변국">인도&주변국</option>
          <option value="중앙아시아">중앙아시아</option>
          <option value="동남아프리카">동남아프리카</option>
          <option value="북아프리카&중동">북아프리카&중동</option>
          <option value="코카서스">코카서스</option>
          <option value="유럽">유럽</option>
          <option value="중남미">중남미</option>
          <option value="북미">북미</option>
          <option value="대만">대만</option>
          <option value="중국">중국</option>
          <option value="일본">일본</option>
        </select>
      ) : (
        <></>
      )}

      {api == 'all' || api == 'ages' ? (
        <select className={style.selectBox}>
          <option value="상관 없음">연령대 전체</option>
          <option value="10대">10대</option>
          <option value="20대">20대</option>
          <option value="30대">30대</option>
          <option value="40대">40대</option>
          <option value="50대">50대</option>
          <option value="60대">60대</option>
          <option value="70대 이상">70대 이상</option>
        </select>
      ) : (
        <></>
      )}

      {api == 'all' || api == 'companion' ? (
        <select className={style.selectBox}>
          <option value="상관 없음">유형 전체</option>
          <option value="남자끼리">남자끼리</option>
          <option value="여자끼리">여자끼리</option>
          <option value="나홀로 참가">나홀로 참가</option>
          <option value="친구나 동료">친구나 동료</option>
          <option value="연인이나 부부">연인이나 부부</option>
          <option value="자녀를 동반 가족">자녀를 동반 가족</option>
        </select>
      ) : (
        <></>
      )}

      {api == 'all' || api == 'themes' ? (
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
      ) : (
        <></>
      )}
    </div>
  )
}

export default index
