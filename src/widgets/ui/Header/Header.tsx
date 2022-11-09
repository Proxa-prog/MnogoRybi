import React, { FC, useEffect, useState } from 'react';

import classNames from 'classnames';

import logo from '../../assets/image/logo.svg';
import Button from '../../../shared/ui/Button/Button';
import StatusMarker from '../../../shared/ui/StatusMarker/StatusMarker';
import List from '../../../shared/ui/List/List';
import Select from '../../../shared/ui/Select/Select';

import { INFO, PRODUCTS } from '../../../constants/constants';

import style from './Header.module.scss';
import LabelText from '../../../shared/ui/LabelText/LabelText';

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
        <img className={style.header__logo} src={logo} width={236} height={70} alt="Логитип Много Рыбы" />
        <div className={style.header__order_data}>
          <div className={style.header__info_wrapper}>
            <div className={style.header__item}>
              <LabelText>Доставка по адресу</LabelText>
              <Select options={PRODUCTS} />
            </div>
            <div className={style.header__item}>
              <LabelText>Принимаем заказы</LabelText>
              <span className={style.header__info}>9:00-24:00</span>
            </div>
            <div className={style.header__item}>
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
                  image="user_fill.svg"
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
                  image="desk_alt_fill.svg"
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
            {(itemsInTheBasket !== undefined)
              ? (
                <StatusMarker
                  key={0}
                  color="blue"
                  className={style.header__amount_items}
                >
                  {itemsInTheBasket}
                </StatusMarker>
              )
              : (
                <StatusMarker
                  key={0}
                  color="blue"
                  className={style.header__amount_items}
                >
                  0
                </StatusMarker>
              )}
            <Button
              className={style.header__button_basket}
              type="button"
              color="yellow"
              image="property_bag_alt_fill.svg"
              onClick={() => {
                console.log('Button enter header');
              }}
            >
              0 &#8381;
            </Button>
          </div>
        </div>
      </div>
      <div className={classNames(
        style.header__nav_wrapper,
        { [style.header__nav_wrapper_scroll]: scroll >= 100 },
      )}
      >
        <nav className={style.header__nav}>
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
