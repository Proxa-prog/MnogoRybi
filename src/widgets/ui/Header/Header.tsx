import React, { FC, useEffect, useState } from 'react';

import classNames from 'classnames';

import logo from '../../assets/image/logo.svg';
import Button from '../../../shared/ui/Button/Button';
import List from '../../../shared/ui/List/List';
import Select from '../../../shared/ui/Select/Select';

import { INFO, PRODUCTS } from '../../../constants/constants';

import style from './Header.module.scss';
import LabelText from '../../../shared/ui/LabelText/LabelText';
import MenuButtonBasketRender from '../MenuButtonBasketRender/MenuButtonBasketRender';
import MenuButtonEnterRender from '../MenuButtonEnterRender/MenuButtonEnterRender';

export interface HeaderProps {
  itemsInTheBasket?: any;
  isAuth?: boolean;
}

const Header: FC<HeaderProps> = (props) => {
  const {
    itemsInTheBasket,
    isAuth = false,
  } = props;

  const [scroll, setScroll] = useState(0);
  const winw = window.innerWidth;
  console.log(winw);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={style.header}>
      <div className={style.header__order_data_wrapper}>
        <Button
          imageLeft="property_menu.svg"
          className="header_menu"
          type="button"
          onClick={() => {
            console.log('Button enter header');
          }}
        />
        <img className={style.header__logo} src={logo} width={236} height={70} alt="Логитип Много Рыбы" />
        <div className={style.header__order_data}>
          <div className={style.header__info_wrapper}>
            <div className={style.header__info}>
              <LabelText>Доставка по адресу</LabelText>
              <Select options={PRODUCTS} />
            </div>
            <div className={style.header__info}>
              <LabelText>Принимаем заказы</LabelText>
              <span className={style.header__info}>9:00-24:00</span>
            </div>
            <div className={style.header__info}>
              <LabelText>Телефон</LabelText>
              <a href="tel:+74852980100">8 (4852) 980-100</a>
            </div>
          </div>
        </div>
        <div className={style.header__button_wrapper}>
          {
            isAuth
              ? (
                <Button
                  imageLeft="user_fill.svg"
                  className="user_auth"
                  type="button"
                  onClick={() => {
                    console.log('Button enter header');
                  }}
                />
              )
              : (
                <Button
                  type="button"
                  onClick={() => {
                    console.log('Button enter header');
                  }}
                >
                  Войти
                </Button>
              )
          }
          {
            isAuth
              ? (
                <Button
                  type="button"
                  imageLeft="desk_alt_fill.svg"
                  onClick={() => {
                    console.log('Button enter header');
                  }}
                >
                  Заказы
                </Button>
              )
              : null
          }
          <div className={style.header__button_basket_wrapper}>
            <MenuButtonBasketRender itemsInTheBasket={itemsInTheBasket} />
          </div>
        </div>
      </div>
      <div className={classNames(
        style.header__nav_wrapper,
        { [style.header__nav_wrapper_scroll]: scroll >= 100 },
      )}
      >
        <nav className={style.header__nav}>
          <Button
            isGrayTheme
            className="button_menu"
            type="button"
            imageRight="property_expand_down.svg"
            onClick={() => {
              console.log('Button menu header');
            }}
          >
            Меню
          </Button>
          <List
            isLink
            classNameList={style.header__products_list}
            classNameItem={style.header__products_item}
            items={PRODUCTS}
          />
          <div className={style.header__vertical_line} />
          <List
            isLink
            classNameList={style.header__products_list}
            classNameItem={style.header__products_item}
            items={INFO}
          />
          <div className={style.header__button_wrapper}>
            <Button
              className={style.header__button_create_poke}
              type="button"
              isGrayTheme
              onClick={() => { console.log('Button Create'); }}
            >
              Создать поке
            </Button>
            {
              (scroll >= 100 && winw <= 768)
                ? (
                  <>
                    <MenuButtonEnterRender isAuth={isAuth} />
                    <div className={style.header__button_basket_wrapper}>
                      <MenuButtonBasketRender itemsInTheBasket={itemsInTheBasket} />
                    </div>
                  </>
                )
                : null
            }

          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
