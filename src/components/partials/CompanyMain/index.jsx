import cls from './companyMain.module.scss';

const CompanyMain = () => {
  return (
    <div className={cls['company']}>
      <div className={cls['company-input']}>
        <p>Наименование организации</p>
        <input placeholder='Моя компания' type="text" />
      </div>
      <div className={cls['company-country']}>
        <p>Страна</p>
        <div>
          <span><img src="https://seekflag.com/app/uploads/2021/12/Flag-of-kyrgyzstan-01.png" alt="" /></span>
          <input placeholder='Кыргызстан' type="text" />
        </div>
      </div>
      <div className={cls['company-input']}>
        <p>Основная валюта</p>
        <input placeholder='Киргизский cом' type="text" />
      </div>
      <div className={cls['company-input']}>
        <p>Отображение валюты</p>
        <input placeholder='сом' type="text" />
      </div>
      <div className={cls['company-input']}>
        <p>Префикс штрих-кода весового товара</p>
        <input placeholder='21' type="text" />
      </div>
      <div className={cls['company-input']}>
        <p>Телефон <span>(добавить еще)</span></p>
        <input type="text" placeholder='+7 928 447 55 66' />
      </div>
      <div className={cls['company-input']}>
        <p>Cайт</p>
        <input type="text" placeholder='www.example.com' />
      </div>
      <button className={cls['company-saver']}>Сохранить</button>
    </div>
  )
}

export default CompanyMain