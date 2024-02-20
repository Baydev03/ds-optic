import { useCreateRoleMutation, useCreateUserMutation } from '../../store/query/usersQuery'
import { setModal, setModalType } from '../../store/slices/modalSlice'
import cls from './createAdmin.module.scss'
import { useDispatch } from 'react-redux'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

import { yupResolver } from '@hookform/resolvers/yup';
import { modalTypes } from '../../constants'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useConnectUserToStoreMutation, useGetStoresQuery } from '../../store/query/storesQuery'
import { IoClose } from 'react-icons/io5'
import Loader from '../../components/elements/Loader'
import { notification } from 'antd'
import { userErrorsData } from '../../constants/errors'

const schema = yup.object().shape({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  phone_number: yup.string().required(),
  password: yup.string().min(5).max(16).required(),
});

const CreateAdmin = () => {
  const [type, setType] = useState(true)
  const [file, setFile] = useState()
  const [image, setImage] = useState()
 
  const [store, setStore] = useState({
    storeValue: 'Магазины',
    storeObject: {},
    isStore: false,
  })
  const [permissions, setPermission] = useState({
    isPermission: false,
    allowCreateProduct: true,
    allowEditProduct: true,
    allowDeleteProduct: true,
    allowShowRest: true,
    allowShowSelfPrice: true,
    allowShowPerchasePrice: true,
    allowUploadProductList: true,
    allowPrintingPriceTags: true,
    allowSellingLoss: true,
    allowCheckProduct: true,
  })
  const dispatch = useDispatch()

  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const [createRole, { isLoading: createRoleLoading }] = useCreateRoleMutation()
  const [createUser, { isLoading: createUserLoading }] = useCreateUserMutation()

  const { data } = useGetStoresQuery({token: localStorage.getItem('accessToken')})
  const [connectUserToBranchhandler, { isLoading: connectUserLoading }] = useConnectUserToStoreMutation()
  const [api, contextHolder] = notification.useNotification();

  const createAdminHandler = async (e) => {
    // eslint-disable-next-line no-unused-vars
    const { isPermission, ...newArr } = permissions;

    try {
      const response = await createRole({
        token:  localStorage.getItem('accessToken'),
        data: {
          name: 'admin',
          permissions: newArr,
        },
      })

      const formData = new FormData()

      formData.append('role', response?.data?.id)
      formData.append('fullname', e.fullname)
      formData.append('email', e.email)
      formData.append('phone_number', e.phone_number)
      formData.append('password', e.password)
      if(file){
        formData.append('user_avatar', file)
      }

      await createUser({
        token: localStorage.getItem('accessToken'),
        data: formData,
      }).then(async (res) => {
        if(!res.error) {
          await connectUserToBranchhandler({ data: {
            user_id: res.data?.id,
            branch_ids: [store?.storeObject?.id],
          }, token: localStorage.getItem('accessToken')})

          dispatch(setModal())
          reset()
          api.open({
            message: 'Пользователь создан !',
            duration: 3,
          });
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
    } catch (error) {
      console.log(error.response)
    }
  }

  const typeChanger = (key) => {
    setPermission((prev) => ({...prev, [key]: !permissions[key]}))
  }

  const handleStore = (val) => {
    setStore((prev) => ({...prev, storeValue: val?.name, storeObject: val , isStore: !store.isStore}))
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
    connectUserLoading || createRoleLoading || createUserLoading ? <Loader/> : 
      <>
        {contextHolder}
        <div className={cls['workers']}>
          <div className={cls['workers-head']}>
            <button 
              id={cls[isValid ? 'disabled' : '']}
              onClick={handleSubmit(createAdminHandler)} 
              className={cls['workers-saver']}>Сохранить</button>
            <button 
              onClick={() => dispatch(setModal(false))} 
              className={cls['workers-closer']}
            ><GrClose/></button>
          </div>
          <div className={cls['workers-wrapper']}>
            <div className={cls['workers-body']}>
              <h3 className={cls['workers-title']}>Создание сотрудника</h3>
              <div className={cls['workers-nav']}>
                <p>Роль <span>*</span></p>
                
                <div>
                  <button
                    onClick={() => dispatch(setModalType(modalTypes.CREATE_ADMIN_TYPE))} 
                    className={cls['active_btn']}>Управляющий</button>
                  <button
                    onClick={() => dispatch(setModalType(modalTypes.CREATE_CASHIER_TYPE))} 
                  >Кассир</button>
                  <button
                    onClick={() => dispatch(setModalType(modalTypes.CREATE_STOREKEEPER_TYPE))} 
                  >Кладовщик</button>
                </div>
              </div>
              <div className={cls['admin']}>
                <div id={cls[permissions.isPermission ? 'active_permission' : '']} className={cls['permission']}>
                  <div
                    onClick={() => setPermission((prev) => ({...prev, isPermission: !permissions.isPermission}))} 
                    className={cls['permission-changer']}>
                    <span>Изменить права доступа пользователя</span>
                  </div>
                  {permissions.isPermission &&  (
                    <>
                      <div className={cls['permission-work-products']}>
                        <h3>Работа с товаром</h3>
                        <button onClick={() => typeChanger('allowCreateProduct')}>
                          <span 
                            id={cls[permissions.allowCreateProduct ? 'active_check' : '']}><AiOutlineCheck/></span>
                          <p>Разрешить создавать товар <span>?</span></p> 
                        </button>
                        <button onClick={() => typeChanger('allowEditProduct')}>
                          <span 
                            id={cls[permissions.allowEditProduct ? 'active_check' : '']}><AiOutlineCheck/></span>
                          <p>Разрешить редактировать товар <span>?</span></p>
                        </button>
                        <button onClick={() => typeChanger('allowDeleteProduct')}>
                          <span 
                            id={cls[permissions.allowDeleteProduct ? 'active_check' : '']}><AiOutlineCheck/></span>
                          <p>Разрешить удалять товар <span>?</span></p>
                        </button>
                        <button onClick={() => typeChanger('allowShowRest')}>
                          <span 
                            id={cls[permissions.allowShowRest ? 'active_check' : '']}><AiOutlineCheck/></span>
                          <p>Показывать остатки <span>?</span></p>
                        </button>
                        <button onClick={() => typeChanger('allowShowSelfPrice')}>
                          <span 
                            id={cls[permissions.allowShowSelfPrice ? 'active_check' : '']}><AiOutlineCheck/></span>
                          <p>Показывать себестоимость <span>?</span></p>
                        </button>
                        <button onClick={() => typeChanger('allowShowPerchasePrice')}>
                          <span 
                            id={cls[permissions.allowShowPerchasePrice ? 'active_check' : '']}><AiOutlineCheck/></span>
                          <p>Показывать цену закупки <span>?</span></p>
                        </button>
                        <button onClick={() => typeChanger('allowUploadProductList')}>
                          <span 
                            id={cls[permissions.allowUploadProductList ? 'active_check' : '']}><AiOutlineCheck/></span>
                          <p>Разрешить выгружать список товара <span>?</span></p>
                        </button>
                        <button onClick={() => typeChanger('allowPrintingPriceTags')}>
                          <span 
                            id={cls[permissions.allowPrintingPriceTags ? 'active_check' : '']}><AiOutlineCheck/></span>
                          <p>Разрешить печать ценников <span>?</span></p>
                        </button>
                      </div>  
                      <div className={cls['permission-work-products']}>
                        <h3>Продажа товара</h3>
                        <button onClick={() => typeChanger('allowSellingLoss')}>
                          <span 
                            id={cls[permissions.allowSellingLoss ? 'active_check' : '']}><AiOutlineCheck/></span>
                          <p>Разрешить продажу в минус <span>?</span></p>
                        </button>
                      </div>
                      <div className={cls['permission-work-documents']}>
                        <h3>Работа с документами</h3>

                        <div className={cls['permission-child']}>
                          <button onClick={() => typeChanger('allowCheckProduct')}>
                            <span 
                              id={cls[permissions.allowCheckProduct ? 'active_check' : '']}><AiOutlineCheck/></span>
                            <p>Разрешить просматривать документы <span>?</span></p>
                          </button>
                          <div className={cls['permission-list']}>
                            <label>
                              Закупка
                              <span><IoMdClose/></span>
                            </label>
                            <label>
                              Возврат закупки
                              <span><IoMdClose/></span>
                            </label>
                            <label>
                              Складские документы 
                              <span><IoMdClose/></span>
                            </label>
                            <label>
                              Платёжные ордера
                              <span><IoMdClose/></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className={cls['admin-input']}>
                  <p>Имя и фамилия сотрудника <span>*</span></p>
                  <input {...register('fullname')} type="email" />
                </div>
                <div className={cls['admin-upload']}>
                  <h3>Фотография</h3>
                  <div className={cls['admin-upload-wrapper']}>
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
                <div className={cls['stores']}>
                  <p>Магазины <button>?</button></p>
                  <div>
                    <span onClick={() => setStore((prev) => ({...prev, isStore: !store.isStore}))}>{store.storeValue}</span>
                    {store.isStore &&  <ul className={cls['drop']}>
                      {
                        data?.results?.map((item, i) => 
                          <p key={i} onClick={() => handleStore(item)}>{item.name}</p>)
                      }
                    </ul>}
                  </div>
                </div>
                <div className={cls['admin-input']}>
                  <p>Email <span>*</span></p>
                  <input {...register('email')} type="email" />
                </div>
                <div className={cls['admin-input']}>
                  <p>Телефон сотрудника</p>
                  <input {...register('phone_number')} placeholder='+996500500500' type="text" />
                </div>
                <div className={cls['admin-input']}>
                  <p>Пароль сотрудника <span>*</span></p>
                  <label>
                    <input {...register('password')} type={type ? 'password' : 'text'}/>
                    <span onClick={() => setType((prev) => !prev)}>{type ? <FaRegEye/> : <FaRegEyeSlash/>}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default CreateAdmin