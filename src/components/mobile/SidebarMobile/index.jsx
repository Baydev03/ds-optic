import { HiOutlineBanknotes, HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { setSidebar } from '../../../store/slices/sidebarSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { appRoutesPath } from '../../../constants'
import comment from '../../../assets/comment.svg'
import user from '../../../assets/user.svg'
import { BsBoxes } from 'react-icons/bs'
import { BiHome } from 'react-icons/bi'
import cls from './side.module.scss'

const SidebarMobile = () => {
  const { isSidebar } = useSelector(state => state.sidebar)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const closeHandler = (e) => {
    e.stopPropagation()

    dispatch(setSidebar(false))
  }

  const hide = e => {
    e.stopPropagation()
  }

  const navigateHandler = path => {
    dispatch(setSidebar(false))
    navigate(path)
  }

  return (
    <div id={cls[isSidebar ? 'active_bar' : '']} onClick={closeHandler} className={cls['side']}>
      <div onClick={hide} className={cls['side-wrapper']}>
        <div className={cls['side-upper']}>
          <img className={cls['side-comment']} src={comment} alt="comment" />
          <div>
            <img src={user} alt="user" />
            <h5>Almaz Eshimbekov</h5>
            <p>meanwhilealmaz@gmail.com</p>
          </div>
        </div>
        <div className={cls['side-lower']}>
          <button className={cls['side-create-btn']}>Создать документ</button>
          <div>
            <label 
              onClick={() => navigateHandler(appRoutesPath.MAIN)}
              className={cls[location.pathname === appRoutesPath.MAIN ? 'active_link' : '']}>
              <BiHome/> Главная
            </label>
            <label
              onClick={() => navigateHandler(appRoutesPath.PRODUCTS)}
              className={cls[location.pathname === `/${appRoutesPath.PRODUCTS}` ? 'active_link' : '']}>
              <BsBoxes/> Товары и услуги 
            </label>
            <label
              onClick={() => navigateHandler(appRoutesPath.CASH_STORE)}
              className={cls[location.pathname === `/${appRoutesPath.CASH_STORE}` 
              || location.pathname === `/${appRoutesPath.SERVICES}`
                ? 'active_link' : '']}
            >
              <HiOutlineBanknotes/> Кассы и смены
            </label>
            <label 
              onClick={() => navigateHandler(appRoutesPath.COMPANY_SETTINGS)}
              className={cls[location.pathname === `/${appRoutesPath.COMPANY_SETTINGS}` || 
              location.pathname === `/${appRoutesPath.COMPANY_STORES}` || 
              location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_PROPS}` || 
              location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_DISCOUNTS}` || 
              location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_TAXES}` || 
              location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_EMAILS}` || 
              location.pathname === `/${appRoutesPath.COMPANY_SETTINGS_DATA}` || 
              location.pathname === `/${appRoutesPath.COMPANY_WORKERS}` ? 'active_link' : '']}>
              <HiOutlineBuildingOffice2/> Компания
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarMobile