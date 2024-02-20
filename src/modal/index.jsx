import CreateCashDesign from './CreateCashDesign';
import CreateProductAlt from './CreateProductAlt';
import CreateProduct from './CreateProduct';
import { useSelector } from 'react-redux';
import { modalTypes } from '../constants'
import CreateStore from './CreateStore';
import EditProduct from './EditProduct';
import UserHistory from './UserHistory';
import cls from './modal.module.scss';
import CreateCash from './CreateCash';
import EditUser from './EditUser';
import EditStore from './EditStore';
import StoresHistory from './StoreHistory';
import ChangeHistory from './ChangeHistory';
import CreateGroup from './CreateGroup';
import CreateAdmin from './CreateAdmin';
import CreateCahier from './CreateCahier';
import CreateStorekeeper from './CreateStorekeeper';
import CreateCategory from './CreateCategory';
import CustomProduct from './CustomProduct';

const Modal = () => {
  const { isModal, modalType } = useSelector(state => state.modal)

  return (
    <div id={cls[isModal ? 'active' : '']} className={cls['modal']}>
      {
        modalTypes.CREATE_PRODUCT_TYPE === modalType ? <CreateProduct/> : 
          modalTypes.CREATE_PRODUCT_ALT_TYPE === modalType ? <CreateProductAlt/> : 
            modalTypes.CREATE_CASH_TYPE === modalType ? <CreateCash/> : 
              modalTypes.CREATE_CASH_DESIGN_TYPE === modalType ? <CreateCashDesign/> : 
                modalTypes.EDIT_PRODUCT_TYPE === modalType ? <EditProduct/> : 
                  modalTypes.CREATE_STORE_TYPE === modalType ? <CreateStore/> : 
                    modalTypes.CREATE_ADMIN_TYPE === modalType ? <CreateAdmin/> : 
                      modalTypes.CREATE_CASHIER_TYPE === modalType ? <CreateCahier/> : 
                        modalTypes.CREATE_STOREKEEPER_TYPE === modalType ? <CreateStorekeeper/> : 
                          modalTypes.USER_HISTORY_TYPE === modalType ? <UserHistory/> : 
                            modalTypes.USER_EDIT_TYPE === modalType ? <EditUser/> : 
                              modalTypes.EDIT_STORE_TYPE === modalType ? <EditStore/> : 
                                modalTypes.STORE_HISTORY_TYPE === modalType ? <StoresHistory/> : 
                                  modalTypes.CHANGE_HISTORY_TYPE === modalType ? <ChangeHistory/> : 
                                    modalTypes.CREATE_GROUP_TYPE === modalType ? <CreateGroup/> : 
                                      modalTypes.CREATE_CATEGORY_TYPE === modalType ? <CreateCategory/> : 
                                        modalTypes.CUSTOM_PRODUCT_INFO === modalType ? <CustomProduct/> : ''}
    </div>
  )
}

export default Modal