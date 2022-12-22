import { number } from '@storybook/addon-knobs';
import { IAmountProduct } from 'app/store/reducers/amountProduct';
import { openBasket } from 'entities/basket/model';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Input from 'shared/ui/Input/Input';

import style from './BasketSumm.module.scss';

export interface BasketSummProps {
  basket: IAmountProduct[];
  totalCost: number;
  costOfDelivery: number;
}

const BasketSumm: FC<BasketSummProps> = (props) => {
  const {
    basket,
    totalCost,
    costOfDelivery,
  } = props;

  return (
    <div className={style.basket_summ_wrapper}>
      <div className={style.product_amount}>
        <span className={style.text}>{`${basket.length} товара`}</span>
        <span className={style.cost}>{`${totalCost} ₽`}</span>
      </div>
      <div className={style.cost_of_delivery}>
        <span className={style.text}>Доставка</span>
        <span className={style.cost}>{`${costOfDelivery} ₽`}</span>
      </div>
      <div className={style.basket_summ}>
        <span>Сумма заказа</span>
        <span>{`${totalCost + costOfDelivery} ₽`}</span>
      </div>
      <Input
        className={style.order_commet}
        classNameWrapper={style.input_wrapper}
        label=''
        name=''
        placeholder='Комментарий к заказу'
      />
    </div>
  )
};

export default BasketSumm;
