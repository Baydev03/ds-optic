import { appRoutesPath } from '../constants';

const data = {
  [appRoutesPath.MAIN]: {
    text: 'Главная',
  },
  [appRoutesPath.PRODUCTS]: {
    text: 'Товары и услуги / справочник',
  },
  [appRoutesPath.PRODUCTS_IMPORT]: {
    text: 'Товары и услуги / импорт товаров',
  },
  [appRoutesPath.SERVICES]: {
    text: 'Кассовый раздел / смены',
  },
  [appRoutesPath.CASH_STORE]: {
    text: 'Кассовый раздел / кассы',
  },
  [appRoutesPath.COMPANY_SETTINGS]: {
    text: 'Настройки / настрой компании',
  },
  [appRoutesPath.COMPANY_SETTINGS_PROPS]: {
    text: 'Настройки / реквизиты',
  },
  [appRoutesPath.COMPANY_SETTINGS_DISCOUNTS]: {
    text: 'Настройки / скидки',
  },
  [appRoutesPath.COMPANY_WORKERS]: {
    text: 'Компания / сотрудники',
  },
  [appRoutesPath.COMPANY_STORES]: {
    text: 'Компания / магазины',
  },
  [appRoutesPath.COMPANY_SETTINGS_TAXES]: {
    text: 'Настройки / налоги',
  },
  [appRoutesPath.COMPANY_SETTINGS_EMAILS]: {
    text: 'Настройки / email-отчет',
  },
  [appRoutesPath.COMPANY_SETTINGS_DATA]: {
    text: 'Настройки / данные',
  },
  [appRoutesPath.MAGAZINE] : {
    text: 'Магазины',
  },
  [appRoutesPath.COUNTRIES] : {
    text: 'Настройки / страны',
  },
  [appRoutesPath.GROUPS] : {
    text: 'Компания / добавить группу',
  },
}

const mobileData = {
  [appRoutesPath.MAIN]: {
    text: 'Главная',
  },
  [appRoutesPath.PRODUCTS]: {
    text: 'Товары и услуги',
  },
  // [appRoutesPath.PRODUCTS_IMPORT]: {
  //   text: 'Товары и услуги / импорт товаров',
  // },
  [appRoutesPath.SERVICES]: {
    text: 'Кассы и смены',
  },
  [appRoutesPath.CASH_STORE]: {
    text: 'Кассы и смены',
  },
  [appRoutesPath.COMPANY_SETTINGS]: {
    text: 'О компании',
  },
  [appRoutesPath.COMPANY_SETTINGS_PROPS]: {
    text: 'О компании',
  },
  [appRoutesPath.SINGLE_CASH_STORE]: {
    text: '#1',
  },
}

export const routeTitleHandler = (path) => data[path]?.text
export const routeMobileTitleHandler = (path) => mobileData[path]?.text