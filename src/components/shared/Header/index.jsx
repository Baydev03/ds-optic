import { routeTitleHandler } from '../../../utils/routesTitleHandler';
import { useLocation, useNavigate } from 'react-router-dom';
import { appRoutesPath, userStatus } from '../../../constants';
import logo from '../../../assets/logo.svg'
import cls from './header.module.scss';
import { axiosInstance } from '../../../axios';
import { setUserStatus } from '../../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';

const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const access = localStorage.getItem('accessToken')
  const [user, setUser] = useState({})

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

    return response
  }

  useEffect(() => {
    getUserInfo(access)
    .then(res => setUser(res.data))
  }, [access])

  function setRole(item) {
    if(item?.role?.name === 'super admin') {
      return 'Владелец'
    } else if (item?.role?.name === 'admin') {
      return 'Администратор'
    } else if (item?.role?.name === 'storekeeper') {
      return 'Кладовщик'
    } else if (item?.role?.name === 'casher'){
      return 'Кассир'
    }
  }
  
  return (
    <div className={cls['header']}>
      <div className={cls['header-left']}>
        <div className={cls['header-left__logo']}>
          <img onClick={() => navigate(appRoutesPath.MAIN)} src={logo} alt="app-logo" />
        </div>
        <div className={cls['header-left__title']}>
          <h5>{routeTitleHandler(location.pathname === '/' ? location.pathname : location.pathname.slice(1))}</h5>
        </div>
      </div>
      <div className={cls['header-right']}>
        <div className={cls['header-right__user']} onClick={() => {
          localStorage.clear()
          window.location.reload()
        }}>
          {user?.user_avatar ? <img src={user?.user_avatar} alt="" /> : <BiUserCircle />}
          <div>
            <h5>{user?.fullname}</h5>
            <p>{setRole(user)}</p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Header;