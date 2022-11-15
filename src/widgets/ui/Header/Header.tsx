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
  const [isHeaderMenuActive, setIsHeaderMenuActive] = useState(false);
  const [isProductsMenuActive, setIsProductsMenuActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const onProductsMenuClick = () => {
    setIsProductsMenuActive((prevState) => !prevState);
  };

  const onHeaderMenuClick = () => {
    setIsHeaderMenuActive((prevState) => !prevState);
  };

  const getWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('resize', getWindowWidth);
    }
  }, []);

  return (
    <header className={
      isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP
        ? style.header__open
        : style.header
    }>
      <div className={
        isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP
          ? style.header__order_data_wrapper__open
          : style.header__order_data_wrapper
      }>
        <Button
          isGrayTheme={isHeaderMenuActive && true}
          imageLeft={
            isHeaderMenuActive
              ? "property_close_round.svg"
              : "property_menu.svg"
          }
          imageHeight={24}
          imageWidth={24}
          className={
            isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP
              ? style.header_menu_button__open
              : style.header_menu_button
          }
          type="button"
          onClick={onHeaderMenuClick}
        />
        {isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP || (
          <ImageWrapper
            className={style.header__logo}
            alt="Логотип Много Рыбы"
            name="logo.svg"
            width={236}
            height={70}
          />
        )}

        <div className={
          isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP
            ? style.header__order_data__open
            : style.header__order_data
        }>
          <div className={
            isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP
              ? style.header__info_wrapper__open
              : style.header__info_wrapper
          }>
            <div className={
              isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP
                ? style.header__info__open
                : style.header__info}>
              <LabelText>Доставка по адресу</LabelText>
              <Select
                options={PRODUCTS}
                promptOption="Адрес не выбран"
              />
            </div>
            <div className={
              isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP
                ? style.header__info__open
                : style.header__info}>
              <LabelText>Принимаем заказы</LabelText>
              <span>9:00-24:00</span>
            </div>
            <div className={
              isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP
                ? style.header__info__open
                : style.header__info}>
              <LabelText>Телефон</LabelText>
              <a href="tel:+74852980100">8 (4852) 980-100</a>
            </div>
          </div>
        </div>
        <div className={style.header__button_wrapper}>
          {
            isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP || (
              isAuth
                ? (
                  <Button
                    imageLeft="user_fill.svg"
                    imageHeight={24}
                    imageWidth={24}
                    className={style.header__user_auth}
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
            )
          }
          {
            isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP || (
              isAuth && (
                <Button
                  type="button"
                  className={style.header__button_orders}
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
            )
          }
          {
            isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP || (
              <div className={style.header__button_basket_wrapper}>
                <MenuButtonBasket
                  itemsInTheBasket={itemsInTheBasket}
                  windowWidth={windowWidth}
                />
              </div>
            )
          }
        </div>
      </div>
      <div className={classNames(
        style.header__nav_wrapper,
        { [style.header__nav_wrapper_scroll]: scroll >= ONE_HUNDRED_PIXEL_SCROLL },
      )}
      >
        <nav className={style.header__nav}>
          {isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP || (
            <Button
              isGrayTheme
              className={style.header__button_products_menu}
              type="button"
              imageRight={
                isProductsMenuActive
                  ? "property_expand_up.svg"
                  : "property_expand_down.svg"
              }
              imageHeight={24}
              imageWidth={24}
              onClick={onProductsMenuClick}
            >
              Меню
            </Button>
          )}
          <div className={classNames(
            style.list_wrapper,
            {
              [style.list_wrapper_scroll]: scroll >= ONE_HUNDRED_PIXEL_SCROLL,
              [style.list_wrapper__open]: isProductsMenuActive,
              [style.list_wrapper__open_button_menu]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP,
            },
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
              classNameList={
                isProductsMenuActive
                  ? style.header__products_list__open
                  : style.header__products_list
              }
              classNameItem={
                isProductsMenuActive
                  ? style.header__products_item__open
                  : style.header__products_item
              }
              items={PRODUCTS}
            />
            <div className={style.header__vertical_line} />
            {
              (scroll >= ONE_HUNDRED_PIXEL_SCROLL && windowWidth >= ViewPorts.DESKTOP)
                ? (
                  <>
                    <List
                      isLink
                      classNameList={style.header__info_list_scroll}
                      classNameItem={style.header__info_item_scroll}
                      items={INFO}
                    />
                    <Button
                      className={style.header__button_more}
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
                    classNameList={
                      isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP
                        ? style.header__info_list__open
                        : style.header__info_list
                    }
                    classNameItem={
                      isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP
                        ? style.header__info_item__open
                        : style.header__info_item
                    }
                    items={INFO}
                  />
                )
            }
          </div>
          <div className={style.header__button_wrapper}>
            {isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP || (
              <Button
                className={style.header__button_create_poke}
                type="button"
                isGrayTheme
                onClick={() => { console.log('Button Create'); }}
              >
                Создать поке
              </Button>
            )}

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
