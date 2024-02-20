import cls from './companyDiscount.module.scss';

const CompanyDiscount = () => {
  return (
    <div className={cls['discount']}>
      <div className={cls['discount-head']}>
        <h3>Предустановленные скидки</h3>
        <div>
          <input type="number" placeholder='%' />
          <input type="number" placeholder='%' />
          <input type="number" placeholder='%' />
          <input type="number" placeholder='%' />
          <input type="number" placeholder='%' />
        </div>
      </div>
      <div className={cls['discount-line']}>
        <h3>правила накопительных скидок</h3>
      </div>
      <div className={cls['discount-rules']}>
        <div className={cls['discount-rules__price']}>
          <h3>Сумма больше чем:</h3>
          <input type="number" placeholder='Сумма' />
          <input type="number" placeholder='Сумма' />
          <input type="number" placeholder='Сумма' />
          <input type="number" placeholder='Сумма' />
          <input type="number" placeholder='Сумма' />
        </div>
        <div className={cls['discount-rules__procent']}>
          <h3>Скидка, %</h3>
          <input type="text" placeholder='Скидка' />
          <input type="text" placeholder='Скидка' />
          <input type="text" placeholder='Скидка' />
          <input type="text" placeholder='Скидка' />
          <input type="text" placeholder='Скидка' />
        </div>
      </div>
      <button className={cls['discount-saver']}>Сохранить</button>
    </div>
  )
}

export default CompanyDiscount