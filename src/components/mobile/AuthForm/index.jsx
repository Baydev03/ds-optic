import { setAuth, setUserStatus } from '../../../store/slices/userSlice';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { userStatus } from '../../../constants';
import { axiosInstance } from '../../../axios';
import logo from '../../../assets/logo.svg'
import { useDispatch } from 'react-redux';
import cls from './auth.module.scss';
import { useState } from 'react';

const AuthFormMobile = () => {
  const [password, setPassword] = useState('')
  const [seer, setSeer] = useState(false)
  const [email, setEmail] = useState('')

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

  const dispatch = useDispatch()
  
  const formHandler = async (e) => {
    e.preventDefault()

    try {
      const response = await axiosInstance.post('accounts/token/', {password, email})

      if(response){
        const { refresh, access } = response.data;
  
        localStorage.setItem('refreshToken', refresh);
        localStorage.setItem('accessToken', access);

        await getUserInfo(access)
        dispatch(setAuth(true))
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className={cls['auth']}>
      <img src={logo} alt="logo-icon" />
      <div className={cls['auth-body']}>
        <h5>Вход</h5>
        <form onSubmit={formHandler} className={cls['auth-form']}>
          <label>
            <input className={cls[email ? 'valid' : '']} value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            <span>E-mail</span>
          </label>
          <label>
            <input 
              className={cls[password ? 'valid' : '']}
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              type={seer ? 'text' : 'password'} 
            />
            <span>Пароль</span>
            <button onClick={() => setSeer(prev => !prev)}>{seer ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}</button>
          </label>
          <button type='submit'>ВОЙТИ</button>
          <p className={cls['auth-forget']}>Забыли пароль?  </p>
        </form>
      </div>
    </div>
  )
}

export default AuthFormMobile