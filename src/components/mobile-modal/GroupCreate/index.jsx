import { setAdder, setMobileModalType } from '../../../store/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { mobileModalTypes } from '../../../constants';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import cls from './group.module.scss'
import { useState } from 'react';

const GroupCreate = () => {
  const { mobileModalType } = useSelector(state => state.modal)
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const closeHandler = () => {
    dispatch(setMobileModalType(''))
    dispatch(setAdder(true))
  }
  

  return (
    <div id={cls[mobileModalType === mobileModalTypes.CREATE_GROUP ? 'active' : '']} className={cls['group']}>
      <div className={cls['group-head']}>
        <div className={cls['group-head__left']}>
          <span onClick={closeHandler}><AiOutlineArrowLeft/></span>
          <p>Новая группа товара</p>
        </div>
        <button><FiCheck/></button>
      </div>
      <div className={cls['group-body']}>
        <div className={cls['group-input']}>
          <label>
            <input className={cls[title ? 'active_input' : '']} value={title} onChange={e => setTitle(e.target.value)} type="text" />
            <span>Название группы товаров</span>
          </label>
        </div>
        <div className={cls['group-child']}>
          <p>Группа товаров</p>
          <FaChevronDown/>
        </div>
      </div>
    </div>
  )
}

export default GroupCreate