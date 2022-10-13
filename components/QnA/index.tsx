import { Box, List, ListItemButton, ListItemText, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import style from './QnA.module.scss'

const QnA = () => {
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

  const router = useRouter()

  const completeSurvey = () => {
    requestSurveySubmit()
    router.push('/signin')
  }

  const skipSurvey = () => {
    router.push('/signin')
  }

  const requestSurveySubmit = () => {
    setDisplayMessage(
      '설문조사에 응해주셔서 감사합니다! 홈페이지로 이동합니다!',
    )
  }

  return (
    <>
      {qnaLists.map((qnaList, qnaListindex) => (
        <div key={qnaListindex} className={style['qna-wrapper']}>
          <Box className={style['question-wrapper']}>
            <div className={style['order']}>{surveyNumber} of 5</div>
            <h2>{qnaList.question}</h2>
          </Box>
          <Box className={style['answer-wrapper']}>
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
        </div>
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
        variant="contained"
        sx={{
          width: '100%',
          marginBottom: '1rem',
          display: lastSurvey ? 'block' : 'none',
        }}
        onClick={completeSurvey}
      >
        완료
      </Button>
      <Button variant="outlined" sx={{ width: '100%' }} onClick={skipSurvey}>
        나중에 하기
      </Button>
      <p
        style={{
          visibility: displayMessage ? 'visible' : 'hidden',
        }}
        className={
          displayMessage !==
          '설문조사에 응해주셔서 감사합니다! 홈페이지로 이동합니다!'
            ? style['error-message']
            : style['success-message']
        }
      >
        {displayMessage}
      </p>
    </>
  )
}

export default QnA
