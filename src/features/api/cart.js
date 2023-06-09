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
    getOrder: builder.query({
      query: () => `/cart/order`,
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
      query: ({ productId, cartId }) => ({
        url: `/cart/`,
        method: "DELETE",
        body: { productId, cartId },
      }),
      invalidatesTags: ["cart"],
    }),
    quantityChange: builder.mutation({
      query: ({ cartId, productId, quantity }) => ({
        url: `/cart/${cartId}/products/${productId}/`,
        method: "PUT",
        body: { quantity },
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
  useGetOrderQuery,
} = cart;
