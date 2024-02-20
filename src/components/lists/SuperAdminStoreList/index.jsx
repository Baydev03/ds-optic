import React from 'react'
import cls from './superAdminStoreList.module.scss'
import { useDispatch } from 'react-redux'
import { useGetStoresQuery } from '../../../store/query/storesQuery'
import Loader from '../../elements/Loader'
import { modalTypes } from '../../../constants'
import { setModal, setModalType } from '../../../store/slices/modalSlice'
import { Empty } from 'antd'

const SuperAdminStoreList = () => {
  const dispatch = useDispatch()
  const { data, isLoading } = useGetStoresQuery({token: localStorage.getItem('accessToken')})  

  const modalHandler = (type , id) => {
    localStorage.setItem('storeId', id)
    dispatch(setModal())
    dispatch(setModalType(type))
  }

  return (
    <React.Fragment>
      <section className={cls['super-store-container']}>
        <h2>Филиалы</h2>

        <div className={cls['super-store-inline']}>
          {data?.results?.length === 0 ? <div className='center-empty' style={{width: '100%'}}>
            <Empty />
          </div>
            :
            isLoading ? <Loader /> : data?.results.map(item => (
              <div key={item.id} className={cls['stores-child']}>
                <div onClick={() => modalHandler(modalTypes.STORE_HISTORY_TYPE, item.id)} className={cls['stores-child-head']}>
                  <div>
                    {item?.image && <img src={item?.image} alt="" />}
                  </div>
                  <div className={cls['stores-card-title']}>
                    <h3>{item.name}</h3>
                    <p>
                      Сотрудников: {item?.members?.length}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </React.Fragment>
  )
}

export default SuperAdminStoreList
