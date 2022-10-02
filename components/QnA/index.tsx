import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import style from './QnA.module.scss'

const QnA = () => {
  const [userSurveyResult, setUserSurveyResult] = useState({
    ages: '',
    gender: '',
    companion: '',
    religion: '',
    theme: '',
  })

  const [surveyNumber, setSurveyNumber] = useState(1)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false)
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
    if (surveyNumber === Object.keys(userSurveyResult).length - 1)
      setLastSurvey(true)
    if (surveyNumber === Object.keys(userSurveyResult).length) return
    const key = Object.keys(userSurveyResult)[surveyNumber - 1]
    if (!userSurveyResult[key]) {
      setDisplayErrorMessage(true)
      return
    }
    setSelectedAnswer(null)
    setSurveyNumber(surveyNumber + 1)
    setQnaLists(getQnaLists.slice(surveyNumber, surveyNumber + 1))
  }

  const router = useRouter()

  const completeSurvey = () => {
    router.push('/signin')
  }

  const skipSurvey = () => {
    router.push('/signin')
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
        Skip
      </Button>
      <p
        style={{
          visibility: displayErrorMessage ? 'visible' : 'hidden',
        }}
        className={style['error-message']}
      >
        다음 질문으로 넘어가기 위해 대답을 선택해주세요!
      </p>
    </>
  )
}

export default QnA
