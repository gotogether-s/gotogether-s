import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { view } from '@store/viewProductListSlice'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './TitleAndEtc.module.scss'

type titleProps = {
  title: string
  name: string
  api: string
}
type Props = {
  name: string
  api: string
}

function index(props: titleProps) {
  const dispatch = useDispatch()

  const viewList = (props: Props) => {
    dispatch(view(props))
  }
  return (
    <>
      <div className={style.mainAndMore}>
        <div className={style.main}>{props.title}</div>
        <Link href="/productlist" className={style.more}>
          <a onClick={() => viewList(props)}>더보기</a>
        </Link>
      </div>
    </>
  )
}

export default index
