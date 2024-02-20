import { setImportModal } from '../../../store/slices/modalSlice'
import cls from './importAlert.module.scss'
import { useDispatch } from 'react-redux'

const ImportAlert = ({ title, body }) => {
  const dispatch = useDispatch()

  return (
    <div className={cls['alert']}>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => dispatch(setImportModal())}>Выберите</button>
    </div>
  )
}

export default ImportAlert