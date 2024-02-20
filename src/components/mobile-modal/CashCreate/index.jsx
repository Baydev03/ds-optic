import { setAdder, setMobileModalType } from '../../../store/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { mobileModalTypes } from '../../../constants';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FiCheck } from 'react-icons/fi'
import cls from './cash.module.scss'
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const CashCreate = () => {
  const { mobileModalType } = useSelector(state => state.modal)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  const closeHandler = () => {
    dispatch(setMobileModalType(''))
    dispatch(setAdder(true))
  }

  return (
    <div id={cls[mobileModalType === mobileModalTypes.CASH_CREATE ? 'active' : '']} className={cls['cash']}>
      <div className={cls['cash-head']}>
        <div className={cls['cash-head__left']}>
          <span onClick={closeHandler}><AiOutlineArrowLeft/></span>
          <p>Новая касса</p>
        </div>
        <button><FiCheck/></button>
      </div>
      <div className={cls['cash-body']}>
        <div className={cls['cash-input']}>
          <label>
            <input className={cls[title ? 'active_input' : '']} value={title} onChange={e => setTitle(e.target.value)} type="text" />
            <span>Название кассы</span>
          </label>
        </div>
        <div className={cls['cash-child']}>
          <p>Магазин</p>
          <FaChevronDown/>
        </div>
        <div className={cls['cash-child']}>
          <p>Терминалы</p>
          <FaChevronDown/>
        </div>
        <div className={cls['cash-child']}>
          <p>Сотрудники</p>
          <FaChevronDown/>
        </div>
      </div>
    </div>
  )
}

export default CashCreate