import { setAuth, setUserStatus } from '../../../store/slices/userSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { userStatus } from '../../../constants';
import { axiosInstance } from '../../../axios';
import logo from '../../../assets/logo.svg'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import cls from './auth.module.scss';
import { useState } from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).max(16).required(),
});

const AuthForm = () => {
  const [state, setState] = useState({
    isTemplate: false,
    isBorder: false,
  })

  const dispatch = useDispatch()

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  let formTemplate = '';
  let authHeaderTemplate = '';

  if(state.isTemplate){
    formTemplate = (
      <label id={cls[state.isBorder ? 'active' : '']} className={cls['auth-wrapper-form__passwordField']}>
        <span></span>
        <input 
          onFocus={() => setState((prev) => ({...prev, isBorder: true}))} 
          onBlur={() => setState((prev) => ({...prev, isBorder: false}))}
          type="password" placeholder='Пароль' 
        />
      </label>
    )
    authHeaderTemplate = (
      <div className={cls['auth-wrapper-profile']}>
        <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-
        growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="user-image" />
        <h4>Almaz Eshimbekov</h4>
        <span>сменить пользователя</span>
      </div>
    )
  }else{
    formTemplate = (
      <>
        <input 
          className={cls['auth-wrapper-form__input']} 
          type='text' 
          placeholder='Введите логин' 
          {...register('email')}
        />
        {errors?.email && <p className={cls['auth-wrapper-form__rule']}>{errors?.email?.message}</p>}
        <input 
          className={cls['auth-wrapper-form__input']} 
          type='password' 
          placeholder='Введите пароль' 
          {...register('password')}
        />
        {errors?.password && <p className={cls['auth-wrapper-form__rule']}>{errors?.password?.message}</p>}
      </>
    )
    authHeaderTemplate = (
      <div className={cls['auth-wrapper-header']}>
        <h4>Авторизация</h4>
      </div>
    )
  } 

  const getUserInfo = async (access) => {
    const response = await axiosInstance.get('accounts/users/get_userinfo/' , {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })

    const roleResponse = await axiosInstance.get(`accounts/roles/${response?.data?.role?.id}/` , {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })

    dispatch(setUserStatus(
      roleResponse?.data?.name === 'super admin' ? userStatus.OWNER : 
        roleResponse?.data?.name === 'admin' ? userStatus.ADMIN : 
          roleResponse?.data?.name === 'casher' ? userStatus.CASHIER :  
            roleResponse?.data?.name === 'storekeeper' ? userStatus.STORE_KEEPER : '',
    ))
  }

  const authHandler = async (res) => {
    try {
      const response = await axiosInstance.post('accounts/token/', {...res})

      if(response){
        const { refresh, access } = response.data;
  
        localStorage.setItem('refreshToken', refresh);
        localStorage.setItem('accessToken', access);

        await getUserInfo(access)
        dispatch(setAuth(true))
        reset()
      }
    } catch (error) {
      if (error.response.data?.detail) {
        setError('password', {
          type: 'validate',
          message: error.response.data?.detail,
        });
      }
    }
  }

  return (
    <div className={cls['auth']}>
      <div className={cls['auth-logo']}>
        <img src={logo} alt="app-logo" />
      </div>
      <div className={cls['auth-wrapper']}>
        {authHeaderTemplate}
        <div className={cls['auth-wrapper-form']}>
          <form onSubmit={handleSubmit(authHandler)}>
            {formTemplate}
            <span className={cls['auth-wrapper-form__forgot']}><h4>Забыли пароль?</h4></span>
            <button type='submit'>войти</button>
          </form>
        </div>
        <div className={cls['auth-wrapper-footer']}>
          <span>Войти по QR-коду</span>
        </div>
      </div>
    </div>
  )
}

export default AuthForm