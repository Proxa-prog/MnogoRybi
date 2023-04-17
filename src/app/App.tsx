import React, { useEffect } from "react";
import { useAppDispatch } from "./store";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { News } from 'pages/News';
import { Contacts } from 'pages/Contacts';
import { NewsPage } from 'pages/NewsPage';
import { Constructor } from 'pages/Constructor';
import { PersonalArea } from 'pages/PersonalArea';
import { MyOrders } from 'pages/MyOrders';
import { Franchise } from 'pages/Franchise';
import { NotFound } from "pages/NotFound";

import { Recovery } from "widgets/Recovery";

import { fetchProductions, getProdSelector } from "features/getProductionsData";
import {
  fetchPagesInfo,
  fetchRestaurantProductions,
  getRestaurantPagesInfoSelector,
  getRestaurantProductionsSelector,
} from 'features/getRestaurantData';
import {
  Confirmation,
  getRegistrationSelector,
  ModalRegistration,
  openConfirmationSelector,
} from "features/registration";
import { Authorization } from "features/authorization";

import {
  ModalUserDoesNotExist,
  userAccountSelector,
  userEnterSelector
} from "entities/user";

import {
  CONTACTS_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  NEWS_ROUTE,
  CONSTRUCTOR_PAGE_ROUTE,
  FRANCHISE_PAGE_ROUTE,
  DELIVERY_ROUTE,
  PERSONAL_AREA_PAGE_ROUTE,
  PERSONAL_AREA_MY_ORDERS_ROUTE,
} from 'shared';

import style from './App.module.scss';
import 'shared/assets/fonts/style.css';
import './styles/index.scss';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const restaurantProductions = useSelector(getRestaurantProductionsSelector);
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);
  const productions = useSelector(getProdSelector);
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(userEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(userAccountSelector);

  useEffect(() => {
    productions.beverages.length === 0 && dispatch(fetchProductions());
    restaurantProductions.products.length === 0 && dispatch(fetchRestaurantProductions());
    pagesInfo.pagesNames.length === 0 && dispatch(fetchPagesInfo());
  }, []);

  return (
    <div className={style.App}>
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <Authorization />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.userAccount.isModalRecoveryOpen && <Recovery />}
      {userAccount.userAccount.isModalUserDoesNotExist && <ModalUserDoesNotExist />}
        <BrowserRouter>
          <Routes>
            <Route path={MAIN_PAGE_ROUTE} element={<MainPage />} />
            <Route path={CONTACTS_PAGE_ROUTE} element={<Contacts />} />
            <Route path={NEWS_ROUTE} element={<News />} />
            <Route path={NEWS_PAGE_ROUTE} element={<NewsPage />} />
            <Route path={CONSTRUCTOR_PAGE_ROUTE} element={<Constructor />} />
            <Route path={PERSONAL_AREA_PAGE_ROUTE} element={<PersonalArea />} />
            <Route path={PERSONAL_AREA_MY_ORDERS_ROUTE} element={<MyOrders />} />
            <Route path={FRANCHISE_PAGE_ROUTE} element={<Franchise />} />
            <Route path={DELIVERY_ROUTE} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};
