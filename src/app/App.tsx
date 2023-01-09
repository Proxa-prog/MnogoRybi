import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from './store';

import Header from 'widgets/ui/Header/Header';
import MainPage from 'widgets/ui/MainPage/MainPage';
import AboutCompany from 'widgets/ui/AboutCompany/AboutCompany';
import Franchise from 'widgets/ui/Franchise/Franchise';
import ChooseCardWrapper from 'widgets/ui/ChooseCardWrapper/ChooseCardWrapper';
import Footer from 'widgets/ui/Footer/Footer';
import BasketWrapper from 'widgets/ui/BasketWrapper/BasketWrapper';
import Contacts from 'widgets/ui/Contacts/Contacts';

import 'fonts/style.css';
import './styles/index.scss';
import style from './App.module.scss';

const App: React.FC = () => {

  return (
    <div className={style.App}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/' element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
};

export default App;
