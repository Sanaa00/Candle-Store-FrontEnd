import { apiSlice } from "./api";
const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search, category, page }) =>
        `products?search=${search}&categoryId=${category}&page=${page}`,
      providesTags: ["product"],
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products?categoryId=${category}`,
      providesTags: ["product"],
    }),
    getProductsForAdmin: builder.query({
      query: () => `products/productsForAdmin`,
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["product"],
    }),
    favourite: builder.mutation({
      query: (item) => ({
        url: `/products/${item._id}`,
        method: "PUT",
        body: item,
      }),
      invalidatesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (item) => ({
        url: "/products/",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["product"],
    }),

    discountToProduct: builder.mutation({
      query: (item) => ({
        url: `/products/${item.id}/descount`,
        method: "PUT",
        body: item.discount,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useFavouriteMutation,
  useGetProductsByCategoryQuery,
  useAddProductMutation,
  useGetProductsForAdminQuery,
  useDeleteProductMutation,
  useDiscountToProductMutation,
} = productApi;
