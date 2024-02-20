import { appRoutesPath } from '../../../constants'
import vector from '../../../assets/prod-vector.svg'
import icon from '../../../assets/product-icon.svg'
import { useNavigate } from 'react-router-dom'
import cd1 from '../../../assets/cd1.svg'
import cd2 from '../../../assets/cd2.svg'
import cd3 from '../../../assets/cd3.svg'
import cls from './list.module.scss';

const ProductsList = () => {
  const navigate = useNavigate()

  const productModalHandler = () => {
    navigate('/' + appRoutesPath.SINGLE_PRODUCT)
  }
  
  return (
    <div className={cls['list']}>
      <div onClick={productModalHandler} className={cls['list-child']}>
        <div className={cls['list-child-image']}>
          <img src={icon} alt="product-icon" />
        </div>
        <div className={cls['list-child-body']}>
          <h3>Товар по свободной цене</h3>
          <div>
            <label>
              <b>Штрих-код</b>
              <b>Артикул</b>
            </label>
            <label>
              <span>
                <img src={cd1} alt="cd1" />
                <img src={cd2} alt="cd2" />
                <img src={cd3} alt="cd3" />
              </span>
              <span>
                <img src={vector} alt="vector" />
              </span>
            </label>
            <label>
              <p>0</p>
              <p>0,00 сом</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsList