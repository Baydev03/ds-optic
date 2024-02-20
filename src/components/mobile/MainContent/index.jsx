import cls from './mainContent.module.scss';

const MainContent = () => {
  return (
    <div className={cls['content']}>
      <div className={cls['content-things']}>
        <h3>Склад</h3>
        <div>
          <p>Количество товара</p>
          <span></span>
        </div>
        <div>
          <p>Стоимость товара (по себестоимости)</p>
          <span></span>
        </div>
        <div>
          <p>Количество товара (в розничных ценах)</p>
          <span></span>
        </div>
      </div>
      <div className={cls['content-plan']}>
        <h3>Запланировано</h3>
        <p>На ближайшие 30 дней планов нет</p>
      </div>
    </div>
  )
}

export default MainContent