import { useLocation, useNavigate } from 'react-router-dom'
import { appRoutesPath } from '../../../constants'
import cls from './cash.module.scss'

const CashHeadMobile = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className={cls['cash']}>
      <button 
        onClick={() => navigate('/' + appRoutesPath.CASH_STORE)}
        className={cls[location.pathname.slice(1) === appRoutesPath.CASH_STORE ? 'active' : '']}>Кассы</button>
      <button 
        onClick={() => navigate('/'+ appRoutesPath.SERVICES)}
        className={cls[location.pathname.slice(1) === appRoutesPath.SERVICES ? 'active' : '']}>Смены</button>
    </div>
  )
}

export default CashHeadMobile