import { setModal } from '../../store/slices/modalSlice';
import cls from './editStore.module.scss';
import { useDispatch } from 'react-redux';
import { GoPlus } from 'react-icons/go'
import { Switch, notification } from 'antd';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useChangeStoreMutation } from '../../store/query/storesQuery';
import { useState } from 'react';
import { useGetTaxesQuery } from '../../store/query/settingsQuery';
import Loader from '../../components/elements/Loader';

const schema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string(),
  description: yup.string(),
});

const EditStore = () => {
  const dispatch = useDispatch()
  const { data: taxesData } = useGetTaxesQuery({token: localStorage.getItem('accessToken')})

  const [taxes, setTaxes] = useState({
    taxesValue: 'Налоги',
    taxesObject: {},
    isTaxes: false,
  })

  const modalCloser = () => {
    dispatch(setModal())
  }

  const id = +localStorage.getItem('storeId')

  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const [changeStore, { isLoading }] = useChangeStoreMutation()
  const [api, contextHolder] = notification.useNotification();

  const createStoreHandler = async (e) => {

    const base = {
      ...e,
      taxes: Number(taxes?.taxesObject?.id),
    }

    try {
      await changeStore({ id, data: base, token: localStorage.getItem('accessToken') })
      modalCloser()
      reset()
      api.open({
        message: 'Магазин изменен !',
        duration: 3,
      });
    } catch (e) {
      console.log(e)
    }
  } 

  const handleTaxes = (val) => {
    setTaxes((prev) => ({...prev, taxesObject: val , taxesValue: val?.taxes, isTaxes: !taxes.isTaxes}))
  }

  return (
    isLoading ? <Loader/> :
      <>
        {contextHolder}
        <div className={cls['store']}>
          <div className={cls['store-head']}>
            <button   
              type='submit' 
              className={cls[isValid ? 'active_btn' : '']} 
              onClick={handleSubmit(createStoreHandler)}
            >Сохранить</button>
            <button onClick={modalCloser}><GoPlus/></button>
          </div>

          <div className={cls['store-body']}>
            <h3 className={cls['store-title']}>Редактирование магазина</h3>

            <form>
              <div className={cls['store-full-input']}>
                <h3>Наименование <span>*</span></h3>
                <input type="text" {...register('name')} />
              </div>
              <div className={cls['store-half-input']}>
                <h3>Налоги</h3>
                <div>
                  <span onClick={() => setTaxes((prev) => ({...prev, isTaxes: !taxes.isTaxes}))}>{taxes.taxesValue}</span>
                  {taxes.isTaxes &&  <ul className={cls['drop']}>
                    {
                      taxesData?.results?.map((item, i) => 
                        <p key={i} onClick={() => handleTaxes(item)}>{item.taxes}</p>)
                    }
                  </ul>}
                </div>
              </div>
              <div className={cls['store-textarea']}>
                <h3>Адрес</h3>
                <textarea {...register('address')}></textarea>
              </div>
              <div className={cls['store-textarea']}>
                <h3>Описание</h3>
                <textarea {...register('description')}></textarea>
              </div>
              <div className={cls['store-toggle']}>
                <label>
                  <Switch />
                  <span>По умолчанию</span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </>
  )
}

export default EditStore