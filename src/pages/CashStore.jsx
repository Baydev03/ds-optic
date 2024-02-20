import ServiceListMobile from '../components/mobile/ServiceListMobile';
import CashHeadMobile from '../components/mobile/CashHeadMobile';
import CashListMobile from '../components/mobile/CashListMobile';
import CashHeader from '../components/partials/CashHeader';
import CashList from '../components/lists/CashList';
import { appRoutesPath } from '../constants';
import { useLocation } from 'react-router-dom';

const CashStore = () => {
  const location = useLocation()

  return (
    window.innerWidth > 500 ? 
      <>
        <CashHeader/>
        <CashList/>
      </> : 
      <>
        <CashHeadMobile/>
        {location.pathname.slice(1) === appRoutesPath.CASH_STORE ? <CashListMobile/> 
          : location.pathname.slice(1) === appRoutesPath.SERVICES ? <ServiceListMobile/>
            : ''}
      </>
  )
}

export default CashStore