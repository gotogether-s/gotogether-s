import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useSelector } from 'react-redux'
import style from './QnA.module.scss'

const QnA = () => {
  const qnaLists = useSelector((state) => {
    return state.surveyQnaLists
  })

  return (
    <>
      {qnaLists.map((qnaList, index) => (
        <div key={index} className={style['qna-wrapper']}>
          <Box className={style['question-wrapper']}>
            <div className={style['order']}>{index + 1} of 5</div>
            <h2>{qnaList.question}</h2>
          </Box>
          <Box className={style['answer-wrapper']}>
            <List sx={{ padding: 0 }}>
              {qnaList.answers.map((answer, index) => (
                <ListItemButton key={index}>
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
