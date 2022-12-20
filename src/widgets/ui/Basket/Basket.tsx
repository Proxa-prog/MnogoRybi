import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import { openBasket } from 'entities/basket/model';

import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import Select from 'shared/ui/Select/Select';

import style from './Basket.module.scss';
import Checkbox from 'shared/ui/Checkbox/Checkbox';
import Delivery from '../Delivery/Delivery';
import Payment from '../Payment/Payment';
import Recipient from '../Recipient/Recipient';

export interface BasketProps {
}

const Basket: FC<BasketProps> = (props) => {
  const dispatch = useAppDispatch();
  const basket = useSelector(openBasket);
  console.log(basket);

  return (
    <div className={style.basket_wrapper}>
      <div className={style.basket_info}>
        <div className={style.user_order}>
          <h3>Ваш улов</h3>
        </div>
        <Recipient />
        <Delivery />
        <Payment />
      </div>
      <div className={style.basket_summ}>

      </div>
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
