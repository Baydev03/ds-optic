import { appRoutesPath } from '../../../constants'
import { useNavigate } from 'react-router-dom'
import cls from './list.module.scss'

const CashListMobile = () => {
  const navigate = useNavigate()

  return (
    <div className={cls['list']}>
      <div onClick={() => navigate(`/${appRoutesPath.SINGLE_CASH_STORE}`)} className={cls['list-child']}>
        <div className={cls['list-child-head']}>
          <h3>№1</h3>
          <h5>0,00 сом</h5>
        </div>  
        <p>Магазин</p>
        <span>Almaz Eshimbekov</span>
      </div>
    </div>
  )
}

export default CashListMobile