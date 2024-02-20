

import React from 'react';
import { modalTypes } from '../../../constants';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';

const UserCards = ({cls, modalHandler, item}) => {
  
  function setRole() {
    if(item?.role?.name === 'super admin') {
      return 'Владелец'
    } else if (item?.role?.name === 'admin') {
      return 'Администратор'
    } else if (item?.role?.name === 'storekeeper') {
      return 'Кладовщик'
    } else {
      return 'Кассир'
    }
  }

  return (
    <React.Fragment>
      <div className={cls['work-list-child']}>
        <div onClick={() => modalHandler(modalTypes.USER_HISTORY_TYPE, item?.id)} className={cls['work-list-head']}>
          <span>
            {item?.user_avatar && <img src={item?.user_avatar} alt="" />}
          </span>
          <div>
            <p>{item.fullname}</p>
            <span>{setRole()}</span>
          </div>
        </div>
        <div className={cls['work-list-body']}>
          <span>
            <AiFillPhone/> 
            <p>{item.phone_number}</p>
          </span>
          <span>
            <AiOutlineMail/> 
            <p>{item.email}</p>
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserCards;
