import { AiFillWindows, AiOutlineCheckCircle } from 'react-icons/ai'; 
import { BsCalendar, BsChevronDown } from 'react-icons/bs';
import { setModal } from '../../store/slices/modalSlice';
import cls from './changeHistory.module.scss';
import { TbBuilding } from 'react-icons/tb'; 
import { FaRegUser } from 'react-icons/fa'; 
import { useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr'; 
import { useState } from 'react';

const ChangeHistory = () => {
  const [drop, setDrop] = useState({
    firstDrop: false,
    secondDrop: false,
  })

  const dispatch = useDispatch()
  
  return (
    <div className={cls['change']}>
      <div className={cls['change-head']}>
        <button>Закрыть смену</button>
        <button onClick={() => dispatch(setModal(false))}><GrClose/></button>
      </div>
      <div className={cls['change-body']}>
        <div className={cls['change-title']}>
          <h3>Смена #1</h3>
          <p>Смена</p>
        </div>
        <span className={cls['change-date']}>Создан 14 января</span>
        <div className={cls['change-info']}>
          <div>
            <p><BsCalendar/> <span>Открыта 14 января 19:57</span></p>
            <p><TbBuilding/> <span>Магазин «ДОмашний»</span></p>
            <p><TbBuilding/> <span>Касса «№1»</span></p>
          </div>
          <div>
            <p><FaRegUser/> <span>Asad Halmatov</span></p>
            <p><AiFillWindows/> <span>Windows 7</span></p>
            <b>IP 109.201.160.152</b>
          </div>
        </div>
        <div className={cls['change-line']}>
          <h3>Выручка</h3>
        </div>
        <div className={cls['change-child']}>
          <div>
            <span>Кол-во продаж</span>
            <b>1</b>
          </div>
          <div>
            <span>Наличные</span>
            <b>200.00 сом</b>
          </div>
        </div>
        <div className={cls['change-child']}>
          <div>
            <span>Сумма продаж</span>
            <b>200.00 сом</b>
          </div>
          <div>
            <span>Безналичные</span>
            <b>0.00 сом</b>
          </div>
        </div>
        <div id={cls['liner']} className={cls['change-line']}>
          <h3>Возвраты</h3>
        </div>
        <div className={cls['change-child']}>
          <div>
            <span>Количество возвратов продаж</span>
            <b>1</b>
          </div>
          <div>
            <span>Наличные</span>
            <b>200.00 сом</b>
          </div>
        </div>
        <div className={cls['change-child']}>
          <div>
            <span>Сумма возвратов продаж</span>
            <b>200.00 сом</b>
          </div>
          <div>
            <span>Безналичные</span>
            <b>0.00 сом</b>
          </div>
        </div>
        <div id={cls['liner']} className={cls['change-line']}>
          <h3>Касса</h3>
        </div>
        <div className={cls['change-child']}>
          <div>
            <span>Сумма на начало смены</span>
            <b>1</b>
          </div>
          <div>
            <span>Сумма всех взносов</span>
            <b>200.00 сом</b>
          </div>
        </div>
        <div className={cls['change-child']}>
          <div>
            <span>Сумма на текущий момент</span>
            <b>200.00 сом</b>
          </div>
          <div>
            <span>Сумма всех выносов</span>
            <b>0.00 сом</b>
          </div>
        </div>
        <div className={cls['change-total']}>
          <h3>Выручка</h3>
          <span>200.00 сом</span>
        </div>
        <div className={cls['change-line']}>
          <h3>последние операции</h3>
        </div>
        <div className={cls['change-buttons']}>
          <button id={cls['active_btn']}>Движение товара</button>
          <button>Движение денег</button>
          <button>Список товара</button>
        </div>
        <h1 className={cls['change-title']}>15 января</h1>
        <div className={cls['change-drop']}>
          <div className={cls['change-drop-head']}>
            <div className={cls['change-drop-handler']}>
              <div>
                <span></span>
                <p>Продажа #1</p>
              </div>
              <h3>200.00 сом</h3>
            </div>
            <div className={cls['change-drop-info']}>
              <p>Магазин <span>ДОмашний</span></p>
              <b><span>Asad Halmatov</span>15 января 23:06</b>
            </div>
          </div>
          <div id={cls[drop.firstDrop ? 'active_drop' : '']} className={cls['change-drop-body']}>
            <div onClick={() => setDrop((prev) => ({...prev, firstDrop: !drop.firstDrop}))} className={cls['change-drop-body-handler']}>
              <span><AiOutlineCheckCircle/> Документ оплачен</span>
              <button><BsChevronDown/></button>
            </div>
            {drop.firstDrop && (
              <div className={cls['change-drop-body-list']}>
                <div className={cls['change-drop-body-list-child']}>
                  <div>
                    #
                  </div>
                  <div>
                  Счёт
                  </div>
                  <div>
                  Контрагент
                  </div>
                  <div>
                  Дата
                  </div>
                  <div>
                  Сумма
                  </div>
                </div>  
                <div className={cls['change-drop-body-list-child']}>
                  <div className={cls['baller']}>
                    1
                  </div>
                  <div>
                    <span>№1</span>
                  </div>
                  <div>
                    <span>asad</span>
                  </div>
                  <div>
                  Дата
                  </div>
                  <div>
                  Сумма
                  </div>
                </div>  
              </div>
            )}
          </div>
          <div id={cls[drop.secondDrop ? 'active_drop' : '']} className={cls['change-drop-footer']}>
            <div onClick={() => setDrop((prev) => ({...prev, secondDrop: !drop.secondDrop}))} className={cls['change-drop-footer-handler']}>
              <span>1 позиция</span>
              <button><BsChevronDown/></button>
            </div>
            {drop.secondDrop && (
              <div className={cls['change-drop-footer-list']}>
                <div className={cls['change-drop-footer-list-child']}>
                  <div>
                    Наименование
                  </div>
                  <div>
                    Кол-во
                  </div>
                  <div>
                    Цена
                  </div>
                  <div>
                    Итог
                  </div>
                </div>
                <div className={cls['change-drop-footer-list-child']}>
                  <div>
                    <span>Очки</span>
                  </div>
                  <div>
                    1
                  </div>
                  <div>
                    200.00
                  </div>
                  <div>
                    200.00
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangeHistory