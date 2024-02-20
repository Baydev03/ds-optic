import { useDeletUserMutation, useGetUsersQuery } from '../../store/query/usersQuery';
import { setModal, setModalType } from '../../store/slices/modalSlice';
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { modalTypes } from '../../constants';
import cls from './userHistory.module.scss';
import { useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr'
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import Loader from '../../components/elements/Loader';
import { notification } from 'antd';

const UserHistory = () => {
  const [drop, setDrop] = useState({
    firstDrop: false,
    secondDrop: false,
  })

  const { data, isLoading: dataLoading } = useGetUsersQuery({
    token: localStorage.getItem('accessToken'),
  })
  const [deleteUserHandler, { isLoading }] = useDeletUserMutation()

  const userId = +localStorage.getItem('userId')

  const dispatch = useDispatch()

  const foundedUser = data && data?.find(item => item?.id === userId)

  function setRole(item) {
    if(item?.role?.name === 'super admin') {
      return 'Владелец'
    } else if (item?.role?.name === 'admin') {
      return 'Администратор'
    } else if (item?.role?.name === 'storekeeper') {
      return 'Кладовщик'
    } else {
      return 'Кассир'
    }
  }

  const [api, contextHolder] = notification.useNotification();

  const deleteUser = async (id) => {
    if(!id) return;

    try {
      await deleteUserHandler({ id, token: localStorage.getItem('accessToken') })
      dispatch(setModal(false))
      api.open({
        message: 'Пользователь удален !',
        duration: 3,
      });
    } catch (e) {
      console.log(e)
    }
  }

  return (
    isLoading || dataLoading ? <Loader/> :
      <>
        {contextHolder}
        <div className={cls['history']}>
          <div className={cls['history-head']}>
            <div>
              <button 
                style={{marginRight: '5px'}}
                onClick={() => dispatch(setModalType(modalTypes.USER_EDIT_TYPE))} 
                className={cls['history-editBtn']}>Редактировать</button>
              <button 
                onClick={() => deleteUser(userId)} 
                className={cls['history-deleteBtn']}><MdDelete /></button>
            </div>
            <button onClick={() => dispatch(setModal(false))} className={cls['history-closer']}><GrClose/></button>
          </div>
          <div className={cls['history-body']}>
            <div className={cls['history-user']}>
              <div className={cls['history-info']}>
                <h3>{foundedUser?.fullname}</h3>
                <span>{setRole(foundedUser)}</span>
              </div>
              <p>Создан 18 января</p>
              <div className={cls['history-links']}>
                <label>
                  <HiOutlineMail/>
                  <span>{foundedUser?.email}</span>
                </label>
              </div>
            </div>
            <div className={cls['history-line']}>
              <span>последние операции</span>
            </div>
            <h1 className={cls['history-title']}>15 января</h1>
            <div className={cls['history-drop']}>
              <div className={cls['history-drop-head']}>
                <div className={cls['history-drop-handler']}>
                  <div>
                    <span></span>
                    <p>Продажа #1</p>
                  </div>
                  <h3>200.00 сом</h3>
                </div>
                <div className={cls['history-drop-info']}>
                  <p>Магазин <span>ДОмашний</span></p>
                  <b><span>Asad Halmatov</span>15 января 23:06</b>
                </div>
              </div>
              <div id={cls[drop.firstDrop ? 'active_drop' : '']} className={cls['history-drop-body']}>
                <div onClick={() => setDrop((prev) => ({...prev, firstDrop: !drop.firstDrop}))} className={cls['history-drop-body-handler']}>
                  <span><AiOutlineCheckCircle/> Документ оплачен</span>
                  <button><BsChevronDown/></button>
                </div>
                {drop.firstDrop && (
                  <div className={cls['history-drop-body-list']}>
                    <div className={cls['history-drop-body-list-child']}>
                      <div>
                        #
                      </div>
                      <div>
                      Счёт
                      </div>
                      <div>
                      Контрагент
                      </div>
                      <div>
                      Дата
                      </div>
                      <div>
                      Сумма
                      </div>
                    </div>  
                    <div className={cls['history-drop-body-list-child']}>
                      <div className={cls['baller']}>
                        1
                      </div>
                      <div>
                        <span>№1</span>
                      </div>
                      <div>
                        <span>asad</span>
                      </div>
                      <div>
                      Дата
                      </div>
                      <div>
                      Сумма
                      </div>
                    </div>  
                  </div>
                )}
              </div>
              <div id={cls[drop.secondDrop ? 'active_drop' : '']} className={cls['history-drop-footer']}>
                <div onClick={() => setDrop((prev) => ({...prev, secondDrop: !drop.secondDrop}))} className={cls['history-drop-footer-handler']}>
                  <span>1 позиция</span>
                  <button><BsChevronDown/></button>
                </div>
                {drop.secondDrop && (
                  <div className={cls['history-drop-footer-list']}>
                    <div className={cls['history-drop-footer-list-child']}>
                      <div>
                        Наименование
                      </div>
                      <div>
                        Кол-во
                      </div>
                      <div>
                        Цена
                      </div>
                      <div>
                        Итог
                      </div>
                    </div>
                    <div className={cls['history-drop-footer-list-child']}>
                      <div>
                        <span>Очки</span>
                      </div>
                      <div>
                        1
                      </div>
                      <div>
                        200.00
                      </div>
                      <div>
                        200.00
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default UserHistory