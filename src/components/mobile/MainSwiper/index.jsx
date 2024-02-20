import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import './swiper.scss'
import 'swiper/css';

const MainSwiper = () => {
  return (
    <div className={'swiper'}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className={['swiper-head']}>
            <p>Сегодня</p>
            <span>27.05.2023</span>
          </div>
          <div className={['swiper-body']}>
            <div className={['swiper-box']}>
              <span>Приходы (по ордерам)</span>
              <p>0,00 сом</p>
            </div>
            <div className={['swiper-box']}>
              <span>Расходы (по ордерам)</span>
              <p>0,00 сом</p>
            </div>
            <div className={['swiper-boxes']}>
              <div>
                <span>Количество продаж</span>
                <p>0</p>
              </div>
              <div>
                <span>Количество возвратов</span>
                <p>0</p>
              </div>
            </div>
            <div className={['swiper-list']}>
              <p>Сумма продаж<span>0,00 сом</span></p>
              <p>Сумма возвратов<span>0,00 сом</span></p>
              <p>Валовая прибыль<span>0,00 сом</span></p>
            </div>  
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={['swiper-head']}>
            <p>Сегодня</p>
            <span>27.05.2023</span>
          </div>
          <div className={['swiper-body']}>
            <div className={['swiper-box']}>
              <span>Приходы (по ордерам)</span>
              <p>0,00 сом</p>
            </div>
            <div className={['swiper-box']}>
              <span>Расходы (по ордерам)</span>
              <p>0,00 сом</p>
            </div>
            <div className={['swiper-boxes']}>
              <div>
                <span>Количество продаж</span>
                <p>0</p>
              </div>
              <div>
                <span>Количество возвратов</span>
                <p>0</p>
              </div>
            </div>
            <div className={['swiper-list']}>
              <p>Сумма продаж<span>0,00 сом</span></p>
              <p>Сумма возвратов<span>0,00 сом</span></p>
              <p>Валовая прибыль<span>0,00 сом</span></p>
            </div>  
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MainSwiper