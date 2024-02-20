import { Switch } from 'antd';
import cls from './companyProps.module.scss';

const CompanyProps = () => {
  return (
    <div className={cls['props']}>
      <div className={cls['props-org']}>
        <input type="text" placeholder='Поиск организации по наименованию, ИНН или ОГРН' />
      </div>
      <div className={cls['props-full-input']}>
        <h3>Наименование организации</h3>
        <input type="text" placeholder='Наименование организации' />
      </div>
      <div className={cls['props-full-input']}>
        <h3>Полное наименование организации</h3>
        <input type="text" placeholder='Полное наименование организации' />
      </div>
      <div className={cls['props-full-input']}>
        <h3>Юридический адрес</h3>
        <input type="text" placeholder='адрес' />
      </div>
      <div className={cls['props-full-input']}>
        <h3>Фактический адрес</h3>
        <input type="text" placeholder='адрес' />
      </div>
      <div className={cls['props-list']}>
        <p>Реквизиты организации <span>(добавить еще)</span></p>
        <div>
          <input type="text" />
          <input type="text" placeholder='5702001741' />
        </div>
        <div>
          <input type="text" />
          <input type="text" placeholder='5702001741' />
        </div>
        <div>
          <input type="text" />
          <input type="text" placeholder='5702001741' />
        </div>
        <div>
          <input type="text" />
          <input type="text" placeholder='5702001741' />
        </div>
      </div>
      <div className={cls['props-other']}>
        <h3>Другое</h3>
      </div>
      <div className={cls['props-full-input']}>
        <h3>Должность руководителя</h3>
        <input type="text"/>
      </div>
      <div className={cls['props-full-input']}>
        <h3>ФИО руководителя</h3>
        <input type="text"/>
      </div>
      <div className={cls['props-full-input']}>
        <h3>ФИО бухгалтера</h3>
        <input type="text"/>
      </div>
      <label className={cls['props-payer']}>
        <Switch/>
        <p>Плательщик НДС</p>
      </label>
      <div className={cls['props-alert']}>
        <p>Используются для печатных форм</p>
      </div>
      <button className={cls['props-saver']}>Сохранить</button>
    </div>
  )
}

export default CompanyProps