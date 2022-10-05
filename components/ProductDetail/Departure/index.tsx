import React, { useState, useEffect } from 'react'
import style from './Deperture.module.scss'
import NextArea from '../NextArea'
import { info } from '@store/detailToReservationSlice'
import { useSelector, useDispatch } from 'react-redux'

function index() {
  type Information = {
    departure: string
    etc1: string | null
    etc2: string | null
    etc3: string | null
  }
  const [informatinon, setInformation] = useState<Information>({
    departure: '',
    etc1: '',
    etc2: '',
    etc3: '',
  })
  const dispatch = useDispatch()
  const detailToReservation = useSelector((state: any) => {
    return state.detailToReservation
  })

  const selectDeperature = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setInformation({
      ...informatinon,
      [name]: value,
    })
  }

  useEffect(() => {
    dispatch(info(informatinon))
  }, [informatinon])

  return (
    <>
      <div className={style.departureDate}>
        <div className={style.departure}>출발일 (필수)</div>
        <div className={style.selectDepartureDate}>
          <select
            name="departure"
            className={style.select}
            onChange={selectDeperature}
          >
            <option value="">출발일 선택하기</option>
            <option value="2022.10.01">10월1일</option>
          </select>
          <select
            name="etc1"
            className={style.select}
            onChange={selectDeperature}
          >
            <option value="">객실 선택</option>
            <option value="1인">1인</option>
            <option value="2인">2인</option>
            <option value="3인">3인</option>
          </select>
          <select
            name="etc2"
            className={style.select}
            onChange={selectDeperature}
          >
            <option value="">객실 선택</option>
            <option value="1인">1인</option>
            <option value="2인">2인</option>
            <option value="3인">3인</option>
          </select>
          <select
            name="etc3"
            className={style.select}
            onChange={selectDeperature}
          >
            <option value="">객실 선택</option>
            <option value="1인">1인</option>
            <option value="2인">2인</option>
            <option value="3인">3인</option>
          </select>
        </div>
      </div>
      <NextArea />
    </>
  )
}

export default index
