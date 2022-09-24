import React from 'react'
import style from './productlist.module.scss'
import TopButton from '../../components/TopButton'

function index() {
  return (
    <>
      <TopButton />
      <div className={style.category}>전체</div>
      <div className={style.line} />
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
          <option value="NO_MATTER">연령대 전체</option>
          <option value="TEENAGERS">10대</option>
          <option value="TWENTIES">20대</option>
          <option value="THIRTIES">30대</option>
          <option value="FOURTIES">40대</option>
          <option value="FIFTIES">50대</option>
          <option value="SIXTIES">60대</option>
          <option value="SEVENTIES_AND_OVER">70대 이상</option>
        </select>
        <select className={style.selectBox}>
          <option value="NO_MATTER">테마 전체</option>
          <option value="CULTURE">문화탐방</option>
          <option value="GOLF">골프여행</option>
          <option value="HEALING">리조트 휴양 및 힐링</option>
          <option value="ADVANTURE">오지탐험</option>
          <option value="TRACKING">트레킹 여행</option>
          <option value="VOLUNTEER">봉사활동</option>
          <option value="HOLYLAND ">성지순례</option>
        </select>
        <select className={style.selectBox}>
          <option value="NO_MATTER">유형 전체</option>
          <option value="MALE_ONLY">남자끼리</option>
          <option value="FEMALE_ONLY">여자끼리</option>
          <option value="SOLO">나홀로 여행</option>
          <option value="FRIENDS">친구나 동료</option>
          <option value="COUPLE">연인이나 부부</option>
          <option value="FAMILY">자녀 동반 가족</option>
        </select>
      </div>
      <div className={style.productTotal}>00개 상품</div>
      <div className={style.productLists}>
        <div className={style.productList}>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="185px"
            height="185px"
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
        </div>
        <div className={style.productList}>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="185px"
            height="185px"
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
        </div>
        <div className={style.productList}>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="185px"
            height="185px"
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
        </div>
        <div className={style.productList}>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="185px"
            height="185px"
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
        </div>
        <div className={style.productList}>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="185px"
            height="185px"
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
        </div>
        <div className={style.productList}>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="185px"
            height="185px"
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
        </div>
        <div className={style.productList}>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="185px"
            height="185px"
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
        </div>
        <div className={style.productList}>
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F996CEF385DF8757947DC1D"
            alt="img"
            width="185px"
            height="185px"
          />
          <span className={style.nation}>방콕</span>
          <div className={style.title}>GOLFTEI 파인 허스트 CC</div>
          <div className={style.hashTags}>
            <div className={style.hashTag}>#5070들만 &nbsp;</div>
            <div className={style.hashTag}>#골프여행 &nbsp;</div>
          </div>
          <div className={style.price}>790,000원</div>
        </div>
      </div>
    </>
  )
}

export default index
