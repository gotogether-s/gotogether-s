import style from './ProductDetail.module.scss'
import ProductFooter from '../../components/ProductFooter'

function index() {
  return (
    <>
      <div className={style.thumbnail}>
        <img
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
          alt="img"
          className={style.img}
        />
      </div>

      <div className={style.basicInformation}>
        <span className={style.nation}>방콕</span>
        <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
        <div className={style.hashTags}>
          <div className={style.hashTag}>#5070들만 &nbsp;</div>
          <div className={style.hashTag}>#골프여행 &nbsp;</div>
        </div>
        <div className={style.price}>790,000원</div>
      </div>

      <div className={style.nextArea}></div>

      <div className={style.departureDate}>
        <div className={style.departure}>출발일 (필수)</div>
        <div className={style.selectDepartureDate}>
          <select className={style.select}>
            <option value="">출발일 선택하기</option>
          </select>
        </div>
      </div>

      <div className={style.nextArea}></div>

      <div className={style.nextArea}></div>

      <div className={style.nextArea}></div>

      <div className={style.nextArea}></div>

      <div className={style.nextArea}></div>

      <ProductFooter />
    </>
  )
}

export default index
