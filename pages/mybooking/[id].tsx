import { useGetReservationWithIdMutation } from '@api/requestApi'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NavBar from '@components/NavBar'

const myBookingDetail = () => {
  const router = useRouter()
  const { id } = router.query

  const [getReservationWithId] = useGetReservationWithIdMutation()

  const readBookingDetail = async (accessToken) => {
    try {
      const res = await getReservationWithId({
        id: id,
        accessToken: accessToken,
      })
      console.log('res: ', res)
    } catch (e) {
      console.log('e: ', e)
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken && id) readBookingDetail(accessToken)
  }, [id])

  return (
    <>
      <NavBar link={'/mybooking'} title="예약 내역 상세" marginBottom="0" />
    </>
  )
}

export default myBookingDetail
