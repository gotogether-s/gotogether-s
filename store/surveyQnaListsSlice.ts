import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    question: '함께 여행하고 싶은 연령대 그룹은?',
    answers: ['10대', '20대', '30대', '40대', '50대', '60대', '70대 이상'],
  },
  {
    question: '여행을 함께 하고 싶은 그룹 유형은?',
    answers: ['남자끼리', '여자끼리', '상관 없음'],
  },
  {
    question: '여행에 함께 참가하는 동행자의 유형은?',
    answers: [
      '나홀로 참가',
      '친구나 동료',
      '연인이나 부부',
      '자녀를 동반하는 가족',
      '상관 없음',
    ],
  },
  {
    question: '함께 여행하고 싶은 종교적 성향의 그룹은?',
    answers: ['하나님과 함께하는 여행', '부처님의 발자취를 찾아', '상관 없음'],
  },
  {
    question: '가고싶은 여행의 테마는?',
    answers: [
      '문화탐방',
      '골프여행',
      '휴양지',
      '오지탐험',
      '트레킹여행',
      '봉사활동',
      '성지순례',
      '상관 없음',
    ],
  },
]

const surveyQnaListsSlice = createSlice({
  name: 'surveyQnaListsSlice',
  initialState: initialState,
  reducers: {},
})

export default surveyQnaListsSlice
