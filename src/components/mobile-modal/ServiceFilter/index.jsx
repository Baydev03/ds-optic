import { setMobileModalType } from '../../../store/slices/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { mobileModalTypes } from '../../../constants'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import cls from './serviceFilter.module.scss'
import { FiCheck } from 'react-icons/fi'
import { Switch } from 'antd';

const ServiceFilter = () => {
  const { mobileModalType } = useSelector(state => state.modal)
  const dispatch = useDispatch()

  return (
    <div 
      id={cls[mobileModalType === mobileModalTypes.SERVICE_FILTER ? 'active' : '']} 
      className={cls['filter']}>
      <div className={cls['filter-head']}>
        <div className={cls['filter-head__left']}>
          <span onClick={() => dispatch(setMobileModalType(''))}><AiOutlineArrowLeft/></span>
          <p>Фильтры</p>
        </div>
        <button><FiCheck/></button>
      </div>
      <div className={cls['filter-body']}>
        <div className={cls['filter-child']}>
          <div>
            <span><FaChevronDown/></span>
            <p>Дата</p>
          </div>
          <Switch className={cls['switch']}/>
        </div>
        <div className={cls['filter-child']}>
          <div>
            <span><FaChevronDown/></span>
            <p>Касса</p>
          </div>
          <Switch className={cls['switch']}/>
        </div>
        <div className={cls['filter-child']}>
          <div>
            <span><FaChevronDown/></span>
            <p>Сотрудник</p>
          </div>
          <Switch className={cls['switch']}/>
        </div>
        <div className={cls['filter-child']}>
          <div>
            <span><FaChevronDown/></span>
            <p>Магазин</p>
          </div>
          <Switch className={cls['switch']}/>
        </div>
        <div className={cls['filter-child']}>
          <div>
            <span></span>
            <p>Только открытые сцены</p>
          </div>
          <Switch className={cls['switch']}/>
        </div>
      </div>
    </div>
  )
}

export default ServiceFilter