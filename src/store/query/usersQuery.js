import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { storeQueryTags } from '../../constants';

export const usersQuery = createApi({
  reducerPath: 'usersQuery',
  tagTypes: [storeQueryTags.USERS_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DB_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ token }) => ({
        url: 'accounts/users/?limit=10000',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [storeQueryTags.USERS_TAG],
    }),
    getSingleUsers: builder.query({
      query: ({ id, token }) => ({
        url: `accounts/users/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [storeQueryTags.USERS_TAG],
    }),
    createRole: builder.mutation({
      query: ({ data, token }) => ({
        url: 'accounts/roles/',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.USERS_TAG],
    }),
    createUser: builder.mutation({
      query: ({ data, token }) => ({
        url: 'accounts/users/',
        method: 'POST',
        body: data,
        headers: {
        
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.USERS_TAG],
    }),
    editUser: builder.mutation({
      query: ({ id, data, token }) => ({
        url: `accounts/users/${id}/`,
        method: 'PATCH',
        body: data,
        headers: {
        
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.USERS_TAG],
    }),
    deletUser: builder.mutation({
      query: ({ id, token }) => ({
        url: 'accounts/users/' + id,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.USERS_TAG],
    }),
  }),
});

export const { 
  useCreateRoleMutation, 
  useEditUserMutation,
  useCreateUserMutation,
  useGetSingleUsersQuery,
  useDeletUserMutation,
  useGetUsersQuery, 
} =  usersQuery;