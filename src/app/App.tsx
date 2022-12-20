import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import Header from 'widgets/ui/Header/Header';
import MainPage from 'widgets/ui/MainPage/MainPage';
import AboutCompany from 'widgets/ui/AboutCompany/AboutCompany';
import Franchise from 'widgets/ui/Franchise/Franchise';
import ChooseCardWrapper from 'widgets/ui/ChooseCardWrapper/ChooseCardWrapper';
import Footer from 'widgets/ui/Footer/Footer';
import BasketWrapper from 'widgets/ui/BasketWrapper/BasketWrapper';

import 'fonts/style.css';
import './styles/index.scss';
import style from './App.module.scss';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <div className={style.App}>
        <Header isAuth />
        <MainPage />
        <AboutCompany />
        <Franchise />
        <ChooseCardWrapper />
        <BasketWrapper />
        <Footer />
      </div>
    </Provider>
  )
};

export default App;
