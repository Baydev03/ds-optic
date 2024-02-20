import { useDeleteProductGroupsMutation, useGetProductGroupsQuery } from '../../../store/query/productQuery'
import { setModal, setModalType } from '../../../store/slices/modalSlice'
import { FaLayerGroup, FaRegCalendarCheck } from 'react-icons/fa'
import { modalTypes } from '../../../constants'
import { useDispatch } from 'react-redux'
import { BiTrash } from 'react-icons/bi'
import cls from './group.module.scss'
import { formatDate } from '../../../utils/formatDate'
import Loader from '../../elements/Loader'
import { notification } from 'antd'

const GroupList = () => {
  const { data, isLoading } = useGetProductGroupsQuery({ token: localStorage.getItem('accessToken') })
  const [ deleteProductGroup, { isDeleteLoading } ] = useDeleteProductGroupsMutation()
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch()

  const modalHandler = (type , id) => {
    localStorage.setItem('storeId', id)
    dispatch(setModal())
    dispatch(setModalType(type))
  }

  const deleteGroup = async (id) => {
    try {
      await deleteProductGroup({ id, token: localStorage.getItem('accessToken') })
      api.open({
        message: `Группа #${id} была удаленна !`,
        duration: 3,
      });
    } catch (e) {
      console.log(e)
    }
  }

  return (
    isLoading || isDeleteLoading ? <Loader/> : 
      <>
        {contextHolder}
        <div className={cls['stores']}>
          <div className={cls['stores-wrapper']}>
            <div onClick={() => modalHandler(modalTypes.CREATE_GROUP_TYPE)} className={cls['stores-create']}>
              <button>Создать</button>
            </div>
            {data && data?.results?.map(item => (
              <div key={item.id} className={cls['stores-child']}>
                <div onClick={() => modalHandler(modalTypes.STORE_HISTORY_TYPE, item.branch)} className={cls['stores-child-head']}>
                  <span className={cls['stores-child-icon']}><FaLayerGroup/>  </span>
                  <div>
                    <h3>{item.name}</h3>
                    <p><FaRegCalendarCheck/> Создан {formatDate(item.created_at)}</p>
                  </div>
                </div>
                <div className={cls['stores-child-button']}>
                  <div>
                    <span onClick={() => deleteGroup(item?.id)}><BiTrash/> Удалить</span>  
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

export default GroupList
