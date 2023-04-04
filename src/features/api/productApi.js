import { apiSlice } from "./api";
const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "/products/" }),
    getProductById: builder.query({ query: (id) => `/products/${id}` }),
  }),
});
export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
