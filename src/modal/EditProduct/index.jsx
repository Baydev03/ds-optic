import { useDeleteProductMutation, useGetOneProductQuery, useGetOneProductsCategoryQuery } from '../../store/query/productQuery';
import { formatDateToLocal } from '../../utils/formatDate';
import { setModal, setModalType } from '../../store/slices/modalSlice';
import Loader from '../../components/elements/Loader';
import { IoCloseSharp } from 'react-icons/io5';
import empty from '../../assets/empty.gif.png'
import cls from './editProduct.module.scss';
import { FaRegCopy } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { modalTypes } from '../../constants';

const EditProduct = () => {
  const dispatch = useDispatch()
  const [template, setTemplate] = useState(true)

  const id = +localStorage.getItem('productId')
  const { data, isLoading } = useGetOneProductQuery({ id, token: localStorage.getItem('accessToken') })
  const { data: dataCategory } = useGetOneProductsCategoryQuery({ id: data?.category, token: localStorage.getItem('accessToken') })
  const [deleteProduct] = useDeleteProductMutation()

  const handleDeleteProduct = () => {
    dispatch(setModal(false))
    deleteProduct({ id, token: localStorage.getItem('accessToken') })
  }

  return (
    isLoading ? <Loader/> : 
      data && 
      <div className={cls['edit']}>
        <div className={cls['edit-header']}>
          <div>
            <button onClick={() => dispatch(setModalType(modalTypes.CUSTOM_PRODUCT_INFO))}>Редактировать</button>
            <button><FaRegCopy/></button>
          </div>
          <div>
            <button onClick={handleDeleteProduct}>Удалить</button>
            <button onClick={() => dispatch(setModal(false))}><IoCloseSharp/></button>
          </div>
        </div>
        <div className={cls['edit-body']}>
          <div className={cls['edit-product']}>
            <img src={data.image || empty} alt="product-image" />
            <div>
              <h4>Товар</h4>
              <h2>{data.name}</h2>
              <div>
                <span>Штрих-код:</span> 
                <span>Штрих-код: <p>--</p></span>
                <span>Артикул: <p>{data.articul}</p></span>
                <span>Код товара: <p>{data.code_of_good}</p></span>
              </div>
            </div>
          </div>
          <div className={cls['edit-nav']}>
            <div>
              <button className={cls[template ? 'active_btn' : '']} onClick={() => setTemplate(true)}>Информация</button>
              <button className={cls[!template ? 'active_btn' : '']} onClick={() => setTemplate(false)}>История движения</button>
            </div>
          </div>
          {template ? <>
            <div className={cls['edit-info']}>
              <div>
                <p>Создан</p> <span>{formatDateToLocal(data.created_at)}</span>
              </div>
              <div>
                <p>Категории</p> <span>{dataCategory?.name || '--'}</span>
              </div>
              <div>
                <p>Страна</p> <span>{data.country || '--'}</span>
              </div>
              <div>
                <p>Срок годности</p> <span>{formatDateToLocal(data.expire) || '--'}</span>
              </div>
              <div>
                <p>Группа</p> <span>очки</span>
              </div>
              <div>
                <p>Описание</p> <span>{data.description || '--'}</span>
              </div>
            </div>
            <div className={cls['edit-title']}>
              <span>Цены</span>
            </div>
            <div className={cls['edit-prices']}>
              <div className={cls['edit-prices-head']}>
                <h3>Цена продажи</h3>
                <h3>Цена закупки</h3>
                <h3>Себестоимость</h3>
                <h3>Наценка</h3>
                <h3>Маржинальность</h3>
              </div>
              <div className={cls['edit-prices-list']}>
                <div>
                  <p>200.00 сом</p>
                </div>
                <div>
                  <p>0.00 сом</p>
                </div>
                <div>
                  <span>0.00 сом <button>?</button></span>
                </div>
                <div>
                  <h5>100%</h5>
                </div>
                <div>
                  <h5>100%</h5>
                </div>
              </div>  
            </div>
            <div className={cls['edit-title']}>
              <span>Склад</span>
            </div>
            <div className={cls['edit-table']}>
              <div className={cls['edit-table-head']}>
                <h3>Магазин</h3>
                <h3>Цена продажи, сом</h3>
                <h3>Остаток,</h3>
                <h3>По себестоимости, сом</h3>
                <h3>По цене продажи, сом</h3>
              </div>

              <div className={cls['edit-table-list']}>
                <div>
                  <p>Beta 2</p>
                </div>
                <div>
                  <span>200.00</span>
                </div>
                <div>
                  <span>3</span>
                </div>
                <div>
                  <span>0.00</span>
                </div>
                <div>
                  <span>600.00</span>
                </div>
              </div>
              <div className={cls['edit-table-list']}>
                <div>
                  <p>Beta 2</p>
                </div>
                <div>
                  <span>200.00</span>
                </div>
                <div>
                  <span>3</span>
                </div>
                <div>
                  <span>0.00</span>
                </div>
                <div>
                  <span>600.00</span>
                </div>
              </div>
              <div className={cls['edit-table-list']}>
                <div>
                  <p>Beta 2</p>
                </div>
                <div>
                  <span>200.00</span>
                </div>
                <div>
                  <span>3</span>
                </div>
                <div>
                  <span>0.00</span>
                </div>
                <div>
                  <span>600.00</span>
                </div>
              </div>
            </div>
          </> : <>
            <h4>История движения</h4>
          </>}
        </div>
      </div>
  )
}

export default EditProduct