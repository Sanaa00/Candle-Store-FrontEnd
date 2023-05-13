// import { apiSlice } from "./api";
// const favourite = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getFavourite: builder.query({
//       query: () => "/favourite/",
//       providesTags: ["favourite"],
//     }),
//     addToFav: builder.mutation({
//       query: (item) => ({
//         url: "/favourite/",
//         method: "POST",
//         body: item,
//       }),
//       invalidatesTags: ["favourite"],
//     }),
//     deleteFromFav: builder.mutation({
//       query: ({ id }) => ({
//         url: `/favourite/${id}`,
//         method: "DELETE",
//         body: id,
//       }),
//       invalidatesTags: ["favourite"],
//     }),
//     toggleFav: builder.mutation({
//       query: (item) => ({
//         url: `/favourite/${item.id}`,
//         method: "PATCH",
//         body: item,
//       }),
//       invalidatesTags: ["favourite"],
//     }),
//   }),
// });
// export const {
//   useAddToFavMutation,
//   useDeleteFromFavMutation,
//   useGetFavouriteQuery,
//   useToggleFavMutation,
// } = favourite;
