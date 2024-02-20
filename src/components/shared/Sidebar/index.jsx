import { useLocation, useNavigate } from 'react-router-dom'
import { appRoutesPath, userStatus } from '../../../constants'
import CustomLink from '../../elements/CustomLink'
import { BsBox, BsChevronDown } from 'react-icons/bs'
import cls from './sidebar.module.scss'
import { GoHome } from 'react-icons/go'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { CiCoinInsert , CiUser} from "react-icons/ci"
import {BiShieldAlt} from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../../../axios'
import { setUserStatus } from '../../../store/slices/userSlice'
import { useDispatch } from 'react-redux'
import { setProductPageIndex } from '../../../store/slices/productSlice'

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
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

  return (
    <div className={cls['sidebar']}>
      <div className={cls['sidebar-buttons']}>
        <button>Создать документ</button>
      </div>
      <div className={cls['sidebar-list']} onClick={() => localStorage.setItem('Index', null)}>
        <CustomLink to={appRoutesPath.MAIN}>
          <GoHome />
          Главная
        </CustomLink>
        <CustomLink click={() => dispatch(setProductPageIndex(0))}  to={appRoutesPath.PRODUCTS}>
          <BsBox />
          Товары и услуги
        </CustomLink>
        {
          user?.role?.name?.toLowerCase().includes('super admin') ?
            (
              <CustomLink to={appRoutesPath.MAGAZINE}>
                <AiOutlineAppstoreAdd />
                Магазины
              </CustomLink>
            ) : null
        }
        
        <ul className={cls[
          location.pathname === `/${appRoutesPath.SERVICES}` || 
          location.pathname === `/${appRoutesPath.CASH_STORE}` ? 'active_list' : '']}>
          <span onClick={() => navigate(`/${appRoutesPath.SERVICES}`)}>
            <CiCoinInsert  className={cls['icon']}/>
            Кассы и смены <BsChevronDown className={cls['chevron']}/>
          </span>
          <li 
            className={cls[location.pathname === `/${appRoutesPath.SERVICES}` ? 'active_link' : '']}
            onClick={() => navigate(`/${appRoutesPath.SERVICES}`)}
          >
              Смена</li>
          <li
            className={cls[location.pathname === `/${appRoutesPath.CASH_STORE}` ? 'active_link' : '']}
            onClick={() => navigate(`/${appRoutesPath.CASH_STORE}`)}
          >Касса</li>
        </ul>
        {
          user?.role?.name?.toLowerCase().includes('super admin') ? (
            <ul className={cls[
              location.pathname === `/${appRoutesPath.COMPANY_SETTINGS}` || 
              location.pathname === `/${appRoutesPath.COMPANY_STORES}` || 
              location.pathname === `/${appRoutesPath.GROUPS}` ||
              location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_PROPS}` || 
              location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_DISCOUNTS}` || 
              location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_TAXES}` || 
              location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_EMAILS}` || 
              location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_DATA}` || 
              location.pathname === `/${appRoutesPath.COMPANY_WORKERS}` ? 'active_list' : '']}>
              <span onClick={() => navigate(`/${appRoutesPath.COMPANY_SETTINGS}`)}>
                <BiShieldAlt className={cls['icon']} />
                Компания <BsChevronDown className={cls['chevron']}/></span>
              <li
                className={cls[location.pathname === `/${appRoutesPath.COMPANY_SETTINGS}`
                || location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_PROPS}` 
                || location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_DISCOUNTS}` 
                || location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_TAXES}` 
                || location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_EMAILS}` 
                || location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_DATA}` 
                  ? 'active_link' : '']}
                onClick={() => navigate(`/${appRoutesPath.COMPANY_SETTINGS}`)}
              >Настройки</li>
              <li
                className={cls[location.pathname === `/${appRoutesPath.COMPANY_WORKERS}` ? 'active_link' : '']}
                onClick={() => navigate(`/${appRoutesPath.COMPANY_WORKERS}`)}
              >Сотрудники</li>
              <li
                className={cls[location.pathname === `/${appRoutesPath.COMPANY_STORES}` ? 'active_link' : '']}
                onClick={() => navigate(`/${appRoutesPath.COMPANY_STORES}`)}
              >Магазины</li>
              <li
                className={cls[location.pathname === `/${appRoutesPath.GROUPS}` ? 'active_link' : '']}
                onClick={() => navigate(`/${appRoutesPath.GROUPS}`)}
              >Группы</li>
            </ul>
          ) : null
        }
      </div>
    </div>
  )
}

export default Sidebar