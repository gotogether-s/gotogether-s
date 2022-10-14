import NavBar from '@components/NavBar'
import QnA from '@components/QnA'
import style from './Survey.module.scss'

const Survey = () => {
  return (
    <>
      <NavBar link="/" />
      <div className={style['intro']}>
        <h1>나에게 꼭 맞는 여행지 추천을 위해 항목을 선택해주세요</h1>
        <ul>
          <li>해당 설문은 여행지 추천 받기 메뉴에서 다시 할 수 있습니다.</li>
          <li>
            회원의 설문은 영구적으로 저장되며 홈페이지에 추천하는 여행상품이
            보여집니다.
          </li>
          <li>
            비회원 사용자의 설문은 30분간 저장되며 홈페이지에 추천하는
            여행상품이 보여집니다.
          </li>
        </ul>
      </div>
      <QnA />
    </>
  )
}

export default Survey
