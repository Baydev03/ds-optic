import { setModal, setModalType } from '../../../store/slices/modalSlice';
import { modalTypes } from '../../../constants/'
import { useDispatch } from 'react-redux';
import cls from './cashHeader.module.scss';
 
const CashHeader = () => {
  const dispatch = useDispatch()

  const modalHandler = () => {
    dispatch(setModal(true))
    dispatch(setModalType(modalTypes.CREATE_CASH_TYPE))
  }

  return (
    <div className={cls['cash']}>
      <button className={cls['cash-createBtn']} onClick={modalHandler}>Создать</button>
      <span>Всего денег в кассах 200.00 сом</span>
    </div>
  )
}

export default CashHeader