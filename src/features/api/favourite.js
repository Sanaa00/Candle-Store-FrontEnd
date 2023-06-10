import { apiSlice } from "./api";
const favourite = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getfavourite: builder.query({
      query: () => `favourite`,
      providesTags: ["favourite"],
    }),
    getfavouritebyUserId: builder.query({
      query: (userId) => `favourite/${userId}`,
      providesTags: ["favourite"],
    }),

    deleteFavourite: builder.mutation({
      query: ({ productId, favId }) => ({
        url: `/favourite/`,
        method: "DELETE",
        body: { productId, favId },
      }),
      invalidatesTags: ["favourite"],
    }),
    addfavourite: builder.mutation({
      query: (item) => ({
        url: "/favourite/",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["favourite"],
    }),
  }),
});
export const {
  useGetfavouriteQuery,
  useAddfavouriteMutation,
  useDeleteFavouriteMutation,
  useGetfavouritebyUserIdQuery,
} = favourite;
