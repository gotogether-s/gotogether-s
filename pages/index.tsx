import { useRequestMembersDetailMutation } from '@api/requestApi'
import HeadInfo from '@components/HeadInfo'
import Main from '@components/Main/Main'
import en from '@public/locales/en/home.json'
import ko from '@public/locales/ko/home.json'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const [requestMembersDetail] = useRequestMembersDetailMutation()

  const requestUserInfo = async (accessToken) => {
    try {
      const res = await requestMembersDetail({
        accessToken: accessToken,
      })
      if ('error' in res && 'status' in res.error && res.error.status === 401) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        return
      }
    } catch (e) {
      console.log('e: ', e)
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    accessToken && requestUserInfo(accessToken)
  }, [])

  return (
    <>
      <HeadInfo title={translate['페이지 제목']} />
      <Main />
    </>
  )
}

export default Home
