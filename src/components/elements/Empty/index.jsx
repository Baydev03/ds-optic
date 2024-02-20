import { FaRegFolderOpen } from 'react-icons/fa'
import cls from './empty.module.scss';

const Empty = () => {
  return (
    <div className={cls['empty']}>
      <FaRegFolderOpen/>
      <p>Не найдено</p>
    </div>
  )
}

export default Empty