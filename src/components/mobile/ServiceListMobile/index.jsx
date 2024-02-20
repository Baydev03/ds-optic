import { setMobileModalType } from '../../../store/slices/modalSlice';
import { mobileModalTypes } from '../../../constants';
import { IoFilter } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import cls from './service.module.scss';

const ServiceListMobile = () => {
  const dispatch = useDispatch()

  return (
    <div className={cls['service']}>
      <div className={cls['service-child']}>
        <span>0 поз.</span>
        <button onClick={() => dispatch(setMobileModalType(mobileModalTypes.SERVICE_FILTER))}><IoFilter/></button>
      </div>
    </div>
  )
}

export default ServiceListMobile