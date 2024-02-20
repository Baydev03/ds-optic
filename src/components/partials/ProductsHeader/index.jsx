import { setModal, setModalType } from '../../../store/slices/modalSlice';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { FaFilter, FaPlus, FaRegFileExcel } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5'
import { appRoutesPath, modalTypes } from '../../../constants';
import cls from './productHeader.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc'

const ProductsHeader = ({...togglers}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const modalHandler = (type) => {
    dispatch(setModal(true))
    dispatch(setModalType(type))
  }

  return (
    <div className={cls['header']}>
      <div className={cls['header-left']}>
        <div className={cls['header-search']}>
          <input type="text" placeholder='Поиск по наименованию' />
          <span><FaFilter/></span>
        </div>
        <div className={cls['header-actions']}>
          <span>Действия 2 поз.</span>
          <AiOutlineCaretDown/>
        </div>
        <button 
          onClick={() => modalHandler(modalTypes.CREATE_PRODUCT_TYPE)} 
          className={cls['header-create-btn']}>Создать товар</button>
        <button 
          onClick={() => modalHandler(modalTypes.CREATE_CATEGORY_TYPE)}  
          className={cls['header-create-group-btn']}><FcFolder/> <span><FaPlus/></span></button>
        <button onClick={() => navigate(`/${appRoutesPath.PRODUCTS_IMPORT}`)} 
          className={cls['header-create-import-btn']}><FaRegFileExcel/> Импорт товаров</button>
      </div>
      <div className={cls['header-right']}>
        <button className={cls['header-right-show-btn']} onClick={() => togglers.setToggleFolders(prev => !prev)}>
          {togglers.toggleFolders ? <FcFolder/> : <FcOpenedFolder />}
        </button>
        <button className={cls['header-right-setting-btn']}><IoSettingsSharp/></button>
      </div>
    </div>
  )
}

export default ProductsHeader