import CompanyHeaderMobile from '../../components/mobile/CompanyHeaderMobile';
import CompanyPropsMobile from '../../components/mobile/CompanyPropsMobile';
import CompanyInfoMobile from '../../components/mobile/CompanyInfoMobile';
import CompanyDiscount from '../../components/partials/CompanyDiscount';
import CompanyHeader from '../../components/partials/CompanyHeader';
import CompanyProps from '../../components/partials/CompanyProps';
import CompanyEmail from '../../components/partials/CompanyEmail';
import CompanyTaxes from '../../components/partials/CompanyTaxes';
import CompanyMain from '../../components/partials/CompanyMain';
import CompanyData from '../../components/partials/CompanyData';
import { appRoutesPath } from '../../constants';
import { useLocation } from 'react-router-dom';
import CompanyCountries from '../../components/partials/CompanyCountries';

const CompanySettings = () => {
  const location = useLocation()

  return (
    window.innerWidth > 500 ? 
      <>
        <CompanyHeader/>
        {location.pathname.slice(1) === appRoutesPath.COMPANY_SETTINGS ?  <CompanyMain/> 
          : location.pathname.slice(1) === appRoutesPath.COMPANY_SETTINGS_PROPS ? <CompanyProps/>
            : location.pathname.slice(1) === appRoutesPath.COMPANY_SETTINGS_DISCOUNTS ? <CompanyDiscount/> 
              : location.pathname.slice(1) === appRoutesPath.COMPANY_SETTINGS_TAXES ? <CompanyTaxes/> 
                : location.pathname.slice(1) === appRoutesPath.COMPANY_SETTINGS_EMAILS ? <CompanyEmail/> 
                  : location.pathname.slice(1) === appRoutesPath.COMPANY_SETTINGS_DATA ? <CompanyData/> 
                    : location.pathname.slice(1) === appRoutesPath.
                      COUNTRIES ? <CompanyCountries /> : ''}
      </> : 
      <>
        <CompanyHeaderMobile/>
        {location.pathname.slice(1) === appRoutesPath.COMPANY_SETTINGS ? <CompanyInfoMobile/> 
          : location.pathname.slice(1) === appRoutesPath.COMPANY_SETTINGS_PROPS ? <CompanyPropsMobile/> 
            : ''}
      </>
  )
}

export default CompanySettings