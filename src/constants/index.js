export const userStatus = {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  CASHIER: 'CASHIER',
  STORE_KEEPER: 'STORE_KEEPER',
}

export const appRoutesPath = {
  GROUPS: 'company-groups',
  COUNTRIES: 'company-settings-country',
  MAIN: '/',
  REDIRECT: '*',
  LOGIN: 'login',
  PRODUCTS: 'products',
  SINGLE_PRODUCT: 'single-product/*',
  PRODUCTS_IMPORT: 'products-import',
  SERVICES: 'services',
  CASH_STORE: 'cash-store',
  SINGLE_CASH_STORE: 'single_cash_store',
  COMPANY_SETTINGS: 'company-settings',
  COMPANY_SETTINGS_PROPS: 'company-settings-props',
  COMPANY_SETTINGS_DISCOUNTS: 'company-settings-discounts',
  COMPANY_SETTINGS_EMAILS: 'company-settings-emails',
  COMPANY_SETTINGS_TAXES: 'company-settings-taxes',
  COMPANY_SETTINGS_DATA: 'company-settings-data', 
  COMPANY_WORKERS: 'company-workers',
  COMPANY_STORES: 'company-stores',
  MAGAZINE: 'stores',
}

export const modalTypes = {
  CREATE_PRODUCT_ALT_TYPE: 'create_product_alt_type',
  CUSTOM_PRODUCT_INFO: 'custom_product_info',
  CREATE_CASH_DESIGN_TYPE: 'create_cash_design_type',
  CREATE_ADMIN_TYPE: 'create_admin_type',
  CREATE_CASHIER_TYPE: 'create_cashier_type',
  CREATE_STOREKEEPER_TYPE: 'create_storekeeper_type',
  CREATE_PRODUCT_TYPE: 'create_product_type',
  EDIT_PRODUCT_TYPE: 'edit_product_type',
  CREATE_STORE_TYPE: 'create_store_type',
  CREATE_GROUP_TYPE: 'create_group_type',
  CREATE_CATEGORY_TYPE: 'create_category_type',
  STORE_HISTORY_TYPE: 'store_history_type',
  CHANGE_HISTORY_TYPE: 'change_history_type',
  EDIT_STORE_TYPE: 'edit_store_type',
  CREATE_CASH_TYPE: 'create_cash_type',
  USER_HISTORY_TYPE: 'user_history_type',
  USER_EDIT_TYPE: 'user_edit_type',
}

export const mobileModalTypes = {
  SERVICE_FILTER: 'service_filter',
  CASH_CREATE: 'cash_create',
  MAIN_SCROLLER: 'main_scroller',
  CREATE_GROUP: 'create_group',
  CREATE_PRODUCT: 'create_product',
  CREATE_COMPLEX: 'create_complex',
  CREATE_SERVICE: 'create_service',
}

export const importModalTypes = {
  IMPORT_ALERT_TYPE: 'import_alert_type',
  IMPORT_ALERT_STORE_TYPE: 'import_alert_store_type',
}

export const storeQueryTags = {
  STORE_TAG: 'store_tag',
  USERS_TAG: 'users_tag',
  PRODUCT_TAG: 'product_tag',
  SETTINGS_TAG: 'settings_tag',
}