import { apiSlice } from "./api";
const review = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: () => "/review/",
      providesTags: ["review"],
    }),
    review: builder.mutation({
      query: (item) => ({
        url: "/review/",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["review"],
    }),
  }),
});
export const { useGetReviewQuery, useReviewMutation } = review;
