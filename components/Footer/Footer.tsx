import CallIcon from '@mui/icons-material/Call'
import en from '@public/locales/en/footer.json'
import ko from '@public/locales/ko/footer.json'
import { useRouter } from 'next/router'
import style from './Footer.module.scss'

const Footer = () => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  return (
    <div className={style.footer}>
      <div className={style.selectMenu}>
        <div className={style.menu_start}>{translate['안심카드결제']}</div>
        <div className={style.menu}>{translate['이용약관']}</div>
        <div className={style.menu}>{translate['개인정보처리방침']}</div>
        <div className={style.menu_end}>{translate['여행약관']}</div>
      </div>
      <div className={style.infoSummary}>
        {translate['KEB하나은행 267-910020-36604 (주)더샤이니']}
      </div>
      <div className={style.line}></div>
      <div className={style.number}>
        <CallIcon fontSize="large" className={style.CallIcon} />
        02-6105-7711
        <br />
        09:00 ~ 18:00 {translate['(토요일/일요일 및 공휴일 휴무)']}
      </div>
      <div className={style.line}></div>
      <div className={style.infoAll}>
        <div className={style.icon} />
        <br />
        {translate['(주)더샤이니ㅣ대표: 김소영ㅣ개인정보보호책임자: 김승덕']}
        <br />
        {translate['서울특별시 중구 청계천로40 (한국관광공사 서울센터) 707호']}
        <br />
        <br />
        {translate['사업자등록번호']}: 495-87-02492
        <br />
        {translate['통신판매업신고번호']}: 2021-서울중구-2450
        <br />
        {translate['이메일']}: gotogether@shinytravels.com
        <br />
        <br />
        {
          translate[
            '고투게더 서비스 내 결제 발생 시 고객상담, 취소, 환불 등의 거래에 대하여 책임을 집니다.'
          ]
        }
        <br />{' '}
        {
          translate[
            '고투게더는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 상품, 거래정보 및 거래에 대하여 책임을 지지 않습니다.'
          ]
        }
        <br />
        <br /> {translate['Copyright ⓒ 2023 고투게더 All rights reserved.']}
      </div>
    </div>
  )
}

export default Footer
