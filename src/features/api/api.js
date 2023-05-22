import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    tagTypes: [
      "userData",
      "product",
      "user",
      "cart",
      "review",
      "category",
      "address",
      "contact",
    ],
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");

      if (token !== null || token !== "undefined") {
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      }
      return headers;
    },
  }),

  endpoints: () => ({}),
});
