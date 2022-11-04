import { useState, useEffect } from 'react'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import CloseIcon from '@mui/icons-material/Close'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
} from 'react-share'

function index({ data }: any) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  let currentUrl = ''
  if (typeof window !== 'undefined') {
    currentUrl = window.location.href

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_URL)
    }
  }

  const shareKakao = () => {
    const { Kakao, location } = window
    Kakao.Link.sendScrap({
      requestUrl: location.href,
    })
  }

  const shareKakaoStory = () => {
    window.Kakao.Story.share({
      url: encodeURI(encodeURIComponent(currentUrl)),
      text: '공유할 상품',
    })
  }

  const shareNaver = () => {
    let url = encodeURI(encodeURIComponent(currentUrl))
    let title = encodeURI('공유할 상품')
    let shareURL =
      'https://share.naver.com/web/shareView?url=' + url + '&title=' + title
    document.location = shareURL
  }

  const shareNaverBand = () => {
    let url = encodeURI(encodeURIComponent(currentUrl))
    let title = encodeURI('공유할 상품')
    let shareURL = 'https://band.us/plugin/share?body' + url + '&route=' + title
    document.location = shareURL
  }
  const closeModal = () => {
    setModalIsOpen(!modalIsOpen)
  }
  const detailData = JSON.parse(data.info)

  useEffect(() => {
    detailData
  }, [detailData])

  return (
    <div className="productDetail">
      <div className="thumbnail">
        <img src={data.thumbnail} alt="img" className="img" />
      </div>

      <div className="basicInformation">
        <span className="nation">{data.country}</span>
        <div className="title">{data.productName}</div>
        <div className="hashTags">
          <div className="hashTag">#{data.ages} &nbsp;</div>
          <div className="hashTag">#{data.companion} &nbsp;</div>
        </div>
        {data.basicPrice == 0 ? (
          <div className="price">가격 문의</div>
        ) : (
          <div className="price">
            {data.basicPrice.toLocaleString('ko-KR')}원
          </div>
        )}
      </div>
      <div className="nextArea" />

      <div className="departureDate">
        <div className="departure">출발일 (필수)</div>
        <div className="selectDepartureDate">
          <select name="departure" className="select">
            <option value="">출발일 선택하기</option>
            {data.productOptionList.출발일 &&
              data.productOptionList.출발일.map(
                (data: string, index: number) => (
                  <option key={index} value={data.value}>
                    {data.value}
                  </option>
                ),
              )}
          </select>
        </div>
      </div>
      <div className="nextArea" />

      <div className="titleContent">
        <div className="title">지역</div>
        <div className="content">{data.region}</div>
      </div>
      <div className="titleContent">
        <div className="title">특징</div>
        <div className="content">{data.points}</div>
      </div>
      <div className="titleContent">
        <div className="title">항공</div>
        <div className="content">{data.airport}</div>
      </div>
      <div className="share" onClick={() => setModalIsOpen(true)}>
        공유하기
      </div>
      {modalIsOpen && (
        <div className="shareContainer" onClick={closeModal}>
          <div className="shareModalBody" onClick={(e) => e.stopPropagation()}>
            <div className="top">
              <div className="sharePhrases">공유하기</div>
              <CloseIcon
                fontSize="medium"
                className="closeButton"
                onClick={closeModal}
              />
            </div>
            <div className="middle">
              <div className="FlexContainer">
                <div className="GridContainer">
                  <div className="site">
                    <img
                      src="https://new-version.download/wp-content/uploads/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-PC%EB%B2%84%EC%A0%84-150x150.png"
                      alt="kakaotalk"
                      className="kakaoImg"
                      onClick={shareKakao}
                    />
                    <div className="kakao">카카오톡</div>
                  </div>
                  <div className="site">
                    <img
                      src="https://developers.kakao.com/sdk/js/resources/story/icon_small.png"
                      alt="kakaotalk"
                      className="kakaoImg"
                      onClick={shareKakaoStory}
                    />
                    <div className="kakao">카카오스토리</div>
                  </div>
                  <div className="site">
                    <LineShareButton url={currentUrl}>
                      <LineIcon size={48} round={true} borderRadius={24} />
                    </LineShareButton>
                    <div className="siteName">라인</div>
                  </div>
                  <div className="site">
                    <img
                      src="data:image/png;base64,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"
                      alt="naver"
                      className="naverBandImg"
                      onClick={shareNaverBand}
                    />
                    <div className="naverBand">밴드</div>
                  </div>
                  <div className="site">
                    <img
                      src="https://clova-phinf.pstatic.net/MjAxODAzMjlfOTIg/MDAxNTIyMjg3MzM3OTAy.WkiZikYhauL1hnpLWmCUBJvKjr6xnkmzP99rZPFXVwgg.mNH66A47eL0Mf8G34mPlwBFKP0nZBf2ZJn5D4Rvs8Vwg.PNG/image.png"
                      alt="naver"
                      className="naverImg"
                      onClick={shareNaver}
                    />
                    <div className="naver">네이버</div>
                  </div>

                  <div className="site">
                    <FacebookShareButton url={currentUrl}>
                      <FacebookIcon size={48} round={true} borderRadius={24} />
                    </FacebookShareButton>
                    <div className="siteName">페이스북</div>
                  </div>
                  <div className="site">
                    <TwitterShareButton url={currentUrl}>
                      <TwitterIcon
                        size={48}
                        round={true}
                        borderRadius={24}
                      ></TwitterIcon>
                    </TwitterShareButton>
                    <div className="siteName">트위터</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <input className="input" value={currentUrl} disabled />
              <CopyToClipboard text={currentUrl}>
                <button className="button">복사</button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      )}
      <div className="nextArea" />

      <div className="explicate">
        {detailData &&
          detailData.map((data: any, index: number) => (
            <div key={index}>
              {data.type === 'image' ? (
                <img src={data.url} alt="img" width="100%" />
              ) : (
                <></>
              )}
            </div>
          ))}
      </div>

      <footer className="footer">
        <div className="wish">찜하기</div>
        <div className="reservation">예약하기</div>
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const res = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + `/product-details/${params.id}`,
  )
  const data = await res.data.data
  return { props: { data } }
}

export default index