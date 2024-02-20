import React from 'react'
import { useGetUsersQuery } from '../../../store/query/usersQuery';
import { useGetStoresQuery } from '../../../store/query/storesQuery'
import UserCards from '../../../components/lists/WorkersList/UserCards';
import cls from '../../../components/lists/WorkersList/workersList.module.scss';
import { useDispatch } from 'react-redux';
import { setModal, setModalType } from '../../../store/slices/modalSlice';
import { Empty } from 'antd';


const Employeers = () => {
  const dispatch = useDispatch()
  const storeId = +localStorage.getItem('storeId')

  const { data: userData, isLoading } = useGetUsersQuery({
    token: localStorage.getItem('accessToken'),
  })

  const { data: storeData, isLoading: isLoadingStore } = useGetStoresQuery({token: localStorage.getItem('accessToken')}) 

  const getMembersOfStore = () => {
    const foundedStore = storeData?.results?.find(i => i.id === storeId)
    const foundedUsers = []

    userData?.forEach(u => foundedStore?.members.forEach(s => u?.id === s ? foundedUsers.push(u) : null))
    return foundedUsers
  }

  const modalHandler = (type, id) => {
    dispatch(setModal(true))
    dispatch(setModalType(type))
    localStorage.setItem('userId', Number(id))
  }

  return (
    <div>
      {
        getMembersOfStore()?.length === 0 ? 
          <div className='center-empty'> 
            <Empty />
          </div> : 
          <div style={{marginTop:'30px'}} className={cls['work-list']}>
            {
              getMembersOfStore()?.map((item, i) => (
                <UserCards 
                  item={item}
                  key={i} 
                  cls={cls} 
                  modalHandler={modalHandler}
                />
              ))
            }
          </div>
      }
    </div>
  )
}

export default Employeers
