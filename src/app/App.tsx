import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from './store';

import {
  CONTACTS_ROUTE,
  MAIN_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  NEWS_ROUTE,
  CONSTRUCTOR_PAGE_ROUTE,
  FRANCHISE_ROUTE,
  DELIVERY_ROUTE,
  PERSONAL_AREA_ROUTE,
  PERSONAL_AREA_MY_ORDERS_ROUTE,
} from 'shared';

import { MainPage } from 'pages/MainPage';
import { News } from 'pages/News';
import { Contacts } from 'pages/Contacts';
import { NewsPage } from 'pages/newsPage';
import { Constructor } from 'pages/Constructor';
import { PersonalArea } from 'pages/PersonalArea';
import { MyOrders } from 'pages/MyOrders';
import { Franchise } from 'pages/Franchise';
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
            <Route path={CONSTRUCTOR_PAGE_ROUTE} element={<Constructor />} />
            <Route path={PERSONAL_AREA_ROUTE} element={<PersonalArea />} />
            <Route
              path={PERSONAL_AREA_MY_ORDERS_ROUTE}
              element={<MyOrders />}
            />
            <Route path={FRANCHISE_ROUTE} element={<Franchise />} />
            {/*<Route path={DELIVERY_ROUTE} element={<DeliveryPage />} />*/}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
