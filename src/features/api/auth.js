import { apiSlice } from "./api";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body: body,
      }),
    }),
    getCurrentUser: builder.query({
      query: (token) => ({
        url: "/user/currentuser",
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ["userData"],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["userData"],
    }),
  }),
});

export const { useSignupMutation, useGetCurrentUserQuery, useLoginMutation } =
  authApi;
