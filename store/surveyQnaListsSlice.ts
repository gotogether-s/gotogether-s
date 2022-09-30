import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    question: '함께 여행하고 싶은 연령대 그룹은?',
    answers: ['10대', '20대', '30대', '40대', '50대', '60대', '70대 이상'],
  },
]

const surveyQnaListsSlice = createSlice({
  name: 'surveyQnaListsSlice',
  initialState: initialState,
  reducers: {},
})

export default surveyQnaListsSlice
