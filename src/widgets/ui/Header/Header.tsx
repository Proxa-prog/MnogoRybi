import React, { FC } from 'react';

import classNames from 'classnames';

import Button from '../../../shared/ui/Button/Button';
import logo from '../../assets/image/logo.svg';
import StatusMarker from '../../../shared/ui/StatusMarker/StatusMarker';

import style from './Header.module.scss';

export interface HeaderProps {
  itemsInTheBasket?: any;
}

const Header: FC<HeaderProps> = (props) => {
  const {
    itemsInTheBasket,
  } = props;

  return (
    <header className={style.header}>
      <div className={style.header__order_data_wrapper}>
        <img src={logo} width={236} height={70} alt="Логитип Много Рыбы" />
        <div className={style.header__order_data}>
          <ul className={style.header__list}>
            <li className={style.header__item}>
              <p>Доставка по адресу</p>
              <select
                className={classNames(
                  style.header__select,
                  style.header__info,
                )}
                name="address"
                required
              >
                <option disabled selected>Адрес не выбран</option>
              </select>
            </li>
            <li className={style.header__item}>
              <p>Принимаем заказы</p>
              <span className={style.header__info}>9:00-24:00</span>
            </li>
            <li className={style.header__item}>
              <p>Телефон</p>
              <a href="tel:+74852980100">8 (4852) 980-100</a>
            </li>
          </ul>
        </div>
        <div className={style.header__button_wrapper}>
          <Button
            type="button"
            onClick={() => {
              console.log('Button enter header');
            }}
          >
            Войти
          </Button>
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
      <div className={style.header__nav_wrapper}>
        <nav className={style.header__nav}>
          <ul className={style.header__products_list}>
            <li className={style.header__products_item}>Поке</li>
            <li className={style.header__products_item}>Роллы</li>
            <li className={style.header__products_item}>Супы и карри</li>
            <li className={style.header__products_item}>Вок</li>
            <li className={style.header__products_item}>Сэндвичи</li>
            <li className={style.header__products_item}>Десерты</li>
            <li className={style.header__products_item}>Напитки</li>
          </ul>
          <div className={style.header__vertical_line} />
          <ul className={style.header__products_list}>
            <li className={style.header__products_item}>Франшиза</li>
            <li className={style.header__products_item}>Доставка</li>
            <li className={style.header__products_item}>Новости</li>
            <li className={style.header__products_item}>Контакты</li>
          </ul>
          <Button
            className={style.header__button_create_poke}
            type="button"
            isGrayTheme
            onClick={() => { console.log('Button Create'); }}
          >
            Создать поке
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
