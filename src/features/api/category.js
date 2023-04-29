import { apiSlice } from "./api";
const category = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "/category/",
      providesTags: ["category"],
    }),
    addToCategory: builder.mutation({
      query: (item) => ({
        url: "/category/",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["category"],
    }),
  }),
});
export const { useGetCategoryQuery, useAddToCategoryMutation } = category;
////http://localhost:8000/api/cart?search=dsahdsahj bo search
