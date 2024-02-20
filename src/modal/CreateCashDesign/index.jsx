import { setModal, setModalType } from '../../store/slices/modalSlice';
import cls from './createCashDesign.module.scss';
import { FaRegFileImage } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import { modalTypes } from '../../constants';
import { useDispatch } from 'react-redux';
import { GoPlus } from 'react-icons/go';

const CreateCashDesign = () => {
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
            <button onClick={() => modalChanger(modalTypes.CREATE_CASH_TYPE)}>Основные</button>
            <button className={cls['active_btn']} onClick={() => modalChanger(modalTypes.CREATE_CASH_DESIGN_TYPE)}>Дизайн чека</button>
            <button>Перевод чека</button>
          </div>
          <div className={cls['create-product-container']}>
            <div className={cls['create-product-list']}>
              <label className={cls['input-file']}>
                <input
                  accept="image/png, image/jpeg"
                  // onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  name="file"
                />
                <span className={cls['input-file-btn']}>
                  <span><FaRegFileImage/></span>
                  <p>Выберите картинку</p>
                </span>
              </label>

              <ul>
                <li>Пустая строка</li>
                <li>Пустая строка</li>
                <li>Пустая строка</li>
                <li>Пустая строка</li>
              </ul>
            </div>
            <button className={cls['create-product-plus']}><AiOutlinePlus/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCashDesign