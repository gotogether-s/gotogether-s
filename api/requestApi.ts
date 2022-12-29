import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const requestApi = createApi({
  reducerPath: 'requestApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    requestSignIn: builder.mutation({
      query: ({ data }) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
    requestSignUp: builder.mutation({
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
    sendSurveyResult: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: '/members/curation',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    requestMembersDetail: builder.mutation({
      query: ({ accessToken }) => ({
        url: '/members/detail',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    changePassword: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: '/members/detail',
        method: 'PUT',
        body: data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    confirmPassword: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: '/members/confirm',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    searchProducts: builder.mutation({
      query: (keyword) => ({
        url: encodeURI(`/product-search?keyword=${keyword}&page=0`),
        method: 'GET',
      }),
    }),
    requestLogout: builder.mutation({
      query: (data) => ({
        url: '/logout',
        method: 'POST',
        body: data,
      }),
    }),
    requestReservation: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: '/reservations',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    getReservation: builder.mutation({
      query: ({ accessToken }) => ({
        url: '/reservations',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    getReservationWithDuration: builder.mutation({
      query: ({ duration, accessToken }) => ({
        url: `/reservations/period/${duration}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    deleteReservation: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: '/reservations',
        method: 'DELETE',
        body: data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    requestLikedItems: builder.mutation({
      query: ({ accessToken }) => ({
        url: '/wishes',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    deleteLikedItems: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: '/wishes',
        method: 'DELETE',
        body: data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    customRecommendUser: builder.mutation({
      query: ({ accessToken }) => ({
        url: encodeURI('/product-list/custom?page=0&sort='),
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    customRecommend: builder.mutation({
      query: () => ({
        url: encodeURI('/product-list/custom?page=0&sort='),
        method: 'GET',
      }),
    }),
    ageRecommend: builder.mutation({
      query: ({ ageValue }) => ({
        url: encodeURI(`/product-list/ages?category=${ageValue}&page=0&sort=`),
        method: 'GET',
      }),
    }),
    companionRecommend: builder.mutation({
      query: ({ companionValue }) => ({
        url: encodeURI(
          `/product-list/companion?category=${companionValue}&page=0&sort=`,
        ),
        method: 'GET',
      }),
    }),
    golfRecommend: builder.mutation({
      query: () => ({
        url: encodeURI('/product-list/themes?category=골프여행&page=0&sort='),
        method: 'GET',
      }),
    }),
    cultureRecommend: builder.mutation({
      query: () => ({
        url: encodeURI('/product-list/themes?category=문화탐방&page=0&sort='),
        method: 'GET',
      }),
    }),
    healingRecommend: builder.mutation({
      query: () => ({
        url: encodeURI(
          '/product-list/themes?category=리조트 휴양 및 힐링&page=0&sort=',
        ),
        method: 'GET',
      }),
    }),
    addFavorite: builder.mutation({
      query: ({ data, accessToken }) => ({
        url: '/wishes',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
})

export const {
  useRequestSignInMutation,
  useRequestSignUpMutation,
  useValidateEmailMutation,
  useSendSurveyResultMutation,
  useRequestMembersDetailMutation,
  useChangePasswordMutation,
  useConfirmPasswordMutation,
  useSearchProductsMutation,
  useRequestLogoutMutation,
  useRequestReservationMutation,
  useGetReservationMutation,
  useGetReservationWithDurationMutation,
  useDeleteReservationMutation,
  useRequestLikedItemsMutation,
  useDeleteLikedItemsMutation,
  useCustomRecommendUserMutation,
  useCustomRecommendMutation,
  useAgeRecommendMutation,
  useCompanionRecommendMutation,
  useGolfRecommendMutation,
  useCultureRecommendMutation,
  useHealingRecommendMutation,
  useAddFavoriteMutation,
} = requestApi
