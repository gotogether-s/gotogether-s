import React from 'react'
import style from './Modal.module.scss'
import ShareSite from '../ShareSite'
import CloseIcon from '@mui/icons-material/Close'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function index(props: any) {
  const currentUrl = window.location.href
  const closeModal = () => {
    props.closeModal()
  }
  return (
    <div className={style.container} onClick={closeModal}>
      <div className={style.modalBody} onClick={(e) => e.stopPropagation()}>
        <div className={style.top}>
          <div className={style.sharePhrases}>공유하기</div>
          <CloseIcon
            fontSize="medium"
            className={style.closeButton}
            onClick={closeModal}
          />
        </div>
        <div className={style.middle}>
          <ShareSite />
        </div>
        <div className={style.bottom}>
          <input className={style.input} value={currentUrl} disabled />
          <CopyToClipboard text={currentUrl}>
            <button className={style.button}>복사</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  )
}

export default index
