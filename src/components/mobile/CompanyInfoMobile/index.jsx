import { FaChevronDown } from 'react-icons/fa'
import cls from './companyInfo.module.scss'

const CompanyInfoMobile = () => {
  return (
    <div className={cls['info']}>
      <div className={cls['info-child']}>
        <div className={cls['info-description']}>
          <span>Моя компания</span>
          <FaChevronDown/>
        </div>
      </div>
      <div className={cls['info-child']}>
        <div className={cls['info-description']}>
          <span>Страна/Регион: Kyrgyzstan</span>
          <FaChevronDown/>
        </div>
      </div>
      <div className={cls['info-child']}>
        <div className={cls['info-description']}>
          <span>Валюта: сом</span>
          <FaChevronDown/>
        </div>
      </div>
      <div className={cls['info-child']}>
        <div className={cls['info-description']}>
          <span>+996553879656</span>
          <FaChevronDown/>
        </div>
      </div>
      <div className={cls['info-child']}>
        <div className={cls['info-description']}>
          <span>Электронный адрес</span>
          <FaChevronDown/>
        </div>
      </div>
      <div className={cls['info-child']}>
        <div className={cls['info-description']}>
          <span>Сайт</span>
          <FaChevronDown/>
        </div>
      </div>
      <div className={cls['info-child']}>
        <div className={cls['info-description']}>
          <span>Описание</span>
          <FaChevronDown/>
        </div>
      </div>
    </div>
  )
}

export default CompanyInfoMobile