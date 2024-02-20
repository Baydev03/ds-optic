import { setModal, setModalType } from '../../store/slices/modalSlice';
import cls from './createProductAlt.module.scss';
import { modalTypes } from '../../constants';
import { useDispatch } from 'react-redux';
import { GoPlus } from 'react-icons/go';
import { Switch } from 'antd';
import { useState } from 'react';

const CreateProductAlt = () => {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    isProduct: false,
  })

  const onChange = (checked) => {
    setState((prev) => ({...prev, isProduct: checked}))
  };

  const openAltModal = (type) => {
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
            <button onClick={() => openAltModal(modalTypes.CREATE_PRODUCT_TYPE)}>Основные</button>
            <button onClick={() => openAltModal(modalTypes.CREATE_PRODUCT_ALT_TYPE)}>Дополнительные</button>
          </div>
          <div className={cls['create-product-table']}>
            <h3 className={cls['create-product-table-title']}>Склад</h3>

            <div className={cls['create-product-table-group']}>
              <h3>Группа (Очистить)</h3>
              <button>Выберите</button>
            </div>  

            <div className={cls['create-product-table-deliver']}>
              <div>
                <h3>Выберите поставщика</h3>
                <input type="text" placeholder='введите' />
              </div>
              <div>
                <h3>Минимальный остаток</h3>
                <label>
                  <input type="number" placeholder='0' />
                  <button>шт</button>
                </label>
              </div>
            </div>

            <div className={cls['create-product-table-elem']}>
              <div>
                <Switch onChange={onChange} />
                <span>
                  <p>Товар с модификациями</p>
                  <h3>Будут созданы вариации товара (например, по цвету, размеру)</h3>
                </span>
              </div>

              {state.isProduct && (
                <>
                  <div className={cls['create-product-table-modify']}>
                    <div>
                      <h3>Свойство (пр. Цвет)</h3>
                      <input type="text" placeholder='Свойство' />
                    </div>
                    <div>
                      <h3>Значения (пр. Белый, Черный, Синий)</h3>
                      <input type="text" placeholder='Введите значение и нажмите Enter' />
                    </div>
                  </div>
                  <div className={cls['create-product-table-line']}></div>
                  <button className={cls['create-product-table-newBtn']}>Добавить новое свойство</button>
                </>
              )}

              <div>
                <Switch />
                <span>
                  <p>Ввести начальные остатки</p>
                  <h3>Будут созданы документы оприходования</h3>
                </span>
              </div>
            </div>

            <div className={cls['create-product-table-date']}>
              <h3>Срок годности</h3>
              <input type="text" placeholder='DD/MM/YYYY' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProductAlt