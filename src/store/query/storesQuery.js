import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { storeQueryTags } from '../../constants';

export const storesQuery = createApi({
  reducerPath: 'storesQuery',
  tagTypes: [storeQueryTags.STORE_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DB_URL,
  }),
  endpoints: (builder) => ({
    getStores: builder.query({
      query: ({ token }) => ({
        url: 'branches/branches/?limit=10000',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [storeQueryTags.STORE_TAG],
    }),
    getOneStore: builder.query({
      query: ({ id, token }) => ({
        url: 'branches/branches/' + id,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [storeQueryTags.STORE_TAG],
    }),
    createStore: builder.mutation({
      query: ({ data, token }) => ({
        url: 'branches/branches/',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.STORE_TAG],
    }),
    changeStore: builder.mutation({
      query: ({ id ,data, token }) => ({
        url: `branches/branches/${id}/`,
        method: 'PUT',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.STORE_TAG],
    }),
    deleteStore: builder.mutation({
      query: ({ id, token }) => ({
        url: 'branches/branches/' + id,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.STORE_TAG],
    }),
    connectUserToStore: builder.mutation({
      query: ({ data, token }) => ({
        url: 'branches/branches/add_user_to_branches/',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.STORE_TAG, storeQueryTags.USERS_TAG],
    }),
  }),
});

export const { 
  useGetStoresQuery, 
  useCreateStoreMutation, 
  useConnectUserToStoreMutation,
  useGetOneStoreQuery,
  useDeleteStoreMutation,
  useChangeStoreMutation,
} =  storesQuery;