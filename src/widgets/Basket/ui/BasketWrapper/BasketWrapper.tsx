import React, { FC } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { useAppDispatch } from "app/store";

import { Basket } from "widgets/Basket";

import { openBasketSelector, basketActions } from "entities/basket";

import { Button } from "shared";

import style from "./BasketWrapper.module.scss";

export const BasketWrapper: FC = () => {
  const dispatch = useAppDispatch();
  const basket = useSelector(openBasketSelector);
  const cardWrapperId = nanoid();
  const buttonCloseId = nanoid();

  const handleBackgroundClick = (event: any) => {
    if (
      event.target.id === cardWrapperId ||
      event.target.id === buttonCloseId
    ) {
      dispatch(basketActions.openBasketBlock(basket.isBasketOpen));
    }
  };

  return (
    <>
      {basket.isBasketOpen && (
        <div
          className={style.wrapper}
          id={cardWrapperId}
          onClick={handleBackgroundClick}
        >
          <Button
            id={buttonCloseId}
            className={style.buttonClose}
            isClose="close"
            type="button"
          />
          <Basket />
        </div>
      )}
    </>
  );
};
