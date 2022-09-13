import Head from 'next/head'

const HeadInfo = ({ title }: any) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

HeadInfo.defaultProps = {
  title: '고투게더',
}

export default HeadInfo
