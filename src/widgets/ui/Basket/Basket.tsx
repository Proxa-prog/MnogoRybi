import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { openBasket } from 'entities/basket/model';

import Button from 'shared/ui/Button/Button';

import Delivery from 'widgets/ui/Delivery/Delivery';
import Payment from 'widgets/ui/Payment/Payment';
import Recipient from 'widgets/ui/Recipient/Recipient';
import BasketSumm from 'widgets/ui/BasketSumm/BasketSumm';
import ShowOrder from 'widgets/ui/ShowOrder/ShowOrder';

import style from './Basket.module.scss';

export interface BasketProps {
}

const Basket: FC<BasketProps> = (props) => {
  const basket = useSelector(openBasket);
  const costOfDelivery = 200;

  const setTotalCost = () => {
    return basket.basket.reduce((totalCost, currentValue) => {

      return totalCost + Number(currentValue.cost);
    }, 0);
  };

  const totalCost = setTotalCost();
console.log(basket);

  return (
    <div className={style.basket_wrapper}>
      <div className={style.basket_info}>
        <ShowOrder />
        <Recipient />
        <Delivery />
        <Payment />
      </div>
      <BasketSumm
        basket={basket.basket}
        totalCost={totalCost}
        costOfDelivery={costOfDelivery}
      />
      <div className={style.button_to_order_wrapper}>
        <Button
          className={style.button_to_order}
          type='button'
          color='yellow'
          children={
            totalCost === 0
              ? `Заказать на ${totalCost} ₽`
              : `Заказать на ${totalCost + costOfDelivery} ₽`
          }
        />
      </div>
    </div>
  )
}

export default Basket;
