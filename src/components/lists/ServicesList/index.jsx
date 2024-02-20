import cls from './servicesList.module.scss'
import { BsUnlock } from 'react-icons/bs'

const ServicesList = () => {
  return (
    <div className={cls['list']}>
      <div className={cls['list-begin']}>
        <div>
          <span>Статус</span>
        </div>
        <div>
          <BsUnlock/>
        </div>
      </div>
      <div className={cls['list-child']}>
        <div>
          <span>Номер</span>
        </div>
        <div>
          <h5>Смена#1</h5>
        </div>
      </div>
      <div className={cls['list-child']}>
        <div>
          <span>Открыта</span>
        </div>
        <div>
          <p>14 января 19:57</p>
        </div>
      </div>
      <div className={cls['list-child']}>
        <div>
          <span>Закрыта</span>
        </div>
        <div>
          <p>-</p>
        </div>
      </div>
      <div className={cls['list-child']}>
        <div>
          <span>Кассир</span>
        </div>
        <div>
          <h5>Asad Halmatov</h5>
        </div>
      </div>
      <div className={cls['list-child']}>
        <div>
          <span>Касса</span>
        </div>
        <div>
          <h5>№1</h5>
        </div>
      </div>
      <div className={cls['list-child']}>
        <div>
          <span>Магазин</span>
        </div>
        <div>
          <h5>Домашний</h5>
        </div>
      </div>
      <div className={cls['list-child']}>
        <div>
          <span>Выручка,сом</span>
        </div>
        <div>
          <p>200.00</p>
        </div>
      </div>
      <div className={cls['list-child']}>
        <div>
          <span>Продажи</span>
        </div>
        <div>
          <p>1</p>
        </div>
      </div>
      <div className={cls['list-child']}>
        <div>
          <span>Сумма продаж</span>
        </div>
        <div>
          <p>200.00</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesList