import cls from './loader.module.scss';

const Loader = () => {
  return (
    <div className={cls['loader']}>
      <div className={cls['lds-roller']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader