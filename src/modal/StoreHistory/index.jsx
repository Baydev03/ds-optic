import { setModal, setModalType } from '../../store/slices/modalSlice';
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { modalTypes } from '../../constants';
import cls from './storeHistory.module.scss';
import { useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr'
import { useState } from 'react';
import MoveGoods from './components/MoveGoods';
import MoveCash from './components/MoveCash';
import Employeers from './components/Employeers';
import { useGetOneStoreQuery } from '../../store/query/storesQuery'
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { setProductPageIndex } from '../../store/slices/productSlice';

const StoreHistory = () => {
  const [toggle, setToggle] = useState('MoveGoods')
  const { data } = useGetOneStoreQuery({ id: +localStorage.getItem('storeId'), token: localStorage.getItem('accessToken')})

  const typeToggle = [
    {
      id:1,
      title: 'Движение товара',
      element: MoveGoods,
      key: 'MoveGoods',
    }, 
    {
      id:2,
      title: 'Движение денег',
      element: MoveCash,
      key: 'MoveCash',
    },
    {
      id:3,
      title: 'Сотрудники',
      element: Employeers,
      key: 'Employeers',
    },  
  ]
  const [drop, setDrop] = useState({
    firstDrop: false,
    secondDrop: false,
  })

  const dispatch = useDispatch()

  const renderTemplate = () => 
    typeToggle.map(i => i.key.includes(toggle) ? <i.element key={i.id} drop={drop} setDrop={setDrop} cls={cls}/> : <></>)

  const navigate = useNavigate()

  const handleRedirectToProducts = () => {
    navigate('/products')
    dispatch(setModal())
    dispatch(setProductPageIndex(3))
    localStorage.setItem('Index', data?.id)
  }

  return (
    <div className={cls['history']}>
      <div className={cls['history-head']}>
        {/* <button 
          onClick={() => dispatch(setModalType(modalTypes.USER_EDIT_TYPE))} 
          className={cls['history-editBtn']}>Редактировать</button> */}
        <button onClick={() => dispatch(setModal(false))} className={cls['history-closer']}><GrClose/></button>
      </div>
      <div className={cls['history-body']}>
        <div className={cls['history-user']}>
          <div className={cls['history-info']}>
            <h3>{data?.name}</h3>
            <span>Владелец</span>
          </div>
          <p>Создан {formatDate(data?.created_at)}</p>
          <div className={cls['history-links']}>
            <button>По умолчанию</button>
            <button onClick={handleRedirectToProducts}>Продукты</button>
          </div>
        </div>
        <div className={cls['history-line']}>
          <span>последние операции</span>
        </div>
        <div className={cls['history-nav']}>
          {
            typeToggle?.map((i) => 
              <button 
                key={i.id} 
                onClick={() => setToggle(i.key)}
                className={toggle === i.key ? cls['active_btn'] : ''}
              >
                {i.title}
              </button>,
            )
          }
        </div>
        {
          renderTemplate()
        }
      </div>
    </div>
  )
}

export default StoreHistory