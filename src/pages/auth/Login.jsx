import AuthFormMobile from '../../components/mobile/AuthForm';
import AuthForm from '../../components/partials/AuthForm';

const Authorization = () => {
  return (
    window.innerWidth > 600 ? <AuthForm/> : <AuthFormMobile/>
  )
}

export default Authorization