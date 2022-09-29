import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    open: false,
    question: '함께 여행하고 싶은 연령대 그룹은?',
    answers: [
      { label: '10대' },
      { label: '20대' },
      { label: '30대' },
      { label: '40대' },
      { label: '50대' },
      { label: '60대' },
      { label: '70대 이상' },
    ],
  },
]

const surveyQnaListsSlice = createSlice({
  name: 'surveyQnaListsSlice',
  initialState: initialState,
  reducers: {},
})

export default surveyQnaListsSlice
