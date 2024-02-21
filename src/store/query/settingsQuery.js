import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { storeQueryTags } from '../../constants';

export const settingsQuery = createApi({
  reducerPath: 'settingsQuery',
  tagTypes: [storeQueryTags.SETTINGS_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DB_URL,
  }),
  endpoints: (builder) => ({
    getTaxes: builder.query({
      query: ({ token }) => ({
        url: 'settings/taxes/?limit=10000',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [storeQueryTags.SETTINGS_TAG],
    }),
    getCountries: builder.query({
      query: ({ token }) => ({
        url: 'settings/countries/?limit=10000',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [storeQueryTags.SETTINGS_TAG],
    }),
    createSettingsCountry: builder.mutation({
      query: ({ data, token }) => ({
        url: 'settings/countries/',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.SETTINGS_TAG],
    }),
    createSettingsTaxes: builder.mutation({
      query: ({ data, token }) => ({
        url: 'settings/taxes/',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: [storeQueryTags.SETTINGS_TAG],
    }),
  }),
});

export const { 
  useCreateSettingsCountryMutation,
  useCreateSettingsTaxesMutation,
  useGetCountriesQuery,
  useGetTaxesQuery,
} =  settingsQuery;