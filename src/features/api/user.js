import { apiSlice } from "./api";
const user = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/user/",
      providesTags: ["user"],
    }),
    addUser: builder.mutation({
      query: (item) => ({
        url: "/user/signup",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
export const { useAddUserMutation, useGetUserQuery } = user;
