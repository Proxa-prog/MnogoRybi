import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { openBasket } from 'entities/basket/model';

import Button from 'shared/ui/Button/Button';

import Delivery from 'widgets/ui/Delivery/Delivery';
import Payment from 'widgets/ui/Payment/Payment';
import Recipient from 'widgets/ui/Recipient/Recipient';
import BasketSumm from 'widgets/ui/BasketSumm/BasketSumm';

import style from './Basket.module.scss';
import ShowOrder from '../ShowOrder/ShowOrder';

export interface BasketProps {
}

const Basket: FC<BasketProps> = (props) => {
  const basket = useSelector(openBasket);

  return (
    <div className={style.basket_wrapper}>
      <div className={style.basket_info}>
        <ShowOrder />
        <Recipient />
        <Delivery />
        <Payment />
      </div>
      <BasketSumm />
      <div className={style.button_to_order_wrapper}>
        <Button
          className={style.button_to_order}
          type='button'
          color='yellow'
          children={`Заказать на ${basket.isBasketOpen} ₽`}
        />
      </div>
    </div>
  )
}

export default Basket;
