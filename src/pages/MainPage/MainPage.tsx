import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import ComponentWrapper from 'widgets/ProductsWrapper/ComponentWrapper';
import ChooseCardWrapper from 'widgets/ChooseCardWrapper/ChooseCardWrapper';
import AboutCompany from 'widgets/AboutCompany/AboutCompany';
import Products from 'widgets/Products/Products';
import Franchise from 'widgets/Franchise/Franchise';
import Footer from 'widgets/Footer/Footer';
import Recovery from 'widgets/Recovery/Recovery';
import Header from 'widgets/Header/Header';
import BasketWrapper from 'widgets/Basket/ui/BasketWrapper/BasketWrapper';

import { getProdSelector, fetchProductions } from 'features/productions';
import {
  getRegistrationSelector,
  openConfirmationSelector,
  ModalRegistration,
  Confirmation
} from 'features/registration';
import { fetchSiteData } from 'features/siteData/model/services/fetchSiteData';
import {UserEnter} from 'features/user';

import {
  openModalUserEnterSelector,
  setUserAccountStateSelector
} from 'entities/user';
import { Description } from 'entities/descriptions';

export interface MainPageProps {

}

const MainPage: FC<MainPageProps> = (props) => {
  const dispatch = useAppDispatch();
  const productions = useSelector(getProdSelector);
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(openModalUserEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(setUserAccountStateSelector);

  useEffect(() => {
    dispatch(fetchProductions());
    dispatch(fetchSiteData());
  }, []);

  return (
    <>
      <Header isAuth={userAccount.isLogin} />
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.recoveryIsOpen && <Recovery />}
      <div>
        <Description />
        <ComponentWrapper title='Наша продукция'>
          <Products
            id="Poke"
            title='Поке'
            productCards={productions.poke}
          />
          <Products
            id="Rolls"
            title='Роллы'
            productCards={productions.rolls}
          />
          <Products
            id="Curry"
            title='Супы и карри'
            productCards={productions.curry}
          />
          <Products
            id="Wok"
            title='Вок'
            productCards={productions.wok}
          />
          <Products
            id="Sandwich"
            title='Сэндвичи'
            productCards={productions.sandwich}
          />
          <Products
            id="Deserts"
            title='Десерты'
            productCards={productions.deserts}
          />
          <Products
            id="Drinks"
            title='Напитки'
            productCards={productions.beverages}
          />
        </ComponentWrapper>
      </div>
      <AboutCompany />
      <Franchise />
      <ChooseCardWrapper />
      <BasketWrapper />
      <Footer />
    </>

  )
};

export default MainPage;
