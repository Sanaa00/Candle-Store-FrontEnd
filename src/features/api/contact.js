import { apiSlice } from "./api";
const cart = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => "/contact/",
      providesTags: ["contact"],
    }),
    addContact: builder.mutation({
      query: (item) => ({
        url: "/contact/",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});
export const { useGetContactQuery, useAddContactMutation } = cart;
////http://localhost:8000/api/cart?search=dsahdsahj bo search
