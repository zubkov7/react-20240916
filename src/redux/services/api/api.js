import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getHeadphones: builder.query({ query: () => "/products" }),
    getHeadphoneById: builder.query({ query: (id) => `/product/${id}` }),
    getReviewsByHeadphoneId: builder.query({
      query: (id) => `/reviews?productId=${id}`,
      providesTags: (id) => [{ type: "Reviews", id }],
    }),
    addReview: builder.mutation({
      query: ({ headphoneId, review }) => ({
        method: "POST",
        body: review,
        url: `/review/${headphoneId}`,
      }),
      invalidatesTags: ({ headphoneId }) => [
        { type: "Reviews", id: headphoneId },
      ],
    }),
  }),
});

export const {
  useGetHeadphonesQuery,
  useAddReviewMutation,
  useGetHeadphoneByIdQuery,
  useGetReviewsByHeadphoneIdQuery,
} = apiSlice;
