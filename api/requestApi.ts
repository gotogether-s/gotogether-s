import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const requestApi = createApi({
  reducerPath: 'requestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: ({ data }) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
    signUp: builder.mutation({
      query: ({ data }) => ({
        url: '/members',
        method: 'POST',
        body: data,
      }),
    }),
    validateEmail: builder.mutation({
      query: ({ data }) => ({
        url: '/members/validation',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const {
  useSignInMutation,
  useSignUpMutation,
  useValidateEmailMutation,
} = requestApi
