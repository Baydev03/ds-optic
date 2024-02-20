import { Route, Routes } from 'react-router-dom';
import Authorization from '../pages/auth/Login';
import { appRoutes } from '../constants/routes';
import { appRoutesPath } from '../constants';
import { useSelector } from 'react-redux';
import AppLayout from './AppLayout';

const PrivateRoutes = () => {
  const { isAuth, status } = useSelector(state => state.user)

  return (
    isAuth ? 
      <Routes>
        <Route path={appRoutesPath.MAIN} element={<AppLayout/>}>
          {appRoutes?.map(item => item[status]?.map(route => <Route key={route.id} {...route}/>))}
        </Route>
      </Routes> 
      : 
      <Routes>
        <Route index path={appRoutesPath.MAIN} element={<Authorization/>} />
        <Route index path={appRoutesPath.REDIRECT} element={<Authorization/>} />
      </Routes>
  )
}

export default PrivateRoutes