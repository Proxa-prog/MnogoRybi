import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { useAppDispatch } from 'app/store';

import { HeaderOrderDataWrapper, HeaderNavWrapper } from 'widgets/Header';

import { registrationActions } from 'features/registration';

import { openBasketSelector, basketActions } from 'entities/basket';
import { userEnterSelector, userEnterActions } from 'entities/user';

import { ViewPorts } from 'shared';

import style from './Header.module.scss';

export interface HeaderProps {
  itemsInTheBasket?: number | undefined;
  isAuth?: boolean;
}

const Header: FC<HeaderProps> = (props) => {
  const {
    itemsInTheBasket,
    isAuth = false
  } = props;

  const dispatch = useAppDispatch();
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isHeaderMenuActive, setIsHeaderMenuActive] = useState(false);
  const [isProductsMenuActive, setIsProductsMenuActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const basket = useSelector(openBasketSelector);
  const userEnter = useSelector(userEnterSelector);

  const handlerButtonBasketClick = () => {
    dispatch(basketActions.openBasketBlock(basket.isBasketOpen));
  };

  const handleScroll = () => {
    setScrollHeight(window.scrollY);
  };

  const onProductsMenuClick = () => {
    setIsProductsMenuActive((prevState) => !prevState);
  };

  const onHeaderMenuClick = () => {
    setIsHeaderMenuActive((prevState) => !prevState);
  };

  const onHeaderEnterClick = () => {
    dispatch(userEnterActions.changeIsOpenUserEnter(userEnter.isOpen));
    dispatch(registrationActions.changeIsOpenRegistration(true));
  };

  const getWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);

  return (
    <header
      className={classNames(style.header, {
        [style.headerOpen]:
          isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
      })}
    >
      <HeaderOrderDataWrapper
        isHeaderMenuActive={isHeaderMenuActive}
        windowWidth={windowWidth}
        isAuth={isAuth}
        itemsInTheBasket={itemsInTheBasket}
        onHeaderMenuClick={onHeaderMenuClick}
        onBasketButtonClick={handlerButtonBasketClick}
        onClick={onHeaderEnterClick}
      />
      <HeaderNavWrapper
        isHeaderMenuActive={isHeaderMenuActive}
        windowWidth={windowWidth}
        isAuth={isAuth}
        itemsInTheBasket={itemsInTheBasket}
        scrollHeight={scrollHeight}
        isProductsMenuActive={isProductsMenuActive}
        onProductsMenuClick={onProductsMenuClick}
        onBasketButtonClick={handlerButtonBasketClick}
      />
    </header>
  );
};

export default Header;
