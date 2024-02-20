import { setModal } from '../../store/slices/modalSlice';
import cls from './createStore.module.scss';
import { useDispatch } from 'react-redux';
import { GoPlus } from 'react-icons/go'
import { IoClose } from "react-icons/io5";
import { Switch, notification } from 'antd';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCreateStoreMutation } from '../../store/query/storesQuery';
import  { useState } from 'react';
import { useGetTaxesQuery } from '../../store/query/settingsQuery';
import Loader from '../../components/elements/Loader';

const schema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  description: yup.string().required(),
});

const CreateStore = () => {
  const [file, setFile] = useState()
  const [image, setImage] = useState()

  const dispatch = useDispatch()
  const [taxes, setTaxes] = useState({
    taxesValue: 'Налоги',
    taxObject: {},
    isTaxes: false,
  })
  const { data: taxesData } = useGetTaxesQuery({ token: localStorage.getItem('accessToken') })

  const modalCloser = () => {
    dispatch(setModal(false))
  }

  const {
    handleSubmit,
    formState: { isValid },
    register,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const [createStore, { isLoading }] = useCreateStoreMutation()
  const [api, contextHolder] = notification.useNotification();

  const createStoreHandler = async (e) => {
    try {
      const formData = new FormData()

      formData.append('name', e.name)
      formData.append('taxes', +taxes.taxObject?.id)
      formData.append('address', e.address)
      formData.append('description', e.description)
      formData.append('image', file)

      await createStore({
        token: localStorage.getItem('accessToken'),
        data: formData,
      })

      modalCloser()
      reset()
      setTaxes('')
      setImage('')
      setFile('')
      api.open({
        message: 'Магазин создан !',
        duration: 3,
      });
    } catch (error) {
      console.log(error);
    }
  } 

  const handleTaxes = (val) => {
    setTaxes((prev) => ({...prev, taxesValue: val?.taxes, taxObject: val, isTaxes: !taxes.isTaxes}))
  }

  const handleImageChange = (e) => {
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setImage(reader.result);
    };
    
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    setFile(e.target.files[0])
  };

  const deleteImagePreviewHandler = () => {
    setImage(null)
    setFile(null)
  }

  return (
    isLoading ? <Loader/> :
      <>
        {contextHolder}
        <div className={cls['store']}>
          <div className={cls['store-head']}>
            <button   
              className={cls[isValid && taxes.taxesValue ? 'active_btn' : '']} 
              onClick={handleSubmit(createStoreHandler)}
            >Сохранить</button>
            <button onClick={modalCloser}><GoPlus/></button>
          </div>

          <div className={cls['store-body']}>
            <h3 className={cls['store-title']}>Создание магазина</h3>

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
              <div className={cls['store-body-upload']}>
                <h3>Фотография</h3>
                <div className={cls['store-body-upload-wrapper']}>
                  {image && <div className={cls['image-preview']}>
                    <button onClick={deleteImagePreviewHandler}><IoClose/></button> <img src={image} alt='Preview'/></div>}
                  <label id={cls[image ? 'input-resize' : '']} className={cls['input-file']}>
                    <input
                      accept="image/png, image/jpeg"
                      onChange={handleImageChange}
                      type="file"
                      name="file"
                    />
                    <span className={cls['input-file-btn']}>
                      <p>Выберите фото для загрузки</p>
                      или перетащите его мышью
                    </span>
                  </label>
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

export default CreateStore