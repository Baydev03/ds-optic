import { setAdder, setMobileModalType } from '../../../store/slices/modalSlice'
import { appRoutesPath, mobileModalTypes } from '../../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import cls from './scroller.module.scss'

const MainScroller = () => {
  const { mobileModalType } = useSelector(state => state.modal)
  const dispatch = useDispatch()
  const location = useLocation()

  const closeHandler = () => {
    dispatch(setMobileModalType(''))
    dispatch(setAdder(true))
  }

  const newModalHandler = (type) => {
    dispatch(setMobileModalType(type))
    dispatch(setAdder(false))
  }

  let content = ''

  if(location.pathname.slice(1) === appRoutesPath.PRODUCTS){
    content = <ul>
      <li onClick={() => newModalHandler(mobileModalTypes.CREATE_GROUP)}>Группа</li>
      <li onClick={() => newModalHandler(mobileModalTypes.CREATE_PRODUCT)}>Товар</li>
      <li onClick={() => newModalHandler(mobileModalTypes.CREATE_SERVICE)}>Услуга</li>
      <li onClick={() => newModalHandler(mobileModalTypes.CREATE_COMPLEX)}>Комплект</li>
      <li>По штрихкоду</li>
      <li>Импорт из Excel</li>
    </ul>
  }else if(location.pathname === appRoutesPath.MAIN){
    content = <ul>
      <li>Выручка</li>
      <li>Себестоимость продаж</li>
      <li>Прибыль</li>
      <li>Средний чек</li>
    </ul>
  }

  return (  
    <div 
      onClick={closeHandler}
      id={cls[mobileModalType === mobileModalTypes.MAIN_SCROLLER ? 'active' : '']} 
      className={cls['scroller']}>
      <div onClick={(e) => e.stopPropagation()} className={cls['scroller-wrapper']}>
        {content}
      </div>
    </div>
  )
}

export default MainScroller