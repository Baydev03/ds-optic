import { setAuth, setUserStatus } from './store/slices/userSlice';
import PrivateRoutes from './components/PrivateRoutes';
import Loader from './components/elements/Loader';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userStatus } from './constants';
import { axiosInstance } from './axios';


const App = () => { 
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  const getUserInfo = async (access) => {
    const response = await axiosInstance.get('accounts/users/get_userinfo' , {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })
    
    const roleResponse = await axiosInstance.get(`accounts/roles/${response?.data?.role?.id}/` , {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })

    dispatch(setUserStatus(
      roleResponse?.data?.name === 'super admin' ? userStatus.OWNER : 
        roleResponse?.data?.name === 'admin' ? userStatus.ADMIN : 
          roleResponse?.data?.name === 'casher' ? userStatus.CASHIER : 
            roleResponse?.data?.name === 'storekeeper' ? userStatus.STORE_KEEPER : '',
    ))
  }

  useEffect(() => {
    const authRefresh = async () => {
      if (localStorage.getItem('refreshToken')) {
        setLoad(true);
        try {
          const response = await axiosInstance.post('accounts/token/refresh/', {
            refresh: localStorage.getItem('refreshToken'),
          });
          const { access } = response.data;
          localStorage.setItem('accessToken', access);

          try {
            await axiosInstance.post('accounts/token/verify/', {
              token: access,
            });
            await getUserInfo(access)

            dispatch(setAuth(true));
            setLoad(false);
          } catch (error) {
            dispatch(setAuth(false));
            setLoad(false);
          }
        } catch (error) {
          dispatch(setAuth(false));
          setLoad(false);
        }
      }
    };

    authRefresh();
  }, [dispatch]);
  
  return load ? <Loader/> : <PrivateRoutes/>
}

export default App;
