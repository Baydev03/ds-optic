import { setAdder, setMobileModalType } from '../../../store/slices/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { mobileModalTypes } from '../../../constants'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import cls from './service.module.scss'
import { FiCheck } from 'react-icons/fi'
import { useState } from 'react'

const CreateService = () => {
  const { mobileModalType } = useSelector(state => state.modal)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  const closeHandler = () => {
    dispatch(setMobileModalType(''))
    dispatch(setAdder(true))
  }

  return (
    <div id={cls[mobileModalType === mobileModalTypes.CREATE_SERVICE ? 'active' : '']} className={cls['create']}>
      <div className={cls['create-head']}>
        <div className={cls['create-head__left']}>
          <span onClick={closeHandler}><AiOutlineArrowLeft/></span>
          <p>Новая услуга</p>
        </div>
        <button><FiCheck/></button>
      </div>
      <div>
        <div className={cls['create-input']}>
          <label>
            <input className={cls[title ? 'active_input' : '']} value={title} onChange={e => setTitle(e.target.value)} type="text" />
            <span>Название группы товаров</span>
          </label>
        </div>
        <div className={cls['create-input']}>
          <label>
            <input className={cls[title ? 'active_input' : '']} value={title} onChange={e => setTitle(e.target.value)} type="text" />
            <span>Код товара</span>
          </label>
        </div>
        <div className={cls['create-gen']}>
          <label>
            <input className={cls[title ? 'active_input' : '']} value={title} onChange={e => setTitle(e.target.value)} type="text" />
            <span>Штрих код</span>
          </label>
          <button>Сгенерировать</button>
        </div>
        <div className={cls['create-child']}>
          <p>Группа товаров</p>
          <FaChevronDown/>
        </div>
        <div className={cls['create-taxes']}>
          <label>
            <input className={cls[title ? 'active_input' : '']} value={title} onChange={e => setTitle(e.target.value)} type="text" />
            <span>Цена продажи</span>
          </label>
          <button>Налог как в магазине</button>
        </div>
       
        <div className={cls['create-box']}>
          <p>Услуга по свободной цене</p>
          <span></span>
        </div>
        <div className={cls['create-child']}>
          <p>Единица измерения  шт.</p>
          <FaChevronDown/>
        </div>  
        <div className={cls['create-list']}>
          <h3>Сделать фото или выбрать фото</h3>
          <label>
            <p>Скидка<span><FaChevronDown/></span></p>
          </label>
          <label>
            <p>Срок годности<span><FaChevronDown/></span></p>
          </label>
          <label>
            <p>Цены по магазинам<span><FaChevronDown/></span></p>
          </label>
          <label>
            <p>Категории<span><FaChevronDown/></span></p>
          </label>
          <label>
            <p>Выбор страны/региона<span><FaChevronDown/></span></p>
          </label>
          <label>
            <p>Описание<span><FaChevronDown/></span></p>
          </label>
        </div>
      </div>
    </div>
  )
}

export default CreateService