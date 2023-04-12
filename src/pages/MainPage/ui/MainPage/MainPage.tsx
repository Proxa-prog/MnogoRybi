import React, { FC, useEffect } from 'react';
import  { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import { BasketWrapper } from 'widgets/Basket';
import { Header } from 'widgets/Header';
import { Recovery } from 'widgets/Recovery';
import { ComponentWrapper } from 'widgets/ProductsWrapper';
import { Products } from 'widgets/Products';
import { AboutCompany } from 'widgets/AboutCompany';
import { ChooseCardWrapper } from 'widgets/ChooseCardWrapper';
import { Footer } from 'widgets/Footer';
import { Franchise } from 'widgets/Franchise';

import { getProdSelector, fetchProductions } from 'features/productions';
import {
  getRegistrationSelector,
  openConfirmationSelector,
  ModalRegistration,
  Confirmation,
} from 'features/registration';
import { UserEnter } from 'features/user';
import { fetchPagesInfo, fetchRestaurantProductions } from 'features/restaurant';

import {
  userEnterSelector,
  userAccountSelector,
  ModalUserDoesNotExist
} from 'entities/user';
import { Description } from 'entities/descriptions';

export const MainPage: FC = () => {
  const location = useLocation()
  const dispatch = useAppDispatch();
  const productions = useSelector(getProdSelector);
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(userEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const userAccount = useSelector(userAccountSelector);

  useEffect(()=> {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({behavior: "smooth"})
      }
    } else {
      window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",
      })
    }
  }, [location,])

  useEffect(() => {
    dispatch(fetchProductions());
    dispatch(fetchRestaurantProductions());
    dispatch(fetchPagesInfo());
  }, []);

  return (
    <>
      <Header isAuth={userAccount.userAccount.isLogin} />
      {registration.isOpen && <ModalRegistration />}
      {userEnter.isOpen && <UserEnter />}
      {confirmation.isOpen && <Confirmation />}
      {userAccount.userAccount.isModalRecoveryOpen && <Recovery />}
      {userAccount.userAccount.isModalUserDoesNotExist && <ModalUserDoesNotExist />}
      <div>
        <Description />
        <ComponentWrapper title='Наша продукция'>
          <Products
            id='Poke'
            title='Поке'
            productCards={productions.poke}
          />
          <Products
            id='Rolls'
            title='Роллы'
            productCards={productions.rolls}
          />
          <Products
            id='Curry'
            title='Супы и карри'
            productCards={productions.curry}
          />
          <Products
            id='Wok'
            title='Вок'
            productCards={productions.wok}
          />
          <Products
            id='Sandwich'
            title='Сэндвичи'
            productCards={productions.sandwich}
          />
          <Products
            id='Deserts'
            title='Десерты'
            productCards={productions.deserts}
          />
          <Products
            id='Drinks'
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
  );
};
