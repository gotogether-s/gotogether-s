import Link from 'next/link'
import style from './Category.module.scss'

const Category = () => {
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
      <div className={style.category}>
        <div className={style.bundle}>
          <Link
            href={`/product-list/${propsAll.api}?category1=&category2=&category3=&category4=&page=0&sort=`}
            className={style.more}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.6vw"
              height="10.6vw"
              viewBox="0 0 101 101"
            >
              <g
                id="Group_173025"
                data-name="Group 173025"
                transform="translate(2840 7445)"
              >
                <circle
                  id="Ellipse_31"
                  data-name="Ellipse 31"
                  cx="50.5"
                  cy="50.5"
                  r="50.5"
                  transform="translate(-2840 -7445)"
                  fill="#f9f9f9"
                />
                <g
                  id="Group_377"
                  data-name="Group 377"
                  transform="translate(-2815.062 -7420.062)"
                >
                  <g
                    id="Ellipse_35"
                    data-name="Ellipse 35"
                    transform="translate(0.062 0.062)"
                    fill="none"
                    stroke="#4e4e4e"
                    strokeWidth="1.5"
                  >
                    <circle cx="26.5" cy="26.5" r="26.5" stroke="none" />
                    <circle cx="26.5" cy="26.5" r="25.75" fill="none" />
                  </g>
                  <g
                    id="Group_367"
                    data-name="Group 367"
                    transform="translate(11.501 22.402)"
                  >
                    <circle
                      id="Ellipse_36"
                      data-name="Ellipse 36"
                      cx="3.841"
                      cy="3.841"
                      r="3.841"
                      transform="translate(0)"
                      fill="#4581f8"
                    />
                    <circle
                      id="Ellipse_37"
                      data-name="Ellipse 37"
                      cx="3.841"
                      cy="3.841"
                      r="3.841"
                      transform="translate(11.524)"
                      fill="#4581f8"
                    />
                    <circle
                      id="Ellipse_38"
                      data-name="Ellipse 38"
                      cx="3.841"
                      cy="3.841"
                      r="3.841"
                      transform="translate(23.048)"
                      fill="#4581f8"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Link>
          <div className={style.categoryName}>전체</div>
        </div>
        <div className={style.bundle}>
          <Link
            href={`/product-list/${propsContinents.api}?category=&page=0&sort=`}
            className={style.more}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.6vw"
              height="10.6vw"
              viewBox="0 0 101 101"
            >
              <g
                id="Group_173018"
                data-name="Group 173018"
                transform="translate(-111 -660)"
              >
                <circle
                  id="Ellipse_9"
                  data-name="Ellipse 9"
                  cx="50.5"
                  cy="50.5"
                  r="50.5"
                  transform="translate(111 660)"
                  fill="#f9f9f9"
                />
                <g
                  id="Group_376"
                  data-name="Group 376"
                  transform="translate(139.585 684.774)"
                >
                  <path
                    id="Path_1081"
                    data-name="Path 1081"
                    d="M22.5,0a22.5,22.5,0,0,1,22.5,22.5c0,12.429-22.5,30.854-22.5,30.854S0,34.934,0,22.5A22.5,22.5,0,0,1,22.5,0Z"
                    transform="translate(0)"
                    fill="none"
                    stroke="#4e4e4e"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                  <g
                    id="Ellipse_33"
                    data-name="Ellipse 33"
                    transform="translate(8.117 7.176)"
                    fill="none"
                    stroke="#4581f8"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  >
                    <ellipse
                      cx="14.388"
                      cy="14.388"
                      rx="14.388"
                      ry="14.388"
                      stroke="none"
                    />
                    <ellipse
                      cx="14.388"
                      cy="14.388"
                      rx="13.638"
                      ry="13.638"
                      fill="none"
                    />
                  </g>
                  <g
                    id="Ellipse_34"
                    data-name="Ellipse 34"
                    transform="translate(18.413 17.472)"
                    fill="#4581f8"
                    stroke="#4581f8"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  >
                    <ellipse
                      cx="4.092"
                      cy="4.092"
                      rx="4.092"
                      ry="4.092"
                      stroke="none"
                    />
                    <ellipse
                      cx="4.092"
                      cy="4.092"
                      rx="3.342"
                      ry="3.342"
                      fill="none"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Link>
          <div className={style.categoryName}>국가별</div>
        </div>
        <div className={style.bundle}>
          <Link
            href={`/product-list/${propsAges.api}?category=&page=0&sort=`}
            className={style.more}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.6vw"
              height="10.6vw"
              viewBox="0 0 101 101"
            >
              <g
                id="Group_173021"
                data-name="Group 173021"
                transform="translate(-180 -660)"
              >
                <circle
                  id="Ellipse_10"
                  data-name="Ellipse 10"
                  cx="50.5"
                  cy="50.5"
                  r="50.5"
                  transform="translate(180 660)"
                  fill="#f9f9f9"
                />
                <g
                  id="Group_388"
                  data-name="Group 388"
                  transform="translate(193.34 673.339)"
                >
                  <path
                    id="Path_1097"
                    data-name="Path 1097"
                    d="M11.328,4.041a1.063,1.063,0,0,1,.084.368.822.822,0,0,1-.251.6.842.842,0,0,1-.619.251.881.881,0,0,1-.477-.142.807.807,0,0,1-.326-.393L8.8,2.384H2.791L1.837,4.727a.926.926,0,0,1-.335.393.841.841,0,0,1-.469.142A.8.8,0,0,1,.423,5,.865.865,0,0,1,.18,4.392a1.092,1.092,0,0,1,.084-.385l4.7-11.232a.849.849,0,0,1,.82-.586.813.813,0,0,1,.82.586ZM3.377.944H8.215L5.821-5.015Zm13.592-4.9a4.71,4.71,0,0,1,2.369.594,4.274,4.274,0,0,1,1.64,1.649,4.824,4.824,0,0,1,.594,2.41V4.309a5,5,0,0,1-.586,2.41,4.353,4.353,0,0,1-1.649,1.716,4.634,4.634,0,0,1-2.4.628,5.305,5.305,0,0,1-2.243-.477,4.687,4.687,0,0,1-1.741-1.364.758.758,0,0,1-.184-.469.729.729,0,0,1,.352-.6A.861.861,0,0,1,13.588,6a.827.827,0,0,1,.686.352,2.943,2.943,0,0,0,1.138.9,3.746,3.746,0,0,0,1.557.31,2.886,2.886,0,0,0,1.49-.393A2.831,2.831,0,0,0,19.53,6.008a3.844,3.844,0,0,0,.4-1.816v-.82a3.872,3.872,0,0,1-1.373,1.44,3.632,3.632,0,0,1-1.925.519,4.19,4.19,0,0,1-2.218-.594,4.065,4.065,0,0,1-1.523-1.649A5.145,5.145,0,0,1,12.349.693a4.879,4.879,0,0,1,.586-2.41,4.2,4.2,0,0,1,1.64-1.649A4.79,4.79,0,0,1,16.969-3.96Zm0,7.783a2.947,2.947,0,0,0,1.532-.4,2.777,2.777,0,0,0,1.055-1.113A3.4,3.4,0,0,0,19.932.693,3.449,3.449,0,0,0,19.555-.93,2.764,2.764,0,0,0,18.5-2.052a3.12,3.12,0,0,0-3.063,0A2.821,2.821,0,0,0,14.374-.93,3.388,3.388,0,0,0,13.989.693a3.339,3.339,0,0,0,.385,1.615,2.835,2.835,0,0,0,1.063,1.113A2.947,2.947,0,0,0,16.969,3.823ZM32.335.543a.7.7,0,0,1-.218.527.765.765,0,0,1-.552.209H25.2a2.949,2.949,0,0,0,1.063,1.891,3.284,3.284,0,0,0,2.151.72,3.259,3.259,0,0,0,1.046-.184,3.122,3.122,0,0,0,.9-.452.868.868,0,0,1,.552-.184.718.718,0,0,1,.5.167.731.731,0,0,1,.3.569.606.606,0,0,1-.268.5,4.628,4.628,0,0,1-1.414.736,5.061,5.061,0,0,1-1.615.285,5.049,5.049,0,0,1-2.461-.594,4.312,4.312,0,0,1-1.7-1.649A4.687,4.687,0,0,1,23.648.693a4.949,4.949,0,0,1,.577-2.4,4.175,4.175,0,0,1,1.607-1.657,4.585,4.585,0,0,1,2.335-.594,4.207,4.207,0,0,1,2.226.569,3.753,3.753,0,0,1,1.44,1.59A5.244,5.244,0,0,1,32.335.543ZM28.167-2.521a2.894,2.894,0,0,0-1.984.67A3.006,3.006,0,0,0,25.221-.06h5.574a2.967,2.967,0,0,0-.837-1.791A2.456,2.456,0,0,0,28.167-2.521Z"
                    transform="translate(20.98 36.971)"
                    fill="#4581f8"
                    stroke="#4581f8"
                    strokeWidth="0.2"
                  />
                  <g id="Group_173027" data-name="Group 173027">
                    <path
                      id="Path_1098"
                      data-name="Path 1098"
                      d="M0,0,5.323,5.323,10.645,0"
                      transform="translate(51.126 21.867) rotate(-37)"
                      fill="none"
                      stroke="#4e4e4e"
                      strokeWidth="1.5"
                    />
                    <g
                      id="Ellipse_88"
                      data-name="Ellipse 88"
                      transform="translate(10.66 10.661)"
                      fill="none"
                      stroke="#4e4e4e"
                      strokeWidth="1.5"
                    >
                      <circle cx="26.5" cy="26.5" r="26.5" stroke="none" />
                      <circle cx="26.5" cy="26.5" r="25.75" fill="none" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </Link>
          <div className={style.categoryName}>연령대별</div>
        </div>
        <div className={style.bundle}>
          <Link
            href={`/product-list/${propsCompanion.api}?category=&page=0&sort=`}
            className={style.more}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.6vw"
              height="10.6vw"
              viewBox="0 0 101 101"
            >
              <g
                id="Group_173020"
                data-name="Group 173020"
                transform="translate(-248 -660)"
              >
                <circle
                  id="Ellipse_11"
                  data-name="Ellipse 11"
                  cx="50.5"
                  cy="50.5"
                  r="50.5"
                  transform="translate(248 660)"
                  fill="#f9f9f9"
                />
                <g
                  id="Group_523"
                  data-name="Group 523"
                  transform="translate(271.123 691.436)"
                >
                  <g
                    id="Group_372"
                    data-name="Group 372"
                    transform="translate(30.487)"
                  >
                    <g
                      id="Ellipse_41"
                      data-name="Ellipse 41"
                      transform="translate(3.857)"
                      fill="none"
                      stroke="#4581f8"
                      strokeWidth="1.5"
                    >
                      <ellipse
                        cx="8.879"
                        cy="8.879"
                        rx="8.879"
                        ry="8.879"
                        stroke="none"
                      />
                      <ellipse
                        cx="8.879"
                        cy="8.879"
                        rx="8.129"
                        ry="8.129"
                        fill="none"
                      />
                    </g>
                    <path
                      id="Path_1084"
                      data-name="Path 1084"
                      d="M2120.207,668.84s-.691-17.13,12.886-17.13c12.056,0,12.579,12.245,12.579,17.183"
                      transform="translate(-2120.201 -630.763)"
                      fill="none"
                      stroke="#4e4e4e"
                      strokeWidth="1.5"
                    />
                  </g>
                  <g id="Group_522" data-name="Group 522">
                    <g
                      id="Ellipse_41-2"
                      data-name="Ellipse 41"
                      transform="translate(3.857)"
                      fill="none"
                      stroke="#4581f8"
                      strokeWidth="1.5"
                    >
                      <ellipse
                        cx="8.879"
                        cy="8.879"
                        rx="8.879"
                        ry="8.879"
                        stroke="none"
                      />
                      <ellipse
                        cx="8.879"
                        cy="8.879"
                        rx="8.129"
                        ry="8.129"
                        fill="none"
                      />
                    </g>
                    <path
                      id="Path_1084-2"
                      data-name="Path 1084"
                      d="M2120.207,668.84s-.691-17.13,12.886-17.13c12.056,0,12.579,12.245,12.579,17.183"
                      transform="translate(-2120.201 -630.763)"
                      fill="none"
                      stroke="#4e4e4e"
                      strokeWidth="1.5"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Link>
          <div className={style.categoryName}>유형별</div>
        </div>
        <div className={style.bundle}>
          <Link
            href={`/product-list/${propsThemes.api}?category=&page=0&sort=`}
            className={style.more}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.6vw"
              height="10.6vw"
              viewBox="0 0 101 101"
            >
              <g
                id="Group_173017"
                data-name="Group 173017"
                transform="translate(-317 -660)"
              >
                <circle
                  id="Ellipse_11"
                  data-name="Ellipse 11"
                  cx="50.5"
                  cy="50.5"
                  r="50.5"
                  transform="translate(317 660)"
                  fill="#f9f9f9"
                />
                <g
                  id="Group_385"
                  data-name="Group 385"
                  transform="translate(330.3 667.069)"
                >
                  <g
                    id="Group_385-2"
                    data-name="Group 385"
                    transform="translate(38.723 0) rotate(45)"
                  >
                    <g
                      id="Path_1089"
                      data-name="Path 1089"
                      transform="translate(20.382 0)"
                      fill="none"
                    >
                      <path
                        d="M8.441,0c4.662,0,8.441,3.3,8.441,7.376V42.808c0,9.066-8.441,9.686-8.441,9.686S0,51,0,42.808,0,7.376,0,7.376C0,3.3,3.779,0,8.441,0Z"
                        stroke="none"
                      />
                      <path
                        d="M 8.441280364990234 1.499996185302734 C 4.613850593566895 1.499996185302734 1.5 4.135765075683594 1.5 7.375556945800781 L 1.5 42.80751800537109 C 1.5 45.63683700561523 2.667710304260254 47.86122512817383 4.970690727233887 49.41888809204102 C 6.457779884338379 50.42470550537109 7.986173629760742 50.849609375 8.514632225036621 50.97497177124023 C 9.03173828125 50.90194320678711 10.52296447753906 50.62391662597656 11.96849060058594 49.71537780761719 C 14.23390007019043 48.2915153503418 15.38256072998047 45.96737670898438 15.38256072998047 42.80751800537109 L 15.38256072998047 7.375556945800781 C 15.38256072998047 4.135765075683594 12.26871013641357 1.499996185302734 8.441280364990234 1.499996185302734 M 8.441280364990234 -3.814697265625e-06 C 13.10327053070068 -3.814697265625e-06 16.88256072998047 3.302146911621094 16.88256072998047 7.375556945800781 C 16.88256072998047 7.375556945800781 16.88256072998047 33.74147796630859 16.88256072998047 42.80751800537109 C 16.88256072998047 51.87355804443359 8.441280364990234 52.49347686767578 8.441280364990234 52.49347686767578 C 8.441280364990234 52.49347686767578 0 50.99773788452148 0 42.80751800537109 C 0 34.61729431152344 0 7.375556945800781 0 7.375556945800781 C 0 3.302146911621094 3.779290199279785 -3.814697265625e-06 8.441280364990234 -3.814697265625e-06 Z"
                        stroke="none"
                        fill="#4e4e4e"
                      />
                    </g>
                    <path
                      id="Path_1090"
                      data-name="Path 1090"
                      d="M9.753,0,0,8.048l.093,3.619L16.646,8.048"
                      transform="translate(11.94 43.095)"
                      fill="none"
                      stroke="#4e4e4e"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Path_1095"
                      data-name="Path 1095"
                      d="M6.893,0l9.753,8.048-.093,3.619L0,8.048"
                      transform="translate(28.942 43.095)"
                      fill="none"
                      stroke="#4e4e4e"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Path_1092"
                      data-name="Path 1092"
                      d="M21.406,0,0,12.873V17.9l21.209-4.085"
                      transform="translate(0 20.213)"
                      fill="none"
                      stroke="#4e4e4e"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Path_1093"
                      data-name="Path 1093"
                      d="M0,0,21.765,12.873V17.9L.2,13.816"
                      transform="translate(36.127 20.213)"
                      fill="none"
                      stroke="#4e4e4e"
                      strokeWidth="1.5"
                    />
                  </g>
                  <g
                    id="Ellipse_45"
                    data-name="Ellipse 45"
                    transform="translate(48.673 23.046)"
                    fill="none"
                    stroke="#4581f8"
                    strokeWidth="1"
                  >
                    <circle cx="3.979" cy="3.979" r="3.979" stroke="none" />
                    <circle cx="3.979" cy="3.979" r="3.479" fill="none" />
                  </g>
                </g>
              </g>
            </svg>
          </Link>
          <div className={style.categoryName}>테마별</div>
        </div>
      </div>
    </>
  )
}

export default Category
