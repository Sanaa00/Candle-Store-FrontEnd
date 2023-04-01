import { apiSlice } from "./api";
const cart = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products/",
      providesTags: ["cart"],
      merge: "GET",
    }),
    addTodo: builder.mutation({
      query: (cart) => ({
        url: "/cart/",
        method: "GET",
        body: cart,
      }),
      invalidatesTags: ["cart"],
    }),
    addToCart: builder.mutation({
      query: (todo) => ({
        url: `/cart/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["cart"],
    }),
    deletFromCart: builder.mutation({
      query: ({ id }) => ({
        url: `/cart/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useAddToCartMutation,
  useDeletFromCartMutation,
} = cart;
