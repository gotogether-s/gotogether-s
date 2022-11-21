import { createSlice } from '@reduxjs/toolkit'

const isLoginSlice = createSlice({
  name: 'isLoginSlice',
  initialState: { isLogin: false },
  reducers: {
    getLoginStatus: (state) => {
      if (localStorage.getItem('accessToken')) {
        state.isLogin = true
      } else {
        state.isLogin = false
      }
    },
  },
})

export default isLoginSlice

export const { getLoginStatus } = isLoginSlice.actions
