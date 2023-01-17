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

import UserEnter from 'features/UserEnter/UserEnter';
import ModalRegistration from 'features/ModalRegistration/ModalRegistration';
import Confirmation from 'features/Confirmation/Confirmation';
import { getProdSelector } from 'features/productions/model/selectors/getProdSelector';
import { fetchProductions } from 'features/productions/model/services/getProductions';
import { openConfirmationSelector } from 'features/Confirmation/model/selectors/openConfirmationSelector';
import { getRegistrationSelector } from 'features/ModalRegistration/model/selectors/getRegistrationSelector';
import { fetchSiteData } from 'features/siteData/model/services/fetchSiteData';

import Description from 'entities/Description/Description';
import { openModalUserEnterSelector } from 'entities/user/model/selectors/openModalUserEnterSelector';
import { setUserAccountStateSelector } from 'entities/user/model/selectors/setUserAccountStateSelector';

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
    dispatch(fetchProductions(dispatch));
    dispatch(fetchSiteData(dispatch));
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