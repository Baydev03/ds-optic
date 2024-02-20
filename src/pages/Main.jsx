import MainDeskBoard from '../components/partials/MainDeskBoard';
import MainContent from '../components/mobile/MainContent';
import MainSwiper from '../components/mobile/MainSwiper';
import MainBoard from '../components/mobile/MainBoard';

const Main = () => {
  return (
    window.innerWidth < 500 ? 
      <>
        <MainBoard/>
        <MainSwiper/>
        <MainContent/>
      </>
      : <>
        <MainDeskBoard/>
      </>
  )
}

export default Main