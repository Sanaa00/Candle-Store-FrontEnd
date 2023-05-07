import { apiSlice } from "./api";
const cart = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "/cart/",
      providesTags: ["cart"],
    }),
    getCartByUserId: builder.query({
      query: (userId) => `/cart/${userId}`,
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
      query: ({ _id, userId }) => ({
        url: `/cart`,
        method: "DELETE",
        body: { _id, userId },
      }),
      invalidatesTags: ["cart"],
    }),
    quantityChange: builder.mutation({
      query: ({ cartId, productId, quantity }) => ({
        url: `/cart/${cartId}`,
        method: "PUT",
        body: { productId, quantity },
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
  useGetCartByUserIdQuery,
} = cart;
