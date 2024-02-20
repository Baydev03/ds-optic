import MainSwiper from '../../mobile/MainSwiper'
import { Chart } from 'react-google-charts';
import cls from './mainDesk.module.scss'

const data = [
  ['12', ''],
  ['12', 100],
  ['12', 100],
  ['12', 200],
  ['12', 100],
  ['12', 100],
];

const options = {
  vAxis: { minValue: 0, maxValue: 400 },
  chartArea: { width: '85%', height: '90%' },
};

const MainDeskBoard = () => {
  return (
    <div className={cls['board']}>
      <h3>Показатели за месяц по всем магазинам</h3>
      <div className={cls['board-wrapper']}>
        <div className={cls['board-info']}>
          <span>
            <p>200.00</p>
            <b>Выручка</b>
          </span>
          <span>
            <p>0.00</p>
            <b>Себестоимость продаж</b>
          </span>
          <span>
            <p>200.00</p>
            <b>Прибыль</b>
          </span>
          <span>
            <p>200.00</p>
            <b>Средний чек</b>
          </span>
        </div>
        <Chart
          chartType="AreaChart"
          width='100%'
          height='450px'
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default MainDeskBoard