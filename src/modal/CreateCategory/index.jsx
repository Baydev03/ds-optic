import { useCreateProductCategoryMutation, useGetProductGroupsQuery } from '../../store/query/productQuery';
import { setModal } from '../../store/slices/modalSlice';
import cls from './createCategory.module.scss';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { GrClose } from 'react-icons/gr'
import { useState } from 'react';
import Loader from '../../components/elements/Loader';
import { notification } from 'antd';

const CreateCategory = () => {
  const dispatch = useDispatch()
  const { data } = useGetProductGroupsQuery({ token: localStorage.getItem('accessToken') })
  const [createProductCategory, { isLoading }] = useCreateProductCategoryMutation()
  const [api, contextHolder] = notification.useNotification();
  
  const [store, setStore] = useState({
    storeValue: 'Группы',
    storeObject: {},
    isStore: false,
  })

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
  })

  const handleStore = (val) => {
    setStore((prev) => ({...prev, storeValue: val?.name, storeObject: val , isStore: !store.isStore}))
  }

  const onSubmit = async (data) => {
    const newData = {
      ...data,
      group: store?.storeObject?.id,
    }
    try {
      await createProductCategory({ data: newData, token: localStorage.getItem('accessToken') })
      dispatch(setModal(false))
      reset()
      api.open({
        message: 'Категория создана !',
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
            <button onClick={handleSubmit(onSubmit)}>Сохранить</button>
            <button onClick={() => dispatch(setModal(false))}><GrClose/></button>
          </div>
          <div className={cls['group-body']}>
            <div>
              <h3>Наименование категории</h3>
              <input type="text" {...register('name')}/>
            </div>
            <div className={cls['stores']}>
              <p>Группы <button>?</button></p>
              <div>
                <span onClick={() => setStore((prev) => ({...prev, isStore: !store.isStore}))}>
                  {store.storeValue}
                </span>
                {store.isStore &&  <ul className={cls['drop']}>
                  {
                    data?.results?.map((item, i) => 
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

export default CreateCategory