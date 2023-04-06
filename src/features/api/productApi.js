import { apiSlice } from "./api";
const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products/",
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["product"],
    }),
    productQuantityChange: builder.mutation({
      query: (item) => ({
        url: `/products/${item.id}`,
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
} = productApi;
