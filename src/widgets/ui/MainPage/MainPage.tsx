import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import Description from 'widgets/ui/Description/Description';
import ComponentWrapper from 'widgets/ui/ProductsWrapper/ComponentWrapper';
import Products from 'widgets/ui/Products/Products';

import { getProd } from 'entities/productions/model/selectors';
import { fetchProductions } from 'entities/productions/model/services/getProductions';

import style from './MainPage.module.scss';

export interface MainPageProps {

}

const MainPage: FC<MainPageProps> = (props) => {
  const dispatch = useAppDispatch();
  const productions = useSelector(getProd);

  useEffect(() => {
    dispatch(fetchProductions(dispatch));
  }, []);

  return (
    <div>
      <Description />
      <ComponentWrapper title='Наша продукция'>
        <Products
          title='Поке'
          productCards={productions.poke}
        />
        <Products
          title='Роллы'
          productCards={productions.rolls}
        />
        <Products
          title='Супы и карри'
          productCards={productions.curry}
        />
        <Products
          title='Вок'
          productCards={productions.wok}
        />
        <Products
          title='Роллы'
          productCards={productions.sandwich}
        />
        <Products
          title='Десерты'
          productCards={productions.deserts}
        />
        <Products
          title='Напитки'
          productCards={productions.beverages}
        />
      </ComponentWrapper>
    </div>
  )
};

export default MainPage;
