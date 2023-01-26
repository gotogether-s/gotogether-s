import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import style from './ContinentsRecommend.module.scss'

const ContinentsRecommend = () => {
  return (
    <>
      <Swiper
        spaceBetween={8}
        slidesPerView={1.5}
        className="swiper-continent-all"
      >
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=동남아시아&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EB%82%A8%EC%95%84%EC%8B%9C%EC%95%84/%EB%B2%A0%ED%8A%B8%EB%82%A8/%EB%8B%A4%EB%82%AD%ED%98%B8%EC%9D%B4%EC%95%84%EB%82%98_%EA%B3%A8%ED%94%84%ED%8C%A9_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>동남아시아</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=괌,사이판,하와이&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EA%B4%8C%26%EC%82%AC%EC%9D%B4%ED%8C%90%26%ED%95%98%EC%99%80%EC%9D%B4/%ED%95%98%EC%99%80%EC%9D%B4/%ED%95%98%EC%99%80%EC%9D%B4%ED%99%80%EB%A6%AC%EB%8D%B0%EC%9D%B4_%EC%8B%A4%EC%86%8D%EA%B3%A8%ED%94%84%ED%8C%A9_6%EC%9D%BC%2C7%EC%9D%BC_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>괌,사이판,하와이</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=호주,뉴질랜드&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%ED%98%B8%EC%A3%BC%26%EB%89%B4%EC%A7%88%EB%9E%9C%EB%93%9C/%ED%98%B8%EC%A3%BC_8%EC%9D%BC_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>호주,뉴질랜드</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=인도,주변국&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EC%9D%B8%EB%8F%84%26%EC%A3%BC%EB%B3%80%EA%B5%AD/%EB%9D%BC%EB%8B%A4%ED%81%AC_12%EC%9D%BC_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>인도,주변국</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=중앙아시아&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EC%A4%91%EC%95%99%EC%95%84%EC%8B%9C%EC%95%84/%EC%A4%91%EC%95%99%EC%95%84%EC%8B%9C%EC%95%84_15%EC%9D%BC_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>중앙아시아</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=동남아프리카&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EB%8F%99%EB%82%A8%EC%95%84%ED%94%84%EB%A6%AC%EC%B9%B4/%EB%82%A8%EC%95%84%ED%94%84%EB%A6%AC%EC%B9%B45%EA%B0%9C%EA%B5%AD_14%EC%95%8C_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>동남아프리카</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=북아프리카,중동&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EB%B6%81%EC%95%84%ED%94%84%EB%A6%AC%EC%B9%B4%26%EC%A4%91%EB%8F%99/%EC%98%A4%EB%A7%8C_7%EC%9D%BC_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>북아프리카,중동</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=코카서스&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EC%BD%94%EC%B9%B4%EC%84%9C%EC%8A%A4/%EC%A1%B0%EC%A7%80%EC%95%84_8%EC%9D%BC_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>코카서스</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=유럽&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EC%9C%A0%EB%9F%BD/%EC%95%84%EC%9D%B4%EC%8A%AC%EB%9E%80%EB%93%9C%EC%98%A4%EB%A1%9C%EB%9D%BC_7%EC%9D%BC_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>유럽</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=중남미&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EC%A4%91%EB%82%A8%EB%AF%B8/%ED%8E%98%2C%EB%B3%BC%2C%EC%B9%A0_16%EC%9D%BC_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>중남미</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=북미&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EB%B6%81%EB%AF%B8/%EC%82%AC%EC%9D%B4%ED%8C%90%EC%9B%94%EB%93%9C%EB%A6%AC%EC%A1%B0%ED%8A%B85%EC%9D%BC_%EB%AA%A8%EB%91%90%ED%88%AC%EC%96%B4_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>북미</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=대만&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EB%8C%80%EB%A7%8C/%EB%8C%80%EB%A7%8C.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>대만</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=중국&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EC%A4%91%EA%B5%AD/%EC%B2%9C%EC%A7%84_%EA%B3%A8%ED%94%84%ED%8C%A9_4%EC%9D%BC_%EC%8D%B8%EB%84%A4%EC%9D%BC%EC%A1%B0%EB%B9%84%EC%A0%84.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>중국</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-continent">
          <Link
            href={`/product-list/continents?category=일본&page=0&sort=`}
            className={style.more}
          >
            <a>
              <img
                src="https://gotogether-s.s3.ap-northeast-2.amazonaws.com/%EC%9D%BC%EB%B3%B8/%EB%AF%B8%EC%95%BC%EC%9E%90%ED%82%A4_%EA%B3%A8%ED%94%84%ED%8C%A9_4%EC%9D%BC_%EC%8D%B8%EB%84%A4%EC%9D%BC%EC%95%84%EC%98%A4%EC%8B%9C%EB%A7%88.jpg"
                alt="img"
                className={style.img}
              />
              <div className={style.title}>일본</div>
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ContinentsRecommend
