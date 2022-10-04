import React, { useState, useEffect } from 'react'
import style from './TravelCalender.module.scss'
import NextArea from '../NextArea'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function index() {
  const [showMore, setShowMore] = useState<boolean>(false)
  const [visible, setVisible] = useState<string>('hidden')
  const [maxHeight, setMaxHeight] = useState<string>('27rem')

  useEffect(() => {
    if (showMore) {
      setVisible('visible')
      setMaxHeight('100%')
    } else {
      setVisible('hidden')
      setMaxHeight('27rem')
    }
  }, [showMore, visible, maxHeight])

  const Origin = () => {
    window.scrollTo(0, 1600)
  }
  return (
    <>
      <div className={style.main}>[여행 일정]</div>
      <div
        className={style.all}
        style={{ overflow: `${visible}`, maxHeight: `${maxHeight}` }}
      >
        <div className={style.container}>
          <div className={style.title}>Day 1.</div>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/1f1f0-1f1f7.svg"
            alt=""
            width="30px"
            height="30px"
          />
          <div className={style.title}>인천</div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdn.imweb.me/upload/S202107158604372051740/ca4c7edac65c1.png"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>인천→밀라노</div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdn.imweb.me/upload/S202107158604372051740/d29c6be743490.png"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>국제선</div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdn.imweb.me/upload/S202107158604372051740/8f20c2f5a6570.png"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>기내숙박</div>
        </div>
        <div className={style.container}>
          <img
            src="	https://cdn.imweb.me/upload/S202107158604372051740/8b228f1ea2858.png"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>기내식</div>
        </div>
        <div className={style.container}>
          <ul className={style.ul}>
            <li>
              <div className={style.content}>
                21:00 인천공항 미팅 후 출국수속
              </div>
            </li>
            <li>
              <div className={style.content}>23:55 인천 출발</div>
            </li>
          </ul>
        </div>

        <div className={style.container}>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2755.svg"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>
            이용 항공편에 따라 경유지, 시간 변동됩니다.
          </div>
        </div>

        <div className={style.line} />
        <div className={style.container}>
          <div className={style.title}>Day 2.</div>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/1f1f0-1f1f7.svg"
            alt=""
            width="30px"
            height="30px"
          />
          <div className={style.title}>인천</div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdn.imweb.me/upload/S202107158604372051740/ca4c7edac65c1.png"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>인천→밀라노</div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdn.imweb.me/upload/S202107158604372051740/d29c6be743490.png"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>국제선</div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdn.imweb.me/upload/S202107158604372051740/8f20c2f5a6570.png"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>기내숙박</div>
        </div>
        <div className={style.container}>
          <img
            src="	https://cdn.imweb.me/upload/S202107158604372051740/8b228f1ea2858.png"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>기내식</div>
        </div>
        <div className={style.container}>
          <ul className={style.ul}>
            <li>
              <div className={style.content}>
                21:00 인천공항 미팅 후 출국수속
              </div>
            </li>
            <li>
              <div className={style.content}>23:55 인천 출발</div>
            </li>
          </ul>
        </div>

        <div className={style.container}>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2755.svg"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>
            이용 항공편에 따라 경유지, 시간 변동됩니다.
          </div>
        </div>
        <div className={style.container}>
          <div className={style.line} />
        </div>
        <div className={style.container}>
          <div className={style.title}>Day 3.</div>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/1f1f0-1f1f7.svg"
            alt=""
            width="30px"
            height="30px"
          />
          <div className={style.title}>인천</div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdn.imweb.me/upload/S202107158604372051740/ca4c7edac65c1.png"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>인천→밀라노</div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdn.imweb.me/upload/S202107158604372051740/d29c6be743490.png"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>국제선</div>
        </div>
        <div className={style.container}>
          <img
            src="https://cdn.imweb.me/upload/S202107158604372051740/8f20c2f5a6570.png"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>기내숙박</div>
        </div>
        <div className={style.container}>
          <img
            src="	https://cdn.imweb.me/upload/S202107158604372051740/8b228f1ea2858.png"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>기내식</div>
        </div>
        <div className={style.container}>
          <ul className={style.ul}>
            <li>
              <div className={style.content}>
                21:00 인천공항 미팅 후 출국수속
              </div>
            </li>
            <li>
              <div className={style.content}>23:55 인천 출발</div>
            </li>
          </ul>
        </div>

        <div className={style.container}>
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/2755.svg"
            alt=""
            width="20px"
            height="20px"
          />
          <div className={style.content}>
            이용 항공편에 따라 경유지, 시간 변동됩니다.
          </div>
        </div>
      </div>

      <div className={style.line} />
      <div onClick={() => setShowMore(!showMore)}>
        {showMore ? (
          <div className={style.more} onClick={() => Origin()}>
            <KeyboardArrowUpIcon fontSize="large" />
            접기
          </div>
        ) : (
          <div className={style.more}>
            <KeyboardArrowDownIcon fontSize="large" />
            더보기
          </div>
        )}
      </div>
      <NextArea />
    </>
  )
}

export default index
