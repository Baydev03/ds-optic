import { setModal, setModalType } from '../../../store/slices/modalSlice';
import { modalTypes } from '../../../constants';
import cls from './workersList.module.scss';
import { useDispatch } from 'react-redux';
import UserCards from './UserCards';

const WorkersList = ({profile}) => {
  const dispatch = useDispatch()

  const profilesCount = profile?.length;

  const modalHandler = (type, id) => {
    dispatch(setModal(true))
    dispatch(setModalType(type))
    localStorage.setItem('userId', Number(id))
  }

  const typeUser = {
    cashersCount: 
      profile?.filter(item => item?.role?.name === 'casher')?.length,
    superAdminCount: 
      profile?.filter(item => item?.role?.name === 'super admin')?.length,
    adminCount: 
      profile?.filter(item => item?.role?.name === 'admin')?.length,
    storeKeeperCount: 
      profile?.filter(item => item?.role?.name === 'storekeeper')?.length,
  }

  const users = []

  profile?.forEach(item => {
    return item?.role?.name === 'super admin' 
      ? users.unshift(item)
      : users.push(item)
  })


  return (
    <div className={cls['work']}>
      <div 
        className={cls['work-wrapper']} 
        style={
          profilesCount > 1 
            ? {height: '90%'}
            : {height: '466.05px'}
        }
      >
        <div className={cls['work-info']}>
          <h3>Всего {profilesCount} пользователей</h3>
          <span>
            <p>Владельцев: {typeUser?.superAdminCount}</p>
            <p>Управляющих: {typeUser?.adminCount}</p>
            <p>Кассиры: {typeUser?.cashersCount}</p>
            <p>Кладовщиков: {typeUser?.storeKeeperCount}</p>
          </span>
        </div>
        <div className={cls['work-list']}>
          <div onClick={() => modalHandler(modalTypes.CREATE_ADMIN_TYPE)} className={cls['work-list-create']}>
            <span>Создать</span>
          </div>
          {
            !!users && users?.map((item, i) => (
              <UserCards 
                item={item}
                key={i} 
                cls={cls} 
                modalHandler={modalHandler}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default WorkersList