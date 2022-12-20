import React, { FC } from "react";

import classNames from "classnames";

import ImageWrapper from "shared/ui/ImageWrapper/ImageWrapper";
import LabelText from "shared/ui/LabelText/LabelText";
import Select from "shared/ui/Select/Select";
import Button from "shared/ui/Button/Button";

import MenuButtonBasket from "widgets/ui/MenuButtonBasket/MenuButtonBasket";

import {
  PRODUCTS,
  ViewPorts
} from "entities/constants/constants";

import style from 'widgets/ui/Header/Header.module.scss';

interface HeaderOrderDataWrapperProps {
  isHeaderMenuActive: boolean;
  windowWidth: number;
  isAuth: boolean;
  itemsInTheBasket: any;
  onHeaderMenuClick: () => void;
  onClick?: () => void;
  onBasketButtonClick?: () => void;
}

const HeaderOrderDataWrapper: FC<HeaderOrderDataWrapperProps> = (props) => {
  const {
    isHeaderMenuActive,
    windowWidth,
    isAuth,
    itemsInTheBasket,
    onHeaderMenuClick,
    onClick,
    onBasketButtonClick,
  } = props;

  return (
    <div className={classNames(
      style.header__order_data_wrapper,
      { [style.header__order_data_wrapper__open]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP },
    )}>
      <Button
        isGrayTheme={isHeaderMenuActive && true}
        imageLeft={
          isHeaderMenuActive
            ? "property_close_round.svg"
            : "property_menu.svg"
        }
        imageHeight={24}
        imageWidth={24}
        className={classNames(
          style.header_menu_button,
          { [style.header_menu_button__open]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP }
        )}
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

      <div className={classNames(
        style.header__order_data,
        { [style.header__order_data__open]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP }
      )}>
        <div className={classNames(
          style.header__info_wrapper,
          { [style.header__info_wrapper__open]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP }
        )}>
          <div className={classNames(
            style.header__info,
            { [style.header__info__open]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP }
          )}>
            <LabelText>Доставка по адресу</LabelText>
            <Select
              options={PRODUCTS}
              promptOption="Адрес не выбран"
            />
          </div>
          <div className={classNames(
            style.header__info,
            { [style.header__info__open]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP }
          )}>
            <LabelText>Принимаем заказы</LabelText>
            <span>9:00-24:00</span>
          </div>
          <div className={classNames(
            style.header__info,
            { [style.header__info__open]: isHeaderMenuActive && windowWidth < ViewPorts.DESKTOP }
          )}>
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
                onBasketButtonClick={onBasketButtonClick}
              />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default HeaderOrderDataWrapper;
