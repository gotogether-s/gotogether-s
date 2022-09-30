import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
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

  const qnaLists = useSelector((state) => {
    return state.surveyQnaLists
  })

  const getUserAnswer = (e, qnaListindex) => {
    const key = Object.keys(userSurveyResult)[qnaListindex]
    const value = e.target.textContent
    setUserSurveyResult({
      ...userSurveyResult,
      [key]: value,
    })
  }

  useEffect(() => {
    console.log(userSurveyResult)
  }, [userSurveyResult])

  return (
    <>
      {qnaLists.map((qnaList, qnaListindex) => (
        <div key={qnaListindex} className={style['qna-wrapper']}>
          <Box className={style['question-wrapper']}>
            <div className={style['order']}>{qnaListindex + 1} of 5</div>
            <h2>{qnaList.question}</h2>
          </Box>
          <Box className={style['answer-wrapper']}>
            <List sx={{ padding: 0 }}>
              {qnaList.answers.map((answer, answerIndex) => (
                <ListItemButton
                  key={answerIndex}
                  onClick={() => getUserAnswer(event, qnaListindex)}
                >
                  <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </div>
      ))}
    </>
  )
}

export default QnA
