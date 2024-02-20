import { IoSettingsSharp } from 'react-icons/io5'
import { AiFillCaretDown } from 'react-icons/ai'
import { Chart } from 'react-google-charts';
import cls from './board.module.scss';

const data = [
  ['12', ''],
  ['12', 100],
  ['12', 100],
  ['12', 100],
  ['12', 100],
  ['12', 100],
];

const options = {
  vAxis: { minValue: 0, maxValue: 400 },
  chartArea: { width: '80%', height: '80%' },
};

const MainBoard = () => {
  return (
    <div className={cls['board']}>
      <div className={cls['board-company']}>
        <p>Моя компания</p>
        <span><IoSettingsSharp/></span>
      </div>
      <div className={cls['board-list']}>
        <div className={cls['board-list-head']}>
          <span>Выручка <AiFillCaretDown/></span>
          <span>Все магазины <AiFillCaretDown/></span>
        </div>
        <p>0,00 сом</p>
        <div className={cls['board-list-filters']}>
          <span>ДЕНЬ</span>
          <span>НЕД.</span>
          <span className={cls['active']}>МЕС.</span>
          <span>КВ.</span>
          <span>ГОД.</span>
        </div>
      </div>
      <Chart
        chartType="AreaChart"
        width='100%'
        height='350px'
        data={data}
        options={options}
      />
    </div>
  )
}

export default MainBoard