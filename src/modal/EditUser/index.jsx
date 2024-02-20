import { useEditUserMutation, useGetSingleUsersQuery } from '../../store/query/usersQuery'
import { setModal } from '../../store/slices/modalSlice'
import { useDispatch } from 'react-redux'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import cls from './editUser.module.scss'
import { GrClose } from 'react-icons/gr'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoClose } from 'react-icons/io5'
import { notification } from 'antd'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { userErrorsData } from '../../constants/errors'
import Loader from '../../components/elements/Loader'

const schema = yup.object().shape({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  phone_number: yup.string().required(),
  new_password: yup.string().min(5).max(16).required(),
  current_password: yup.string().min(5).max(16).required(),
});

const EditUser = () => {
  const [type, setType] = useState({
    currentType: false,
    newType: false,
  })
  const dispatch = useDispatch()

  const { handleSubmit, register, reset, formState: { isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  })

  const [editUserHandler, { isLoading: editLoading }] = useEditUserMutation()

  const [file, setFile] = useState()
  const [image, setImage] = useState()

  const [api, contextHolder] = notification.useNotification();

  const modalCloser = () => {
    dispatch(setModal(false))
  }

  const id = +localStorage.getItem('userId')

  const { data, isLoading } = useGetSingleUsersQuery({ id, token: localStorage.getItem('accessToken') })

  const editUserFunc = async (e) => {
    try {
      const formData = new FormData()

      formData.append('fullname', e.fullname || data.fullname)
      formData.append('email', e.email || data.email)
      formData.append('phone_number', e.phone_number || data.phone_number)
      formData.append('password', e.new_password)
      if(file){
        formData.append('user_avatar', file)
      }
      
      await editUserHandler({ id, data: formData, token: localStorage.getItem('accessToken') })
        .then(res => {
          if(!res.error){
            api.open({
              message: 'Пользователь изменен !',
              duration: 3,
            }); 
            modalCloser()
          }else{
            if(res.error.data.phone_number){
              api.open({
                message: userErrorsData.phone_number,
                duration: 3,
              })
            }
            if(res.error.data.email){
              api.open({
                message: userErrorsData.email,
                duration: 3,
              })
            }
          }
        })
    } catch (e) {
      console.log(e)
    }
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

  useEffect(() => {
    if(data){
      setImage(data?.user_avatar)
      reset({ fullname: data.fullname, email: data.email, phone_number: data.phone_number })
    }
  }, [isLoading])

  return (
    <>
      {contextHolder}
      {isLoading || editLoading ? <Loader/> : <div className={cls['edit']}>
        <div className={cls['edit-head']}>
          <button 
            id={cls[isValid ? 'disabled' : '']}
            className={cls['edit-editBtn']} onClick={handleSubmit(editUserFunc)}>Сохранить</button>
          <button onClick={() => dispatch(setModal(false))} className={cls['edit-closer']}><GrClose/></button>
        </div>
        <div className={cls['edit-body']}>
          <h3 className={cls['edit-title']}>Редактирование профиля</h3>
          <div className={cls['edit-input']}>
            <p>Наименование <span>*</span></p>
            <input type="text" {...register('fullname')}/>
          </div>
          <div className={cls['edit-upload']}>
            <h3>Фотография</h3>
            <div className={cls['edit-upload-wrapper']}>
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
          <div className={cls['edit-input']}>
            <p>Email <span>*</span></p>  
            <input type="email" {...register('email')}/>
          </div>
          <div className={cls['edit-input']}>
            <p>Телефон</p>
            <input type="text" {...register('phone_number')}/>
          </div>
          <div className={cls['edit-line']}>
            <span>новый пароль</span>
          </div>
          <div className={cls['edit-input']}>
            <p>Текущий пароль</p>
            <label>
              <input type={type.currentType ? 'password' : 'text'} {...register('current_password')}  />
              <span 
                onClick={() => setType((prev) => ({...prev, currentType: !type.currentType}))}>
                {type.currentType ? <FaRegEye/> : <FaRegEyeSlash/>}</span>
            </label>
          </div>
          <div className={cls['edit-input']}>
            <p>Новый пароль</p>
            <label>
              <input type={type.newType ? 'password' : 'text'} {...register('new_password')}/>
              <span onClick={() => setType((prev) => ({...prev, newType: !type.newType}))}>{type.newType ? <FaRegEye/> : <FaRegEyeSlash/>}</span>
            </label>
          </div>
        </div>
      </div>}
    </>
  )
}

export default EditUser