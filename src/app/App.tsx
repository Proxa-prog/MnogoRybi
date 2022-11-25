import * as React from 'react';

import { Provider } from 'react-redux';

import { store } from './store';

import Header from 'widgets/ui/Header/Header';
import MainPage from 'widgets/ui/MainPage/MainPage';
import Footer from 'widgets/ui/Footer/Footer';

import style from './App.module.scss';
import 'fonts/style.css';
import './styles/index.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={style.App}>
        <Header isAuth />
        <MainPage />
        <Footer />
      </div>
    </Provider>
  )
};

export default App;
