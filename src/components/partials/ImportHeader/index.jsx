import { setImportModal, setImportModalType } from '../../../store/slices/modalSlice';
import { useCreateProductsBulkMutation } from '../../../store/query/productQuery';
import { useGetStoresQuery } from '../../../store/query/storesQuery';
import { useDispatch, useSelector } from 'react-redux';  
import { importModalTypes } from '../../../constants';
import { BsChevronDown } from 'react-icons/bs'
import cls from './importHeader.module.scss'
import { useState } from 'react';
import { Switch } from 'antd';

const ImportHeader = () => {
  const [state, setState] = useState({
    needAction: 'Создать и обновить',
    isNeedAction: false,
    productsStore: 'Название',
    productsStoreId: '',
    isStore: false,
  })
  const dispatch = useDispatch()
  const { titles, datas } = useSelector(state => state.import)

  const needActionHandler = (str) => {
    setState((prev) => ({...prev, needAction: str, isNeedAction: !state.isNeedAction}))
  }

  const productStoreHandler = (str) => {
    setState((prev) => ({...prev, productsStore: str.name, productsStoreId: str.id, isStore: !state.isStore}))
  }

  const [createProductsBulk] = useCreateProductsBulkMutation()
  const { data } = useGetStoresQuery({
    token: localStorage.getItem('accessToken'),
  })

  const importBtnHandler = async () => {
    const hasName = titles?.find(item => item.title === 'Наименование')

    if(!hasName){
      dispatch(setImportModal())
      dispatch(setImportModalType(importModalTypes.IMPORT_ALERT_TYPE))
    }else if(state.productsStore === 'Название'){
      dispatch(setImportModal())
      dispatch(setImportModalType(importModalTypes.IMPORT_ALERT_STORE_TYPE))
    }else{
      try {
        await createProductsBulk({
          data: filterProductsByKeysAndValues(titles, datas),
          token: localStorage.getItem('accessToken'),
        })
        alert('Продукты созданы !')
      } catch (error) {
        alert(error)
      }
    }
  }

  function filterProductsByKeysAndValues(titles, data) {
    const titleKeys = titles.map((title) => title.value);
  
    return data.reduce((filteredProducts, product) => {
      const result = {};
      let validProduct = false;
  
      for (let i = 0; i < titleKeys.length; i++) {
        const key = titleKeys[i];
        const value = product[i]?.value;
  
        if (value !== undefined) {
          result[key] = value;
          validProduct = true;
        } else {
          result[key] = null;
        }
      }

      if (validProduct) {
        filteredProducts.push({...result, branch: state.productsStoreId});
      }
  
      return filteredProducts;
    }, []);
  }

  return (
    <div className={cls['import']}>
      <button 
        id={cls[state.productsStore !== 'Название' && titles?.find(item => item.title === 'Наименование') ? 'active_btn' : '']}
        onClick={importBtnHandler} 
        className={cls['import-btn']}>Импортировать</button>
      <div className={cls['import-need']}>
        <p>Нужно</p>
        <label className={cls[state.isNeedAction ? 'active_list' : '']}>
          <p onClick={() => setState((prev) => ({...prev, isNeedAction: !state.isNeedAction}))}>
            {state.needAction}
            <span><BsChevronDown/></span>
          </p>
          <ul>
            <li onClick={() => needActionHandler('Создать и обновить')}>Создать и обновить</li>
            <li onClick={() => needActionHandler('Только создать')}>Только создать</li>
            <li onClick={() => needActionHandler('Только обновить')}>Только обновить</li>
          </ul>
        </label>
      </div>
      <div className={cls['import-need']}>
        <p>Сопоставлять товар</p>
        <label>
          Автоматически
          <span><BsChevronDown/></span>
        </label>
      </div>
      <div className={cls['import-switch']}>
        <Switch />
        <p>Стирать данные, если ячейка пустая</p>
      </div>
      <div className={cls['import-stores-picker']}>
        <p>Выбор магазина</p>
        <label className={cls[state.isStore ? 'active_list' : '']}>
          <p onClick={() => setState((prev) => ({...prev, isStore: !state.isStore}))}>
            {state.productsStore}
            <span><BsChevronDown/></span>
          </p>
          <ul>
            {data?.results.map(item => {
              return <li key={item.id} onClick={() => productStoreHandler(item)}>{item.name}</li>
            })}
          </ul>
        </label>
      </div>
    </div>
  )
}

export default ImportHeader