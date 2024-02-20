import { FaChevronDown } from 'react-icons/fa'
import cls from './companyProps.module.scss'

const CompanyPropsMobile = () => {
  return (
    <div className={cls['props']}>
      <button className={cls['props-search-btn']}>Поиск организации</button>

      <div className={cls['props-child']}>
        <div className={cls['props-description']}>
          <span>Моя компания</span>
          <FaChevronDown/>
        </div>
      </div>
      <div className={cls['props-child']}>
        <div className={cls['props-description']}>
          <span>Адрес</span>
          <FaChevronDown/>
        </div>
      </div>
      <div className={cls['props-child']}>
        <div className={cls['props-description']}>
          <span>Реквизиты организации</span>
          <FaChevronDown/>
        </div>
      </div>
      <div className={cls['props-child']}>
        <div className={cls['props-description']}>
          <span>Ответственные лица</span>
          <FaChevronDown/>
        </div>
      </div>
    </div>
  )
}

export default CompanyPropsMobile