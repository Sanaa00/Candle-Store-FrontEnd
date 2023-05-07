import { apiSlice } from "./api";
const address = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAddress: builder.query({
      query: () => "/address/",
      providesTags: ["address"],
    }),
    getAddresstByUserId: builder.query({
      query: (userId) => `/address/${userId}`,
      providesTags: ["address"],
    }),
    addToAddress: builder.mutation({
      query: (item) => ({
        url: "/address/",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["address"],
    }),
    deleteFromAddress: builder.mutation({
      query: ({ _id, userId }) => ({
        url: `/address/`,
        method: "DELETE",
        body: { _id, userId },
      }),
      invalidatesTags: ["address"],
    }),
    quantityAddress: builder.mutation({
      query: ({ cartId, productId, quantity }) => ({
        url: `/address/${cartId}`,
        method: "PUT",
        body: { productId, quantity },
      }),
      invalidatesTags: ["address"],
    }),
  }),
});
export const { useGetAddressQuery, useAddToAddressMutation } = address;
