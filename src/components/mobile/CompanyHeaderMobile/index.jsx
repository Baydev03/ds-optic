import { useLocation, useNavigate } from 'react-router-dom'
import { appRoutesPath } from '../../../constants'
import cls from './companyHead.module.scss'

const CompanyHeaderMobile = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className={cls['head']}>
      <button 
        onClick={() => navigate('/' + appRoutesPath.COMPANY_SETTINGS)}
        className={cls[location.pathname.slice(1) === appRoutesPath.COMPANY_SETTINGS ? 'active' : '']}>Основные</button>
      <button 
        onClick={() => navigate('/'+ appRoutesPath.COMPANY_SETTINGS_PROPS)}
        className={cls[location.pathname.slice(1) === appRoutesPath.COMPANY_SETTINGS_PROPS ? 'active' : '']}>Реквизиты</button>
    </div>
  )
}

export default CompanyHeaderMobile