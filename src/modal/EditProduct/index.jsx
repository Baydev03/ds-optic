import { setModal } from '../../store/slices/modalSlice';
import { IoCloseSharp } from 'react-icons/io5';
import cls from './editProduct.module.scss';
import { FaRegCopy } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import empty from '../../assets/empty.gif.png'

const EditProduct = () => {
  const dispatch = useDispatch()

  return (
    <div className={cls['edit']}>
      <div className={cls['edit-header']}>
        <div>
          <button>Редактировать</button>
          <button><FaRegCopy/></button>
        </div>
        <div>
          <button>Удалить</button>
          <button onClick={() => dispatch(setModal(false))}><IoCloseSharp/></button>
        </div>
      </div>
      <div className={cls['edit-body']}>
        <div className={cls['edit-product']}>
          <img src={empty} alt="product-image" />
          <div>
            <h4>Товар</h4>
            <h2>Очки</h2>
            <div>
              <span>Штрих-код:</span> 
              <span>Штрих-код: <p>--</p></span>
              <span>Артикул: <p>--</p></span>
              <span>Код товара: <p>00155</p></span>
            </div>
          </div>
        </div>
        <div className={cls['edit-nav']}>
          <div>
            <button>Информация</button>
            <button>История движения</button>
          </div>
        </div>
        <div className={cls['edit-info']}>
          <div>
            <p>Создан</p> <span>15 января</span>
          </div>
          <div>
            <p>Категории</p> <span>—</span>
          </div>
          <div>
            <p>Страна</p> <span>—</span>
          </div>
          <div>
            <p>Срок годности</p> <span>—</span>
          </div>
          <div>
            <p>Группа</p> <span>очки</span>
          </div>
          <div>
            <p>Описание</p> <span>—</span>
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
      </div>
    </div>
  )
}

export default EditProduct