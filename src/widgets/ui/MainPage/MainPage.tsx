import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import ComponentWrapper from 'widgets/ui/ProductsWrapper/ComponentWrapper';
import ChooseCardWrapper from 'widgets/ui/ChooseCardWrapper/ChooseCardWrapper';
import AboutCompany from 'widgets/ui/AboutCompany/AboutCompany';
import Description from 'widgets/ui/Description/Description';
import Products from 'widgets/ui/Products/Products';
import Header from 'widgets/ui/Header/Header';
import Franchise from 'widgets/ui/Franchise/Franchise';
import Footer from 'widgets/ui/Footer/Footer';
import BasketWrapper from 'widgets/ui/BasketWrapper/BasketWrapper';
import UserEnter from 'widgets/ui/UserEnter/UserEnter';
import ModalRegistration from 'widgets/ui/ModalRegistration/ModalRegistration';
import Confirmation from 'widgets/ui/Confirmation/Confirmation';
import Recovery from 'widgets/ui/Recovery/Recovery';

import { getProd } from 'entities/productions/model/selectors';
import { fetchProductions } from 'entities/productions/model/services/getProductions';
import { getRegistration } from 'entities/registration/model';
import { openModalUserEnter } from 'entities/userEnter/model';
import { openConfirmation } from 'entities/confirmation/model';
import { setUserAccountState } from 'entities/userAccount/model/userAccount';
import { fetchSiteData } from 'entities/productions/model/services/fetchSiteData';
import { getSiteDataSelector } from 'entities/siteData/model';
import { changeDescription } from 'app/store/reducers/description';

export interface MainPageProps {

}

const MainPage: FC<MainPageProps> = (props) => {
  const dispatch = useAppDispatch();
  const productions = useSelector(getProd);
  const registration = useSelector(getRegistration);
  const userEnter = useSelector(openModalUserEnter);
  const confirmation = useSelector(openConfirmation);
  const userAccount = useSelector(setUserAccountState);
  const siteData = useSelector(getSiteDataSelector);

  useEffect(() => {
    dispatch(fetchProductions(dispatch));
    dispatch(fetchSiteData(dispatch));
  }, []);
  console.log(siteData);

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
