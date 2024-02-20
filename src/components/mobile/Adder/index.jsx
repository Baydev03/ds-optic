import { setAdder, setMobileModalType } from '../../../store/slices/modalSlice';
import { appRoutesPath, mobileModalTypes } from '../../../constants';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TbPlus } from 'react-icons/tb';
import cls from './adder.module.scss';

const Adder = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const cashHandler = (type) => {
    dispatch(setMobileModalType(type))
    dispatch(setAdder(false))
  }

  const addHandler = () => {
    location.pathname.slice(1) === appRoutesPath.CASH_STORE
      ? cashHandler(mobileModalTypes.CASH_CREATE)
      : location.pathname === appRoutesPath.MAIN
        ? cashHandler(mobileModalTypes.MAIN_SCROLLER)
        : location.pathname.slice(1) === appRoutesPath.PRODUCTS
          ? cashHandler(mobileModalTypes.MAIN_SCROLLER)
          : ''
  }
  
  return (
    <div 
      onClick={addHandler}
      className={cls['add']}>
      <TbPlus/>
    </div>
  )
}

export default Adder