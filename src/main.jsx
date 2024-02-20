import { BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import './scss/_variables.scss';
import App from './App.jsx';
import './index.scss';  
import 'swiper/css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
