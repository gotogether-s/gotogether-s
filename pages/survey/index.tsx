import NavBar from '@components/NavBar'
import QnA from '@components/QnA'
import { Box, List, ListItem, Typography } from '@mui/material'
import en from '@public/locales/en/survey.json'
import ko from '@public/locales/ko/survey.json'
import { useRouter } from 'next/router'

const Survey = () => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  return (
    <>
      <NavBar link="/" title={translate['여행지 추천 받기']} />
      <Box sx={{ paddingBottom: '2rem' }}>
        <Typography
          sx={{
            fontSize: '1.8rem',
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          {translate['나에게 꼭 맞는 여행지 추천을 위해 항목을 선택해주세요']}
        </Typography>
        <List
          sx={{
            listStyleType: 'disc',
            padding: '0 0 0 1.6rem',
            margin: '2rem 0 3rem 0',
            '& .MuiListItem-root': {
              display: 'list-item',
            },
          }}
        >
          <ListItem
            sx={{
              padding: '0 0 0.5rem 0',
              fontSize: '1.4rem',
              color: '#7B7B7B',
            }}
          >
            {
              translate[
                '해당 설문은 여행지 추천 받기 메뉴에서 다시 할 수 있습니다.'
              ]
            }
          </ListItem>
          <ListItem
            sx={{
              padding: '0 0 0.5rem 0',
              fontSize: '1.4rem',
              color: '#7B7B7B',
            }}
          >
            {
              translate[
                '회원의 설문은 영구적으로 저장되며 홈페이지에 추천하는 여행상품이 보여집니다.'
              ]
            }
          </ListItem>
          <ListItem sx={{ padding: '0', fontSize: '1.4rem', color: '#7B7B7B' }}>
            {
              translate[
                '비회원 사용자의 설문은 30분간 저장되며 홈페이지에 추천하는 여행상품이 보여집니다.'
              ]
            }
          </ListItem>
        </List>
        <QnA />
      </Box>
    </>
  )
}

export default Survey
