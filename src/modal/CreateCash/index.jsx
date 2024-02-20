import { setModal, setModalType } from '../../store/slices/modalSlice';
import { modalTypes } from '../../constants';
import cls from './createCash.module.scss';
import { useDispatch } from 'react-redux';
import { GoPlus } from 'react-icons/go';

const CreateCash = () => {
  const dispatch = useDispatch()

  const modalChanger = (type) => {
    dispatch(setModalType(type))
  }

  return (
    <div className={cls['create-product']}>
      <div className={cls['create-product-header']}>
        <button className={cls['create-product-save']}>Сохранить</button>
        <button onClick={() => dispatch(setModal())} className={cls['create-product-exit']}><GoPlus/></button>
      </div>  
      <div className={cls['create-product-wrapper']}>
        <div className={cls['create-product-body']}>
          <div className={cls['create-product-description']}>
            <h3>Создание кассы</h3>
          </div>
          <div className={cls['create-product-buttons']}>
            <button onClick={() => modalChanger(modalTypes.CREATE_CASH_TYPE)} className={cls['active_btn']}>Основные</button>
            <button onClick={() => modalChanger(modalTypes.CREATE_CASH_DESIGN_TYPE)}>Дизайн чека</button>
            <button>Перевод чека</button>
          </div>
          <div className={cls['create-product-input']}>
            <p>Наименование</p>
            <input type="text" />
          </div>
          <div className={cls['create-product-input']}>
            <p>Магазин</p>
            <input type="text" placeholder='введите' />
          </div>
          <div className={cls['create-product-input']}>
            <p>Кассиры</p>
            <input type="text" />
          </div>
          <div className={cls['create-product-input']}>
            <p>Терминалы</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCash