import React, { FC } from "react";
import { useSelector } from "react-redux";

import { openBasketSelector, setTotalCost } from "entities/basket";
import {
  ONE_HUNDRED_PIXEL_SCROLL,
  ViewPorts,
  Button,
  StatusMarker,
} from "shared";

import style from "./MenuButtonBasket.module.scss";

interface MenuButtonBasketProps {
  itemsInTheBasket: number | undefined;
  scroll?: number;
  windowWidth: number;
  onBasketButtonClick?: () => void;
  onClick?: () => void;
}

export const MenuButtonBasket: FC<MenuButtonBasketProps> = (props) => {
  const {
    itemsInTheBasket,
    scroll,
    windowWidth,
    onBasketButtonClick,
    onClick,
  } = props;

  const basket = useSelector(openBasketSelector);
  const totalCost = setTotalCost(basket.basket);

  if (scroll && scroll > 0 && windowWidth >= ViewPorts.DESKTOP) {
    return (
      <Button
        buttonName='Корзина'
        childrenWrapperClassName="buttonTextWrapper"
        className={
          scroll && scroll >= ONE_HUNDRED_PIXEL_SCROLL
            ? style.buttonBasketScroll
            : style.buttonBasket
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
      {itemsInTheBasket ? (
        <StatusMarker
          key={0}
          color="blue"
          className={style.amountItems}
        >
          {itemsInTheBasket}
        </StatusMarker>
      ) : (
        <StatusMarker
          key={0}
          color="blue"
          className={style.amountItems}
        >
          {basket.basket.length}
        </StatusMarker>
      )}
      <Button
        buttonName='Корзина'
        childrenWrapperClassName="buttonTextWrapper"
        className={
          scroll && scroll >= ONE_HUNDRED_PIXEL_SCROLL
            ? style.buttonBasketScroll
            : style.buttonBasket
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
