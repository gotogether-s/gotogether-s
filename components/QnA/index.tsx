import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
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

  const getQnaLists = useSelector((state) => {
    return state.surveyQnaLists
  })

  const [qnaLists, setQnaLists] = useState(
    getQnaLists.slice(surveyNumber - 1, surveyNumber),
  )

  const getUserAnswer = (e, userSurveyResultIndex) => {
    const key = Object.keys(userSurveyResult)[userSurveyResultIndex]
    const value = e.target.textContent
    setUserSurveyResult({
      ...userSurveyResult,
      [key]: value,
    })
  }

  const goToNextSurvey = () => {
    if (surveyNumber === 5) return
    const key = Object.keys(userSurveyResult)[surveyNumber - 1]
    if (!userSurveyResult[key]) return
    setSurveyNumber(surveyNumber + 1)
    setQnaLists(getQnaLists.slice(surveyNumber, surveyNumber + 1))
  }

  useEffect(() => {
    console.log(userSurveyResult)
  }, [userSurveyResult])

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
                  onClick={() => getUserAnswer(event, surveyNumber - 1)}
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
        sx={{ width: '100%', marginBottom: '1rem' }}
        onClick={goToNextSurvey}
      >
        다음
      </Button>
      <Button variant="outlined" sx={{ width: '100%' }}>
        Skip
      </Button>
    </>
  )
}

export default QnA
