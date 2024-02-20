import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { storeQueryTags } from '../../constants';

export const productQuery = createApi({
  reducerPath: 'productQuery',
  tagTypes: [storeQueryTags.PRODUCT_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DB_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ token }) => ({
        url: 'products/products',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [storeQueryTags.PRODUCT_TAG],
    }),
    getProductsByHeaders: builder.query({
      query: ({ id, token }) => ({
        url: `products/products/?category__group__branch__id=${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [storeQueryTags.PRODUCT_TAG],
    }),
    getOneProduct: builder.query({
      query: ({ id, token }) => ({
        url: `products/products/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [storeQueryTags.PRODUCT_TAG],
    }),
    createProductsBulk: builder.mutation({
      query: ({ data, token }) => ({
        url: 'products/products/bulk_create/',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.PRODUCT_TAG],
    }),
    createProduct: builder.mutation({
      query: ({ data, token }) => ({
        url: 'products/products/',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.PRODUCT_TAG],
    }),
    // Product Groups
    getProductGroups: builder.query({
      query: ({ token }) => ({
        url: 'products/groups',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [storeQueryTags.PRODUCT_TAG],
    }),
    createProductGroups: builder.mutation({
      query: ({ data, token }) => ({
        url: 'products/groups/',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.PRODUCT_TAG],
    }),
    deleteProductGroups: builder.mutation({
      query: ({ id, token }) => ({
        url: 'products/groups/' + id,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.PRODUCT_TAG],
    }),
    // Products Category
    getProductCategories: builder.query({
      query: ({ token }) => ({
        url: 'products/categories',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [storeQueryTags.PRODUCT_TAG],
    }),
    createProductCategory: builder.mutation({
      query: ({ data, token }) => ({
        url: 'products/categories/',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.PRODUCT_TAG],
    }),
  }),
});

export const {
  useGetProductsQuery, 
  useGetProductsByHeadersQuery,
  useGetOneProductQuery,
  useCreateProductsBulkMutation, 
  useCreateProductMutation, 
  useCreateProductGroupsMutation,
  useGetProductGroupsQuery,
  useDeleteProductGroupsMutation,
  useCreateProductCategoryMutation,
  useGetProductCategoriesQuery,
} =  productQuery;