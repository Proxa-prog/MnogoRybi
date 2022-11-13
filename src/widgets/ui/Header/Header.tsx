import React, { FC, useEffect, useState } from 'react';

import classNames from 'classnames';
import Button from '/src/shared/ui/Button/Button';

import List from '/src/shared/ui/List/List';
import Select from '/src/shared/ui/Select/Select';
import LabelText from '/src/shared/ui/LabelText/LabelText';
import {
  INFO,
  ONE_HUNDRED_PIXEL_SCROLL,
  PRODUCTS,
  ViewPorts,
} from '/src/constants/constants';
import MenuButtonBasket from '/src/widgets/ui/MenuButtonBasket/MenuButtonBasket';
import MenuButtonEnter from '/src/widgets/ui/MenuButtonEnter/MenuButtonEnter';

import ImageWrapper from '/src/shared/ui/ImageWrapper/ImageWrapper';

import style from './Header.module.scss';


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
  const windowWidth = window.innerWidth;

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
          imageHeight={24}
          imageWidth={24}
          className="header_menu"
          type="button"
          onClick={() => {
            console.log('Button enter header');
          }}
        />
        <ImageWrapper
          className={style.header__logo}
          alt="Логотип Много Рыбы"
          name="logo.svg"
          width={236}
          height={70}
        />
        <div className={style.header__order_data}>
          <div className={style.header__info_wrapper}>
            <div className={style.header__info}>
              <LabelText>Доставка по адресу</LabelText>
              <Select
                options={PRODUCTS}
                promptOption="Адрес не выбран"
              />
            </div>
            <div className={style.header__info}>
              <LabelText>Принимаем заказы</LabelText>
              <span>9:00-24:00</span>
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
                  imageHeight={24}
                  imageWidth={24}
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
            isAuth && (
              <Button
                type="button"
                className="button_orders"
                imageLeft="desk_alt_fill.svg"
                imageHeight={24}
                imageWidth={24}
                onClick={() => {
                  console.log('Button orders header');
                }}
              >
                Заказы
              </Button>
            )
          }
          <div className={style.header__button_basket_wrapper}>
            <MenuButtonBasket
              itemsInTheBasket={itemsInTheBasket}
              windowWidth={windowWidth}
            />
          </div>
        </div>
      </div>
      <div className={classNames(
        style.header__nav_wrapper,
        { [style.header__nav_wrapper_scroll]: scroll >= ONE_HUNDRED_PIXEL_SCROLL },
      )}
      >
        <nav className={style.header__nav}>
          <Button
            isGrayTheme
            className="button_menu"
            type="button"
            imageRight="property_expand_down.svg"
            imageHeight={24}
            imageWidth={24}
            onClick={() => {
              console.log('Button menu header');
            }}
          >
            Меню
          </Button>
          <div className={classNames(
            style.list_wrapper,
            { [style.list_wrapper_scroll]: scroll >= ONE_HUNDRED_PIXEL_SCROLL },
          )}
          >
            {
              (scroll >= ONE_HUNDRED_PIXEL_SCROLL && windowWidth >= ViewPorts.DESKTOP) && (
                <ImageWrapper
                  className={style.header__logo_scroll}
                  name="logo_only_image.svg"
                  alt="Логотип тарелка, рыба, китайские палочки"
                  width={38.25}
                  height={45}
                />
              )
            }
            <List
              isLink
              classNameList={style.header__products_list}
              classNameItem={style.header__products_item}
              items={PRODUCTS}
            />
            <div className={style.header__vertical_line} />
            {
              (scroll >= ONE_HUNDRED_PIXEL_SCROLL)
                ? (
                  <>
                    <List
                      isLink
                      classNameList={style.header__info_list_scroll}
                      classNameItem={style.header__info_item_scroll}
                      items={INFO}
                    />
                    <Button
                      className="header__button_more"
                      type="button"
                      imageRight="property_expand_down.svg"
                      imageHeight={24}
                      imageWidth={24}
                      onClick={() => { console.log('Button Create'); }}
                    >
                      Ещё
                    </Button>
                  </>
                )
                : (
                  <List
                    isLink
                    classNameList={style.header__info_list}
                    classNameItem={style.header__info_item}
                    items={INFO}
                  />
                )
            }
          </div>
          <div className={style.header__button_wrapper}>
            <Button
              className="header__button_create_poke"
              type="button"
              isGrayTheme
              onClick={() => { console.log('Button Create'); }}
            >
              Создать поке
            </Button>
            {
              (scroll >= ONE_HUNDRED_PIXEL_SCROLL && windowWidth >= ViewPorts.TABLET)
              && (
                <>
                  <MenuButtonEnter
                    isAuth={isAuth}
                    scroll={scroll}
                  />
                  <div className={style.header__button_basket_wrapper}>
                    <MenuButtonBasket
                      itemsInTheBasket={itemsInTheBasket}
                      scroll={scroll}
                      windowWidth={windowWidth}
                    />
                  </div>
                </>
              )
            }
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
