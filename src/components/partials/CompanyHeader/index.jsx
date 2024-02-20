import { useLocation, useNavigate } from 'react-router-dom'
import { appRoutesPath } from '../../../constants'
import cls from './companyHeader.module.scss'

const data = [
  {
    id: 1,
    title: 'Основные',
    path: appRoutesPath.COMPANY_SETTINGS,
  },
  {
    id: 2,
    title: 'Реквизиты',
    path: appRoutesPath.COMPANY_SETTINGS_PROPS,
  },
  {
    id: 3,
    title: 'Скидки',
    path: appRoutesPath.COMPANY_SETTINGS_DISCOUNTS,
  },
  {
    id: 4,
    title: 'Налоги',
    path: appRoutesPath.COMPANY_SETTINGS_TAXES,
  },
  {
    id: 5,
    title: 'Email отчет',
    path: appRoutesPath.COMPANY_SETTINGS_EMAILS,
  },
  {
    id: 6,
    title: 'Данные',
    path: appRoutesPath.COMPANY_SETTINGS_DATA,
  },
  {
    id: 7,
    title: 'Страны',
    path: appRoutesPath.COUNTRIES,
  },
]

const CompanyHeader = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className={cls['header']}>
      <div className={cls['header-desc']}>
        <div>
          <h3>Моя компания</h3>
          <p>Создан 14 января 2023</p>
        </div>
        <div>
          <h3>Компания</h3>
          <p>ID 63c2b3c3c743db25af414a35</p>
        </div>
      </div>
      <div className={cls['header-body']}>
        {data.map(item => (
          <button 
            onClick={() => navigate(`/${item.path}`)}
            className={cls[item.path === location.pathname.slice(1) ? 'active' : '']} 
            key={item.id}
          >{item.title}</button>
        ))}
      </div>
    </div>
  )
}

export default CompanyHeader