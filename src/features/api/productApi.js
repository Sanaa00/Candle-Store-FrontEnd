import { apiSlice } from "./api";
const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products/",
      providesTags: ["product"],
    }),
    getProductsBySearch: builder.query({
      query: (search) => `products?search=${search}`,
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
  }),
});
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useProductQuantityChangeMutation,
  useGetProductsByCategoryQuery,
  useGetProductsBySearchQuery,
} = productApi;
