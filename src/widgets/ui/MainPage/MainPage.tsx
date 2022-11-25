import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import { RootState } from 'app/store';

import Description from 'widgets/ui/Description/Description';
import ComponentWrapper from 'widgets/ui/ProductsWrapper/ComponentWrapper';
import Products from 'widgets/ui/Products/Products';


import { getProductions } from 'entities/productions/api';

import style from './MainPage.module.scss';

export interface MainPageProps {

}

const MainPage: FC<MainPageProps> = (props) => {
  const dispatch = useDispatch();
  const productions = useSelector((state: RootState) => state.productions.productions);

  useEffect(() => {
    // @ts-ignore
    dispatch(getProductions());
  }, []);

  return (
    <div>
      <Description />
      <ComponentWrapper title='Наша продукция'>
        <Products
          title='Поке'
          productCards={productions}
        />
      </ComponentWrapper>
    </div>
  )
};

export default MainPage;
