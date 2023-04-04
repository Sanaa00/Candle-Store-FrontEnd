import { apiSlice } from "./api";
const favourite = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFavourite: builder.query({
      query: () => "/favourite/",
      providesTags: ["favourite"],
    }),
    addToFav: builder.mutation({
      query: (item) => ({
        url: "/cart/",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["favourite"],
    }),
    deleteFromFav: builder.mutation({
      query: ({ id }) => ({
        url: `/cart/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["favourite"],
    }),
    toggleFav: builder.mutation({
      query: (item) => ({
        url: `/cart/${item.id}`,
        method: "PATCH",
        body: item,
      }),
      invalidatesTags: ["favourite"],
    }),
  }),
});
export const {
  useAddToFavMutation,
  useDeleteFromFavMutation,
  useGetFavouriteQuery,
  useToggleFavMutation,
} = favourite;
