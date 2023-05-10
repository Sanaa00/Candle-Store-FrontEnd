import { apiSlice } from "./api";
const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search, category, page }) =>
        `products?search=${search}&categoryId=${category}&page=${page}`,
      providesTags: ["product"],
    }),
    getProductsBySearch: builder.query({
      query: ({ search, category }) =>
        `products?search=${search}&categoryId=${category}`,
      providesTags: ["product"],
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/products?price=${category}`,
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["product"],
    }),
    productQuantityChange: builder.mutation({
      query: (item) => ({
        url: `/products/${item._id}`,
        method: "PATCH",
        body: item,
      }),
      invalidatesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (item) => ({
        url: "/products/",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useProductQuantityChangeMutation,
  useGetProductsByCategoryQuery,
  useGetProductsBySearchQuery,
  useAddProductMutation,
} = productApi;
