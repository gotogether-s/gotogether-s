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
    curationSurvey: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: '/members/curation',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    membersDetail: builder.mutation({
      query: ({ accessToken }) => ({
        url: '/members/detail',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    productsSearch: builder.mutation({
      query: (searchText) => ({
        url: `/products/search?keyword=${searchText}`,
        method: 'GET',
      }),
    }),
    logout: builder.mutation({
      query: ({ accessToken }) => ({
        url: '/logout',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
})

export const {
  useSignInMutation,
  useSignUpMutation,
  useValidateEmailMutation,
  useCurationSurveyMutation,
  useMembersDetailMutation,
  useProductsSearchMutation,
  useLogoutMutation,
} = requestApi
