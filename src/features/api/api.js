import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "/products" }),
    getProductById: builder.query({ query: (id) => `/products/${id}` }),
  }),
});
export const { useGetProductsQuery, useGetProductByIdQuery } = apiSlice;
// export const { useGetProductsQuery } = apiSlice;
// query: ({ offset, limit }) => `/products?offset=${offset}&limit=${limit}`,
