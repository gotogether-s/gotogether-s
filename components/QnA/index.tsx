import { useSendSurveyResultMutation } from '@api/requestApi'
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const QnA = () => {
  const router = useRouter()

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

  const getUserAnswer = (e, userSurveyResultIndex, answerIndex) => {
    const key = Object.keys(userSurveyResult)[userSurveyResultIndex]
    const value = e.target.textContent
    setUserSurveyResult({
      ...userSurveyResult,
      [key]: value,
    })
    setSelectedAnswer(answerIndex)
  }

  const goToNextSurvey = () => {
    const key = Object.keys(userSurveyResult)[surveyNumber - 1]
    if (!userSurveyResult[key]) {
      setDisplayMessage('문항 선택 후 다음 질문으로 넘어가주세요!')
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
      if (res.data.statusCode === 200) {
        setDisplayMessage(
          '설문조사에 응해주셔서 감사합니다! 홈페이지로 이동합니다!',
        )
        setTimeout(() => {
          router.push('/')
        }, 1000)
      } else if (res.data.statusCode === 400) {
        setDisplayMessage('에러발생! 설문조사를 다시 시도해주세요!')
        setTimeout(() => {
          router.push('/survey')
        }, 1000)
      }
    } catch (e) {
      console.log('e: ', e)
      setDisplayMessage('에러발생! 설문조사를 다시 시도해주세요!')
      setTimeout(() => {
        router.push('/survey')
      }, 1000)
    }
  }

  const skipSurvey = () => {
    router.push('/')
  }

  return (
    <>
      {qnaLists.map((qnaList, qnaListindex) => (
        <Box key={qnaListindex} sx={{ textAlign: 'center' }}>
          <Box sx={{ backgroundColor: '#dcdcdc', padding: '4rem 0' }}>
            <Typography sx={{ marginBottom: '1.5rem' }}>
              {surveyNumber} of 5
            </Typography>
            <Typography>{qnaList.question}</Typography>
          </Box>
          <Box sx={{ backgroundColor: '#f1f1f1', marginBottom: '2rem' }}>
            <List sx={{ padding: 0 }}>
              {qnaList.answers.map((answer, answerIndex) => (
                <ListItemButton
                  key={answerIndex}
                  sx={{
                    backgroundColor:
                      answerIndex === selectedAnswer && '#bcbcbc',
                  }}
                  onClick={() =>
                    getUserAnswer(event, surveyNumber - 1, answerIndex)
                  }
                >
                  <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>
      ))}
      <Button
        variant="contained"
        sx={{
          width: '100%',
          marginBottom: '1rem',
          display: lastSurvey ? 'none' : 'block',
        }}
        onClick={goToNextSurvey}
      >
        다음
      </Button>
      <Button
        variant="outlined"
        sx={{ width: '100%', display: lastSurvey ? 'none' : 'block' }}
        onClick={skipSurvey}
      >
        나중에 하기
      </Button>
      <Button
        variant="contained"
        sx={{
          width: '100%',
          marginBottom: '1rem',
          display: lastSurvey ? 'block' : 'none',
        }}
        onClick={submitSurvey}
      >
        완료
      </Button>
      <Typography
        sx={{
          visibility: displayMessage ? 'visible' : 'hidden',
          color:
            displayMessage !==
            '설문조사에 응해주셔서 감사합니다! 홈페이지로 이동합니다!'
              ? 'tomato'
              : 'green',
          fontSize: '1.4rem',
          height: '1.6rem',
          paddingTop: '0.3rem',
          lineHeight: 'normal',
        }}
      >
        {displayMessage}
      </Typography>
    </>
  )
}

export default QnA
