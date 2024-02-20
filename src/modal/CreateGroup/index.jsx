import { setModal } from '../../store/slices/modalSlice';
import cls from './createGroup.module.scss';
import { useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr'
import { useState } from 'react';
import { useGetStoresQuery } from '../../store/query/storesQuery';
import { useForm } from 'react-hook-form';
import { useCreateProductGroupsMutation } from '../../store/query/productQuery';
import Loader from '../../components/elements/Loader';
import { notification } from 'antd';

const CreateGroup = () => {
  const dispatch = useDispatch()
  const [store, setStore] = useState({
    storeValue: '',
    storeObject: {},
    isStore: false,
  })

  const {
    formState: { isValid },
    getValues,
    register,
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  })

  const { data: StoreData } = useGetStoresQuery({token: localStorage.getItem('accessToken')})
  const [ createGroup, { isLoading } ] = useCreateProductGroupsMutation()
  const [api, contextHolder] = notification.useNotification();

  const handleStore = (val) => {
    setStore((prev) => ({...prev, storeValue: val?.name, storeObject: val , isStore: !store.isStore}))
  }

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      branch: store?.storeObject?.id,
    }
    try {
      await createGroup({ data: newData, token: localStorage.getItem('accessToken') })
      dispatch(setModal(false))
      setStore((prev) => ({...prev, storeObject: {}, storeValue: ''}))
      reset()
      api.open({
        message: 'Группа создана !',
        duration: 3,
      });
    } catch (e) {
      console.log(e)
    }
  }

  return (
    isLoading ? <Loader/> :
      <>
        {contextHolder}
        <div className={cls['group']}>
          <div className={cls['group-head']}>
            <button className={cls[isValid && getValues().name && store.storeValue ? 'active_btn' : '']}  
              onClick={handleSubmit(onSubmit)}>Сохранить</button>
            <button onClick={() => dispatch(setModal(false))}><GrClose/></button>
          </div>
          <div className={cls['group-body']}>
            <div>
              <h3>Наименование группы</h3>
              <input type="text" {...register('name')}/>
            </div>
            <div className={cls['stores']}>
              <p>Магазины <button>?</button></p>
              <div>
                <span onClick={() => setStore((prev) => ({...prev, isStore: !store.isStore}))}>
                  {store.storeValue}
                </span>
                {store.isStore &&  <ul className={cls['drop']}>
                  {
                    StoreData?.results?.map((item, i) => 
                      <p key={i} onClick={() => handleStore(item)}>{item.name}</p>)
                  }
                </ul>}
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default CreateGroup