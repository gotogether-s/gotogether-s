import HeadInfo from '@components/HeadInfo'
import Main from '@components/Main/Main'
import en from '@public/locales/en/home.json'
import ko from '@public/locales/ko/home.json'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  return (
    <>
      <HeadInfo title={translate['페이지 제목']} />
      <Main />
    </>
  )
}

export default Home
