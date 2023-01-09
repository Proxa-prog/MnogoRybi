import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Button from 'shared/ui/Button/Button';
import StatusMarker from 'shared/ui/StatusMarker/StatusMarker';

import { openBasket } from 'entities/basket/model';
import { setTotalCost } from 'entities/setTotalCost';
import {
  ONE_HUNDRED_PIXEL_SCROLL,
  ViewPorts
} from 'entities/constants/constants';

import style from 'widgets/ui/Header/Header.module.scss';

interface MenuButtonBasketProps {
  itemsInTheBasket: number;
  scroll?: number;
  windowWidth: number;
  onBasketButtonClick?: () => void;
  onClick?: () => void;
}

const MenuButtonBasket: FC<MenuButtonBasketProps> = (props) => {
  const {
    itemsInTheBasket,
    scroll,
    windowWidth,
    onBasketButtonClick,
    onClick,
  } = props;

  const basket = useSelector(openBasket);
  const totalCost = setTotalCost(basket.basket);

  if (
    scroll
    && scroll > 0
    && windowWidth >= ViewPorts.DESKTOP
  ) {

    return (
      <Button
        childrenWrapperClassName="button__text_wrapper"
        className={
          (scroll && scroll >= ONE_HUNDRED_PIXEL_SCROLL)
            ? style.header__button_basket_scroll
            : style.header__button_basket
        }
        type="button"
        color="yellow"
        imageLeft="property_bag_alt_fill.svg"
        onClick={onBasketButtonClick}
      >
        {totalCost} &#8381;
      </Button>
    );
  }

  return (
    <>
      {
        (itemsInTheBasket)
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
              {basket.basket.length}
            </StatusMarker>
          )
      }
      <Button
        childrenWrapperClassName="button__text_wrapper"
        className={
          (scroll && scroll >= ONE_HUNDRED_PIXEL_SCROLL)
            ? style.header__button_basket_scroll
            : style.header__button_basket
        }
        type="button"
        color="yellow"
        imageLeft="property_bag_alt_fill.svg"
        onClick={onBasketButtonClick}
      >
        {totalCost} &#8381;
      </Button>
    </>
  );
};

export default MenuButtonBasket;
