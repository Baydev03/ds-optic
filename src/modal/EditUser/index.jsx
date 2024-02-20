import { setModal } from '../../store/slices/modalSlice'
import { useDispatch } from 'react-redux'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import cls from './editUser.module.scss'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useEditUserMutation } from '../../store/query/usersQuery'
import { IoClose } from 'react-icons/io5'
import { notification } from 'antd'

const EditUser = () => {
  const [type, setType] = useState({
    currentType: false,
    newType: false,
  })
  const dispatch = useDispatch()

  const { handleSubmit, register } = useForm({
    mode: 'onSubmit',
  })

  const [editUserHandler] = useEditUserMutation()

  const [file, setFile] = useState()
  const [image, setImage] = useState()

  const [api, contextHolder] = notification.useNotification();

  const modalCloser = () => {
    dispatch(setModal(false))
  }

  const id = +localStorage.getItem('userId')

  const editUserFunc = async (e) => {
    try {
      const formData = new FormData()

      formData.append('fullname', e.fullname)
      formData.append('email', e.email)
      formData.append('phone_number', e.phone_number)
      formData.append('password', e.password)
      formData.append('user_avatar', file)
      
      await editUserHandler({ id, data: formData, token: localStorage.getItem('accessToken') })
      api.open({
        message: 'Пользователь изменен !',
        duration: 3,
      }); 
      modalCloser()
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

  return (
    <>
      {contextHolder}
      <div className={cls['edit']}>
        <div className={cls['edit-head']}>
          <button 
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
              <input type={type.currentType ? 'password' : 'text'}  />
              <span 
                onClick={() => setType((prev) => ({...prev, currentType: !type.currentType}))}>
                {type.currentType ? <FaRegEye/> : <FaRegEyeSlash/>}</span>
            </label>
          </div>
          <div className={cls['edit-input']}>
            <p>Новый пароль</p>
            <label>
              <input type={type.newType ? 'password' : 'text'}  {...register('password')}/>
              <span onClick={() => setType((prev) => ({...prev, newType: !type.newType}))}>{type.newType ? <FaRegEye/> : <FaRegEyeSlash/>}</span>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUser