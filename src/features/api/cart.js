import { apiSlice } from "./api";
const cart = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "/cart/",
      providesTags: ["cart"],
    }),
    addToCart: builder.mutation({
      query: (item) => ({
        url: "/cart/",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["cart"],
    }),
    deleteFromCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["cart"],
    }),
    quantityChange: builder.mutation({
      query: (item) => ({
        url: `/cart/${item._id}`,
        method: "PATCH",
        body: item,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});
export const {
  useGetCartQuery,
  useAddToCartMutation,
  useDeleteFromCartMutation,
  useQuantityChangeMutation,
} = cart;
////http://localhost:8000/api/cart?search=dsahdsahj bo search
