import { useSendSurveyResultMutation } from '@api/requestApi'
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import en from '@public/locales/en/QnA.json'
import ko from '@public/locales/ko/QnA.json'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const QnA = () => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const [sendSurveyResult] = useSendSurveyResultMutation()

  const [userSurveyResult, setUserSurveyResult] = useState({
    ages: '',
    genderGroup: '',
    companion: '',
    religion: '',
    theme: '',
  })
  const [surveyNumber, setSurveyNumber] = useState(1)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [displayMessage, setDisplayMessage] = useState('')
  const [lastSurvey, setLastSurvey] = useState(false)

  const getQnaLists = useSelector((state) => {
    return state.surveyQnaLists
  })

  const [qnaLists, setQnaLists] = useState(
    getQnaLists.slice(surveyNumber - 1, surveyNumber),
  )

  const getUserAnswer = (e, userSurveyResultIndex, answer, answerIndex) => {
    const key = Object.keys(userSurveyResult)[userSurveyResultIndex]

    setUserSurveyResult({
      ...userSurveyResult,
      [key]: answer,
    })
    setSelectedAnswer(answerIndex)
  }

  const goToNextSurvey = () => {
    const key = Object.keys(userSurveyResult)[surveyNumber - 1]
    if (!userSurveyResult[key]) {
      setDisplayMessage(translate['문항 선택 후 다음 질문으로 넘어가주세요'])
      return
    }
    setSurveyNumber(surveyNumber + 1)
    if (surveyNumber === Object.keys(userSurveyResult).length) return
    if (surveyNumber === Object.keys(userSurveyResult).length - 1) {
      setLastSurvey(true)
    }
    setDisplayMessage('')
    setSelectedAnswer(null)
    setQnaLists(getQnaLists.slice(surveyNumber, surveyNumber + 1))
  }

  const submitSurvey = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')

      const res = await sendSurveyResult({
        data: userSurveyResult,
        accessToken: accessToken,
      })

      if ('data' in res && res.data.statusCode === 200) {
        setDisplayMessage(translate['설문조사에 응해주셔서 감사합니다'])
        setTimeout(() => {
          router.push('/')
        }, 3000)
      } else {
        setDisplayMessage(
          translate['설문조사 제출에 실패했습니다. 다시 시도해주세요.'],
        )
        setTimeout(() => {
          router.reload()
        }, 2000)
      }
    } catch (e) {
      console.log('e: ', e)
      setDisplayMessage(
        translate['설문조사 제출에 실패했습니다. 다시 시도해주세요.'],
      )
      setTimeout(() => {
        router.reload()
      }, 2000)
    }
  }

  const skipSurvey = () => {
    router.push('/')
  }

  return (
    <>
      {qnaLists.map((qnaList, qnaListindex) => (
        <Box
          key={qnaListindex}
          sx={{
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              padding: '5rem 0',
              borderRadius: '1rem',
              boxShadow: '3px 3px 10px 0px rgb(0 0 0 / 10%)',
              marginBottom: '2rem',
            }}
          >
            <Typography sx={{ fontSize: '1.4rem', marginBottom: '2rem' }}>
              {surveyNumber} of 5
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography sx={{ fontSize: '1.8rem', width: '70%' }}>
                {translate[qnaList.question]}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ margin: '4rem -1.6rem' }}>
            <List
              sx={{
                padding: 0,
                borderTop: '1px solid #ddd',
              }}
            >
              {qnaList.answers.map((answer, answerIndex) => (
                <ListItemButton
                  key={answerIndex}
                  sx={{
                    borderBottom: '1px solid #ddd',
                    backgroundColor:
                      answerIndex === selectedAnswer && '#F2F4FA',
                  }}
                  onClick={() =>
                    getUserAnswer(event, surveyNumber - 1, answer, answerIndex)
                  }
                >
                  <ListItemText
                    primary={translate[answer]}
                    sx={{ textAlign: 'center' }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>
      ))}
      <Button
        variant="contained"
        sx={{
          display: lastSurvey ? 'none' : 'block',
          width: '100%',
          backgroundColor: '#4581F8',
          boxShadow: 'none',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          fontWeight: '500',
          marginBottom: '1rem',
          '&:hover': {
            backgroundColor: '#4581F8',
            boxShadow: 'none',
          },
        }}
        onClick={goToNextSurvey}
      >
        {translate['다음']}
      </Button>
      <Button
        variant="outlined"
        sx={{
          display: lastSurvey ? 'none' : 'block',
          width: '100%',
          backgroundColor: '#BEBEBE',
          color: '#fff',
          boxShadow: 'none',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          fontWeight: '500',
          marginBottom: '1rem',
          borderColor: '#BEBEBE',
          '&:hover': {
            backgroundColor: '#BEBEBE',
            borderColor: '#BEBEBE',
            boxShadow: 'none',
          },
        }}
        onClick={skipSurvey}
      >
        {translate['다음에 하기']}
      </Button>
      <Button
        variant="contained"
        sx={{
          display: lastSurvey ? 'block' : 'none',
          width: '100%',
          backgroundColor: '#4581F8',
          boxShadow: 'none',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          fontWeight: '500',
          marginBottom: '1rem',
          '&:hover': {
            backgroundColor: '#4581F8',
            boxShadow: 'none',
          },
        }}
        onClick={submitSurvey}
      >
        {translate['완료']}
      </Button>
      <Typography
        sx={{
          visibility: displayMessage ? 'visible' : 'hidden',
          color:
            displayMessage !== translate['설문조사에 응해주셔서 감사합니다']
              ? 'tomato'
              : 'green',
          fontSize: '1.4rem',
          height: '1.6rem',
          lineHeight: 'normal',
        }}
      >
        {displayMessage}
      </Typography>
    </>
  )
}

export default QnA
