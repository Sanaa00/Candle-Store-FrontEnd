import { apiSlice } from "./api";
const uploadfiles = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUpload: builder.query({
      query: () => "/products/upload",
      //   providesTags: ["review"],
    }),
    upload: builder.mutation({
      query: (files) => {
        const formData = new FormData();

        if (files.length > 1) {
          for (let file of files) {
            formData.append("photos", file);
          }
          return {
            url: "/products/upload-multi",
            method: "POST",
            headers: {
              "Content-Type": undefined,
            },
            body: formData,
          };
        } else {
          formData.append("photo", files[0]);
          return {
            url: "/products/upload",
            method: "POST",
            headers: {
              "Content-Type": undefined,
            },
            body: formData,
          };
        }
      },
    }),
    //   invalidatesTags: ["review"],
    // }),
  }),
});
export const { useUploadMutation, useGetUploadQuery } = uploadfiles;
