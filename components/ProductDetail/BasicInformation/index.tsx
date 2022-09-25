import style from './BasicInformation.module.scss'
import NextArea from '../NextArea'

function index() {
  return (
    <>
      <div className={style.basicInformation}>
        <span className={style.nation}>방콕</span>
        <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
        <div className={style.hashTags}>
          <div className={style.hashTag}>#5070들만 &nbsp;</div>
          <div className={style.hashTag}>#골프여행 &nbsp;</div>
        </div>
        <div className={style.price}>790,000원</div>
      </div>
      <NextArea />
    </>
  )
}

export default index
