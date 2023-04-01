import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: () => ({}),
});

// export const { useGetProductsQuery } = apiSlice;
// query: ({ offset, limit }) => `/products?offset=${offset}&limit=${limit}`,
