import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_DB_URL,
});


axiosInstance.interceptors.request.use((config) => {
  let access = localStorage.getItem('accessToken')

  if(access) {
    config.headers.Authorization = `Bearer ${access}`
  }

  return config
})