import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import Description from 'widgets/ui/Description/Description';
import ComponentWrapper from 'widgets/ui/ProductsWrapper/ComponentWrapper';
import Products from 'widgets/ui/Products/Products';
import Header from 'widgets/ui/Header/Header';
import AboutCompany from 'widgets/ui/AboutCompany/AboutCompany';
import Franchise from 'widgets/ui/Franchise/Franchise';
import ChooseCardWrapper from 'widgets/ui/ChooseCardWrapper/ChooseCardWrapper';
import Footer from 'widgets/ui/Footer/Footer';
import BasketWrapper from 'widgets/ui/BasketWrapper/BasketWrapper';

import { getProd } from 'entities/productions/model/selectors';
import { fetchProductions } from 'entities/productions/model/services/getProductions';

import style from './MainPage.module.scss';
import ModalRegistration from '../ModalRegistration/ModalRegistration';
import { getRegistration } from 'entities/registration/model';
import Confirmation from '../Confirmation/Confirmation';

export interface MainPageProps {

}

const MainPage: FC<MainPageProps> = (props) => {
  const dispatch = useAppDispatch();
  const productions = useSelector(getProd);
  const registration = useSelector(getRegistration);

  useEffect(() => {
    dispatch(fetchProductions(dispatch));
  }, []);

  return (
    <>
    <Confirmation />
      <Header isAuth />
      {registration.isOpen && <ModalRegistration />}
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
