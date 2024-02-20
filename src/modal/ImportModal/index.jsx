import ImportAlert from '../../components/partials/ImportAlert'
import { importModalTypes } from '../../constants'
import cls from './importModal.module.scss'
import { useSelector } from 'react-redux'

const ImportModal = () => {
  const { isImportModal, importModalType } = useSelector(state => state.modal)

  return (
    <div id={cls[isImportModal ? 'active' : '']} className={cls['import']}>
      <div className={cls['import-wrapper']}>
        {
          importModalTypes.IMPORT_ALERT_TYPE === importModalType ? <ImportAlert title={'Внимание'} body={'Вы не выбрали колонку «Наименование»'}/> 
            : importModalTypes.IMPORT_ALERT_STORE_TYPE === importModalType ? <ImportAlert title={'Внимание'} body={'Вы не выбрали магазин'}/> 
              : ''}
      </div>
    </div>
  )
}

export default ImportModal