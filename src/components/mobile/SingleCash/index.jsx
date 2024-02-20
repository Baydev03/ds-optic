import { appRoutesPath } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import cls from './single.module.scss'

const SingleCash = () => {
  const navigate = useNavigate()
  
  return (
    <div className={cls['single']}>
      <div className={cls['single-head']}>
        <button 
          className={cls[location.pathname.slice(1) === appRoutesPath.SINGLE_CASH_STORE ? 'active' : '']}>Детали</button>
        <button 
          className={cls[location.pathname.slice(1) === appRoutesPath.SERVICES ? 'active' : '']}>Статистика</button>
      </div>
      <div className={cls['single-body']}>
        <div className={cls['single-child']}>
          <label>
            <span>№1</span>
            <FaChevronDown/>
          </label>
        </div>
        <div className={cls['single-child']}>
          <label>
            <span>Магазин: Магазин</span>
            <FaChevronDown/>
          </label>
        </div>
        <div className={cls['single-child']}>
          <label>
            <span>Almaz Eshimbekov</span>
            <FaChevronDown/>
          </label>
        </div>

      </div>
    </div>
  )
}

export default SingleCash