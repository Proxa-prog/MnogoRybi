import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import { Delivery } from 'features/delivery';
import { Payment } from 'features/payment';
import { Recipient } from 'features/recipient';

import { setUserAccountStateSelector } from 'entities/user';
import {
  openBasketSelector,
  setTotalCost,
  addOrderToUser,
  BasketSumm,
  ShowOrder,
} from 'entities/basket';

import { COST_OF_DELIVERY, Button } from 'shared';

import style from './Basket.module.scss';

export interface BasketProps {
}

const Basket: FC<BasketProps> = (props) => {
  const dispatch = useAppDispatch();
  const basket = useSelector(openBasketSelector);
  const totalCost = setTotalCost(basket.basket);
  const userAccount = useSelector(setUserAccountStateSelector);

  console.log(basket)
  console.log('userAccount', userAccount)

  const handleSubmit = (event: any) => {
    event.preventDefault();

    dispatch(addOrderToUser({
      userEmail: userAccount.email,
      basket: basket,
    }))
  };

  return (
    <form
      className={style.basket_wrapper}
      onSubmit={handleSubmit}
    >
      <div className={style.basket_info}>
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
      <div className={style.button_to_order_wrapper}>
        <Button
          className={style.button_to_order}
          type='submit'
          color='yellow'
          children={
            totalCost === 0
              ? `Заказать на ${totalCost} ₽`
              : `Заказать на ${totalCost + COST_OF_DELIVERY} ₽`
          }
          onClick={(event) => { }}
        />
      </div>
    </form>
  )
}

export default Basket;
