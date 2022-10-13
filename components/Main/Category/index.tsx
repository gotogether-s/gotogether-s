import style from './Category.module.scss'
import Link from 'next/link'

function index() {
  type Props = {
    name: string
    api: string
    apiAddress: string
  }
  const propsAll: Props = {
    name: '전체',
    api: 'all',
    apiAddress: 'all',
  }
  const propsContinents: Props = {
    name: '국가별 여행',
    api: 'continents',
    apiAddress: 'continents',
  }
  const propsAges: Props = {
    name: '연령대별 여행',
    api: 'ages',
    apiAddress: 'ages',
  }
  const propsCompanion: Props = {
    name: '유형별 여행',
    api: 'companion',
    apiAddress: 'companion',
  }
  const propsThemes: Props = {
    name: '테마별 여행',
    api: 'themes',
    apiAddress: 'themes',
  }

  return (
    <>
      <div className={style.main}>카테고리</div>
      <div className={style.category}>
        <div className={style.bundle1}>
          <Link
            href={`/product-list/${propsAll.api}?category1=&category2=&category3=&category4=&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img className={style.img} src="./logo.png" alt="" />
            </a>
          </Link>
          <div className={style.categoryName}>전체</div>
        </div>
        <div className={style.bundle2}>
          <Link
            href={`/product-list/${propsContinents.api}?category=&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img className={style.img} src="./logo.png" alt="" />
            </a>
          </Link>
          <div className={style.categoryName}>국가별여행</div>
        </div>
        <div className={style.bundle2}>
          <Link
            href={`/product-list/${propsAges.api}?category=&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img className={style.img} src="./logo.png" alt="" />
            </a>
          </Link>
          <div className={style.categoryName}>연령대별여행</div>
        </div>
        <div className={style.bundle2}>
          <Link
            href={`/product-list/${propsCompanion.api}?category=&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img className={style.img} src="./logo.png" alt="" />
            </a>
          </Link>
          <div className={style.categoryName}>유형별여행</div>
        </div>
        <div className={style.bundle2}>
          <Link
            href={`/product-list/${propsThemes.api}?category=&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img className={style.img} src="./logo.png" alt="" />
            </a>
          </Link>
          <div className={style.categoryName}>테마별여행</div>
        </div>
      </div>
    </>
  )
}

export default index
