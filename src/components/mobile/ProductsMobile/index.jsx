import vector from '../../../assets/vector.svg'
import bar from '../../../assets/prod-bar.svg'
import alert from '../../../assets/alert.svg'
import fresh from '../../../assets/fresh.svg'
import ProductsList from '../ProductsList';
import cls from './products.module.scss';

const ProductsMobile = () => {
  return (
    <div className={cls['product']}>
      <div className={cls['product-head']}>
        <div className={cls['product-left']}>
          <img src={alert} alt="alert-icon" />
          <img src={fresh} alt="fresh-icon" />
          <p>1 поз.</p>
        </div>
        <div className={cls['product-right']}>
          <img src={bar} alt="bar-icon" />
          <img src={vector} alt="vector-icon" />
        </div>
      </div>
      <div className={cls['product-changer']}>
        <div className={cls['active']}>
          <p>Название</p>
        </div>
        <div>
          <p>Цена</p>
        </div>
        <div>
          <p>Количество</p>
        </div>
      </div>
      <ProductsList/>
    </div>
  )
}

export default ProductsMobile