import { useDeleteStoreMutation, useGetStoresQuery } from '../../../store/query/storesQuery';
import { setModal, setModalType } from '../../../store/slices/modalSlice';
import { FaRegCalendarCheck, FaRegEdit } from 'react-icons/fa'
import { HiOutlineBuildingOffice } from 'react-icons/hi2'
import { modalTypes } from '../../../constants';
import cls from './storesList.module.scss';
import Loader from '../../elements/Loader';
import { useDispatch } from 'react-redux';
import { BiTrash } from 'react-icons/bi'
import { formatDate } from '../../../utils/formatDate';
import { notification } from 'antd';

const StoresList = () => {
  const dispatch = useDispatch()

  const [api, contextHolder] = notification.useNotification();
  const { data, isLoading } = useGetStoresQuery({token: localStorage.getItem('accessToken')})
  const [deleteStore] = useDeleteStoreMutation()

  const modalHandler = (type , id) => {
    localStorage.setItem('storeId', id)
    dispatch(setModal())
    dispatch(setModalType(type))
  }

  const deleteStoreHander = async (id) => {
    try {
      await deleteStore({ id, token: localStorage.getItem('accessToken') })
      api.open({
        message: `Магазин #${id} удален !`,
        duration: 3,
      });
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      {contextHolder}
      <div className={cls['stores']}>
        <div className={cls['stores-wrapper']}>
          <div onClick={() => modalHandler(modalTypes.CREATE_STORE_TYPE)} className={cls['stores-create']}>
            <button>Создать</button>
          </div>
          {isLoading ? <Loader/> : data?.results.map(item => (
            <div key={item.id} className={cls['stores-child']}>
              <div onClick={() => modalHandler(modalTypes.STORE_HISTORY_TYPE, item.id)} className={cls['stores-child-head']}>
                <span className={cls['stores-child-icon']}><HiOutlineBuildingOffice/>  </span>
                <div>
                  <h3>{item.name}</h3>
                  <p><FaRegCalendarCheck/> Создан {formatDate(item.created_at)}</p>
                </div>
              </div>
              <div className={cls['stores-child-button']}>
                <div>
                  <span onClick={() => modalHandler(modalTypes.EDIT_STORE_TYPE, item?.id)}><FaRegEdit/> Редактировать</span>  
                  <button onClick={() => deleteStoreHander(item?.id)}><BiTrash/></button>
                </div>
              </div>
            </div>
          ))}
          {/* <div className={cls['stores-child']}>
            <div onClick={() => modalHandler(modalTypes.STORE_HISTORY_TYPE)} className={cls['stores-child-head']}>
              <span className={cls['stores-child-icon']}><HiOutlineBuildingOffice/>  </span>
              <div>
                <h3>Beta 2</h3>
                <p><FaRegCalendarCheck/> Создан 14 января</p>
              </div>
            </div>
            <div className={cls['stores-child-button']}>
              <div>
                <span onClick={() => modalHandler(modalTypes.EDIT_STORE_TYPE)}><FaRegEdit/> Редактировать</span>
                <button><BiTrash/></button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default StoresList