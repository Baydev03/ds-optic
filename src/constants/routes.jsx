import ProductsMobile from '../components/mobile/ProductsMobile';
import CompanySettings from '../pages/company/CompanySettings';
import CompanyWorkers from '../pages/company/CompanyWorkers';
import CompanyStores from '../pages/company/CompanyStores';
import SingleCash from '../components/mobile/SingleCash';
import ImportProduct from '../pages/ImportProduct';
import SingleProduct from '../pages/SingleProduct';
import { appRoutesPath, userStatus } from '.';
import CashStore from '../pages/CashStore';
import Services from '../pages/Services';
import Products from '../pages/Products';
import NotFound from '../pages/NotFound';
import Main from '../pages/Main';
import Stores from '../pages/Stores';
import CompanyCountries from '../components/partials/CompanyCountries';
import GroupList from '../components/lists/GroupList';

export const appRoutes = [
  {
    [userStatus.OWNER]: [
      {
        id: 1,
        index: true,
        element: <Main/>,
      },
      {
        id: 2,
        element: window.innerWidth > 500 ? <Products/> : <ProductsMobile/>,
        path: appRoutesPath.PRODUCTS,
      },
      {
        id: 3,
        element: window.innerWidth > 500 ? <Services/> : <CashStore/>,
        path: appRoutesPath.SERVICES,
      },
      {
        id: 4,
        element: <CashStore/>,
        path: appRoutesPath.CASH_STORE,
      },
      {
        id: 5,
        element: <CompanySettings/>,
        path: appRoutesPath.COMPANY_SETTINGS,
      },
      {
        id: 5,
        element: <CompanySettings/>,
        path: appRoutesPath.COMPANY_SETTINGS_PROPS,
      },
      {
        id: 6,
        element: <CompanyWorkers/>,
        path: appRoutesPath.COMPANY_WORKERS,
      },
      {
        id: 7,
        element: <CompanyStores/>,
        path: appRoutesPath.COMPANY_STORES,
      },
      {
        id: 8,
        element: <ImportProduct/>,
        path: appRoutesPath.PRODUCTS_IMPORT,
      },
      {
        id: 9,
        element: <CompanySettings/>,
        path: appRoutesPath.COMPANY_SETTINGS_DISCOUNTS,
      },
      {
        id: 10,
        element: <CompanySettings/>,
        path: appRoutesPath.COMPANY_SETTINGS_TAXES,
      },
      {
        id: 11,
        element: <CompanySettings/>,
        path: appRoutesPath.COMPANY_SETTINGS_EMAILS,
      },
      {
        id: 12,
        element: <CompanySettings/>,
        path: appRoutesPath.COMPANY_SETTINGS_DATA,
      },
      {
        id: 511,
        element: <NotFound/>,
        path: appRoutesPath.REDIRECT,
      },
      {
        id: 13,
        element: <SingleCash/>,
        path: appRoutesPath.SINGLE_CASH_STORE,
      },
      {
        id: 14,
        element: <SingleProduct/>,
        path: appRoutesPath.SINGLE_PRODUCT,
      },
      {
        id:15,
        element: <Stores />,
        path: appRoutesPath.MAGAZINE,
      },
      {
        id:16,
        element: <CompanySettings />,
        path: appRoutesPath.COUNTRIES,
      },
      {
        id:17,
        element: <GroupList />,
        path: appRoutesPath.GROUPS,
      },
    ],
  },
  {
    [userStatus.ADMIN]: [
      {
        id: 1,
        index: true,
        element: <Main/>,
      },
      {
        id: 2,
        element: window.innerWidth > 500 ? <Products/> : <ProductsMobile/>,
        path: appRoutesPath.PRODUCTS,
      },
      {
        id: 3,
        element: window.innerWidth > 500 ? <Services/> : <CashStore/>,
        path: appRoutesPath.SERVICES,
      },
      {
        id: 4,
        element: <CashStore/>,
        path: appRoutesPath.CASH_STORE,
      },
      {
        id: 5,
        element: <CompanySettings/>,
        path: appRoutesPath.COMPANY_SETTINGS,
      },
      {
        id: 5,
        element: <CompanySettings/>,
        path: appRoutesPath.COMPANY_SETTINGS_PROPS,
      },
      {
        id: 6,
        element: <CompanyWorkers/>,
        path: appRoutesPath.COMPANY_WORKERS,
      },
      {
        id: 7,
        element: <CompanyStores/>,
        path: appRoutesPath.COMPANY_STORES,
      },
      {
        id: 8,
        element: <ImportProduct/>,
        path: appRoutesPath.PRODUCTS_IMPORT,
      },
      {
        id: 9,
        element: <CompanySettings/>,
        path: appRoutesPath.COMPANY_SETTINGS_DISCOUNTS,
      },
      {
        id: 10,
        element: <CompanySettings/>,
        path: appRoutesPath.COMPANY_SETTINGS_TAXES,
      },
      {
        id: 11,
        element: <CompanySettings/>,
        path: appRoutesPath.COMPANY_SETTINGS_EMAILS,
      },
      {
        id: 12,
        element: <CompanySettings/>,
        path: appRoutesPath.COMPANY_SETTINGS_DATA,
      },
      {
        id: 13,
        element: <SingleCash/>,
        path: appRoutesPath.SINGLE_CASH_STORE,
      },
      {
        id: 14,
        element: <SingleProduct/>,
        path: appRoutesPath.SINGLE_PRODUCT,
      },
      {
        id: 511,
        element: <NotFound/>,
        path: appRoutesPath.REDIRECT,
      },
    ],
  },
  {
    [userStatus.CASHIER]: [
      {
        id: 1,
        index: true,
        element: <Main/>,
      },
      {
        id: 2,
        element: window.innerWidth > 500 ? <Products/> : <ProductsMobile/>,
        path: appRoutesPath.PRODUCTS,
      },
      {
        id: 3,
        element: window.innerWidth > 500 ? <Services/> : <CashStore/>,
        path: appRoutesPath.SERVICES,
      },
      {
        id: 4,
        element: <CashStore/>,
        path: appRoutesPath.CASH_STORE,
      },
      // {
      //   id: 5,
      //   element: <CompanySettings/>,
      //   path: appRoutesPath.COMPANY_SETTINGS,
      // },
      // {
      //   id: 5,
      //   element: <CompanySettings/>,
      //   path: appRoutesPath.COMPANY_SETTINGS_PROPS,
      // },
      // {
      //   id: 6,
      //   element: <CompanyWorkers/>,
      //   path: appRoutesPath.COMPANY_WORKERS,
      // },
      // {
      //   id: 7,
      //   element: <CompanyStores/>,
      //   path: appRoutesPath.COMPANY_STORES,
      // },
      {
        id: 8,
        element: <ImportProduct/>,
        path: appRoutesPath.PRODUCTS_IMPORT,
      },
      // {
      //   id: 9,
      //   element: <CompanySettings/>,
      //   path: appRoutesPath.COMPANY_SETTINGS_DISCOUNTS,
      // },
      // {
      //   id: 10,
      //   element: <CompanySettings/>,
      //   path: appRoutesPath.COMPANY_SETTINGS_TAXES,
      // },
      // {
      //   id: 11,
      //   element: <CompanySettings/>,
      //   path: appRoutesPath.COMPANY_SETTINGS_EMAILS,
      // },
      // {
      //   id: 12,
      //   element: <CompanySettings/>,
      //   path: appRoutesPath.COMPANY_SETTINGS_DATA,
      // },
      {
        id: 511,
        element: <NotFound/>,
        path: appRoutesPath.REDIRECT,
      },
      {
        id: 13,
        element: <SingleCash/>,
        path: appRoutesPath.SINGLE_CASH_STORE,
      },
      {
        id: 14,
        element: <SingleProduct/>,
        path: appRoutesPath.SINGLE_PRODUCT,
      },
    ],
  },
  {
    [userStatus.STORE_KEEPER]: [
      {
        id: 1,
        index: true,
        element: <Main/>,
      },
      {
        id: 2,
        element: <Products/>,
        path: appRoutesPath.PRODUCTS,
      },
      {
        id: 3,
        element: <ImportProduct/>,
        path: appRoutesPath.PRODUCTS_IMPORT,
      },
      {
        id: 511,
        element: <NotFound/>,
        path: appRoutesPath.REDIRECT,
      },
    ],
  },
]