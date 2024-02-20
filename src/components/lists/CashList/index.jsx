import cls from './cashList.module.scss';
import { useGetUsersQuery } from '../../../store/query/usersQuery';

const CashList = () => {

  const { data, isLoading } = useGetUsersQuery({
    token: localStorage.getItem('accessToken'),
  })

  const casherUser = data?.filter(item => item?.role?.name === 'casher')
  
  return (
    <>
      <div className={cls['list-head']}>
        <div className={cls['list-child']}>
          <p>Наименование</p>
        </div>
        <div className={cls['list-child']}>
          <p>Магазин</p>
        </div>
        <div className={cls['list-child']}>
          <p>Баланс, сом</p>
        </div>
        <div className={cls['list-child-user']}>
          <p>Кассиры</p>
        </div>

        <div className={cls['list-child-terminal']}>
          <p>Терминалы</p>
        </div>

        <div className={cls['list-child-create']}>
          <p>Создан</p>
        </div>
      </div>
      {
        casherUser && casherUser?.map((item, i) => (
          <div key={i} className={cls['list-body']}>
            <div className={cls['list-child']}>
              <p>Nije</p>
            </div>
            <div className={cls['list-child']}>
              <span>ДОмашний</span>
            </div>
            <div className={cls['list-child']}>
              <h4>200.00</h4>
            </div>
            <div className={cls['list-child-user']}>
              <div>
                {item?.user_avatar 
                  ? <img src={item?.user_avatar} alt="" /> : <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt=""/>}
                <span>{item?.fullname}</span>
              </div>
            </div>

            <div className={cls['list-child-terminal']}>
              <p>Asia Mall</p>
            </div>

            <div className={cls['list-child-create']}>
              <p>10 января</p>
            </div>
          </div>
        ))
      }
    </>
    
  )
}

export default CashList