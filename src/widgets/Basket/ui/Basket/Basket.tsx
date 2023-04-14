import React, { FC } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "app/store";

import { Delivery } from "widgets/Delivery";
import { Payment } from "widgets/Payment";
import { Recipient } from "widgets/Recipient";

import { userAccountSelector } from "entities/user";
import {
  openBasketSelector,
  setTotalCost,
  addOrderToUser,
  BasketSumm,
  ShowOrder,
} from "entities/basket";

import { COST_OF_DELIVERY, Button } from "shared";

import style from "./Basket.module.scss";

export const Basket: FC = () => {
  const dispatch = useAppDispatch();
  const basket = useSelector(openBasketSelector);
  const userAccount = useSelector(userAccountSelector);
  const totalCost = setTotalCost(basket.basket);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      addOrderToUser({
        userEmail: userAccount.userAccount.email,
        basket: basket,
      })
    );
  };

  return (
    <form
      className={style.wrapper}
      onSubmit={handleSubmit}
    >
      <div className={style.info}>
        <ShowOrder />
        <Recipient />
        <Delivery />
        <Payment />
      </div>
      <BasketSumm
        basket={basket.basket}
        totalCost={totalCost}
        costOfDelivery={COST_OF_DELIVERY}
      />
      <div className={style.buttonToOrderWrapper}>
        <Button
          className={style.buttonToOrder}
          type="submit"
          color="yellow"
          children={
            totalCost === 0
              ? `Заказать на ${totalCost} ₽`
              : `Заказать на ${totalCost + COST_OF_DELIVERY} ₽`
          }
          onClick={() => {}}
        />
      </div>
    </form>
  );
};
