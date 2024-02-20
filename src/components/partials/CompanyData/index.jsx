import cls from './companyData.module.scss';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';

const CompanyData = () => {
  const [checks, setChecks] = useState({
    products: false,
    productProgress: false,
    priceProgress: false,
    deliveries: false,
    clients: false,
    stores: false,
    cashes: false,
  })

  return (
    <div className={cls['data']}>
      <h3 className={cls['data-head']}>Удаление данных</h3>
      <div className={cls['data-list']}>
        <div
          className={cls[checks.products ? 'active_checkbox' : '']} 
          onClick={() => setChecks((prev) => ({...prev, products: !checks.products}))}>
          <span>{checks.products && <FaCheck/>}</span>
          <p>Товары и услуги</p>
        </div>
        <div
          className={cls[checks.productProgress ? 'active_checkbox' : '']} 
          onClick={() => setChecks((prev) => ({...prev, productProgress: !checks.productProgress}))}>
          <span>{checks.productProgress && <FaCheck/>}</span>
          <p>Движение товара</p>
        </div>
        <div
          className={cls[checks.priceProgress ? 'active_checkbox' : '']} 
          onClick={() => setChecks((prev) => ({...prev, priceProgress: !checks.priceProgress}))}>
          <span>{checks.priceProgress && <FaCheck/>}</span>
          <p>Движение денег</p>
        </div>
        <div
          className={cls[checks.deliveries ? 'active_checkbox' : '']} 
          onClick={() => setChecks((prev) => ({...prev, deliveries: !checks.deliveries}))}>
          <span>{checks.deliveries && <FaCheck/>}</span>
          <p>Поставщики</p>
        </div>
        <div
          className={cls[checks.clients ? 'active_checkbox' : '']} 
          onClick={() => setChecks((prev) => ({...prev, clients: !checks.clients}))}>
          <span>{checks.clients && <FaCheck/>}</span>
          <p>Клиенты</p>
        </div>
        <div
          className={cls[checks.s ? 'active_checkbox' : '']} 
          onClick={() => setChecks((prev) => ({...prev, stores: !checks.stores}))}>
          <span>{checks.stores && <FaCheck/>}</span>
          <p>Магазины и счета</p>
        </div>
        <div
          className={cls[checks.cashes ? 'active_checkbox' : '']} 
          onClick={() => setChecks((prev) => ({...prev, cashes: !checks.cashes}))}>
          <span>{checks.cashes && <FaCheck/>}</span>
          <p>Кассы и смены</p>
        </div>
      </div>
      <div className={cls['data-warn']}>
        <p>Данные будут удалены безвозвратно</p>
      </div>
      <button id={cls[Object.values(checks).includes(true) ? 'valid' : '']} className={cls['data-deleter']}>Удалить</button>
    </div>
  )
}

export default CompanyData