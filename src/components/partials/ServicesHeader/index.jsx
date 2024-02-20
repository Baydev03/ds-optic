import cls from './servicesHeader.module.scss';
import { IoMdClose } from 'react-icons/io'

const ServicesHeader = () => {
  return (
    <div className={cls['services']}>
      <div className={cls['services-list']}>
        <div className={cls['services-list__childOne']}>
          <p>Дата открытия</p>
          <span>21 сен, 2022 - 21 янв</span>
        </div>
        <div className={cls['services-list__child']}>
          <p>Кассир</p>
          <label>
            <input placeholder='Введите' type="text" />
            <button><IoMdClose/></button>
          </label>
        </div>
        <div className={cls['services-list__child']}>
          <p>Магазин</p>
          <label>
            <input placeholder='Введите' type="text" />
            <button><IoMdClose/></button>
          </label>
        </div>
        <div className={cls['services-list__child']}>
          <p>Касса</p>
          <label>
            <input placeholder='Введите' type="text" />
            <button><IoMdClose/></button>
          </label>
        </div>
      </div>
    </div>
  )
}

export default ServicesHeader