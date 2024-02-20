import ServiceFilter from './mobile-modal/ServiceFilter';
import ProductCreate from './mobile-modal/ProductCreate';
import CreateService from './mobile-modal/CreateService';
import { Outlet, useLocation } from 'react-router-dom';
import CreateComplex from './mobile-modal/CreateComplex';
import MainScroller from './mobile-modal/MainScroller';
import GroupCreate from './mobile-modal/GroupCreate';
import CashCreate from './mobile-modal/CashCreate';
import SidebarMobile from './mobile/SidebarMobile';
import HeaderMobile from './mobile/HeaderMobile';
import { appRoutesPath } from '../constants';
import { useSelector } from 'react-redux';
import Sidebar from './shared/Sidebar';
import Header from './shared/Header';
import Adder from './mobile/Adder';
import Modal from '../modal';

const AppLayout = () => {
  const { isAdder } = useSelector(state => state.modal)
  const location = useLocation()

  return (
    window.innerWidth > 500 ? 
      <>
        <Header/>
        <div className='app-layout'>
          <Sidebar/>
          <div className='app-layout__wrapper'>
            <Outlet/>
          </div>
        </div>
        <Modal/>
      </> : 
      <>
        {location.pathname.slice(1) !== appRoutesPath.SINGLE_PRODUCT && <HeaderMobile/>}
        <Outlet/>
        <SidebarMobile/>
        <ServiceFilter/>
        <CashCreate/>
        <MainScroller/>
        <GroupCreate/>
        <ProductCreate/>
        <CreateService/>
        <CreateComplex/>
        {
          isAdder && 
          location.pathname.slice(1) !== appRoutesPath.SERVICES && 
          location.pathname.slice(1) !== appRoutesPath.SINGLE_CASH_STORE && 
          location.pathname.slice(1) !== appRoutesPath.SINGLE_PRODUCT && 
          location.pathname.slice(1) !== appRoutesPath.COMPANY_SETTINGS && 
          location.pathname.slice(1) !== appRoutesPath.COMPANY_SETTINGS_PROPS && 
          <Adder/>
        }
      </>
  )
}

export default AppLayout