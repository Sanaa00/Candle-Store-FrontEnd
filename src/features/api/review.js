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
        method: "review",
        body: item,
      }),
      invalidatesTags: ["review"],
    }),
    // deleteFromCart: builder.mutation({
    //   query: (id) => ({
    //     url: `/cart/${id}`,
    //     method: "DELETE",
    //     body: id,
    //   }),
    //   invalidatesTags: ["cart"],
    // }),
    // quantityChange: builder.mutation({
    //   query: (item) => ({
    //     url: `/cart/${item._id}`,
    //     method: "PATCH",
    //     body: item,
    //   }),
    //   invalidatesTags: ["cart"],
    // }),
  }),
});
export const {
  useGetReviewQuery,
  useReviewMutation,
  //   useDeleteFromCartMutation,
  //   useQuantityChangeMutation,
} = review;
////http://localhost:8000/api/cart?search=dsahdsahj bo search
