import NavBar from '@components/NavBar'
import QnA from '@components/QnA'
import style from './Survey.module.scss'

const Survey = () => {
  return (
    <>
      <NavBar link="/" />
      <div className={style['intro']}>
        <h1>나에게 꼭 맞는 여행지 추천을 위해 항목을 선택해주세요</h1>
        <p>선택한 항목은 마이페이지에서 변경할 수 있습니다.</p>
      </div>
      <QnA />
    </>
  )
}

export default Survey
