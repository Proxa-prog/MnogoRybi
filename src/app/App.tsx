import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from './store';

import {
  CONTACTS_ROUTE,
  MAIN_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  NEWS_ROUTE,
  FRANCHISE_ROUTE,
  DELIVERY_ROUTE,
} from 'entities/constants/constants';

import MainPage from 'pages/MainPage/MainPage';
import News from 'pages/News/News';
import Contacts from 'pages/Contacts/Contacts';
import NewsPage from 'pages/NewsPage/NewsPage';
// import FranchisePage from 'widgets/ui/FranchisePage/FranchisePage';
// import DeliveryPage from 'widgets/ui/DeliveryPage/DeliveryPage';

import 'shared/assets/fonts/style.css';
import './styles/index.scss';
import style from './App.module.scss';

const App: React.FC = () => {

  return (
    <div className={style.App}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={MAIN_PAGE_ROUTE} element={<MainPage />} />
            <Route path={CONTACTS_ROUTE} element={<Contacts />} />
            <Route path={NEWS_ROUTE} element={<News />} />
            <Route path={NEWS_PAGE_ROUTE} element={<NewsPage />} />
            {/* <Route path={FRANCHISE_ROUTE} element={<FranchisePage />} />
            <Route path={DELIVERY_ROUTE} element={<DeliveryPage />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
};

export default App;
