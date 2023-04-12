import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { IAmountProduct, basketActions } from 'entities/basket';

import { Input } from 'shared/ui/Input/Input';

import style from './BasketSumm.module.scss';

export interface BasketSummProps {
  basket: IAmountProduct[];
  totalCost: number;
  costOfDelivery: number;
}

export const BasketSumm: FC<BasketSummProps> = (props) => {
  const {
    basket,
    totalCost,
    costOfDelivery
  } = props;
  const dispatch = useDispatch();

  const handlerChangeInputComment = (comment: string | undefined) => {
    dispatch(basketActions.addComment(comment));
  };

  return (
    <div className={style.basketSummWrapper}>
      <div className={style.productAmount}>
        <span className={style.text}>{`${basket.length} товара`}</span>
        <span className={style.cost}>{`${totalCost} ₽`}</span>
      </div>
      <div className={style.costOfDelivery}>
        <span className={style.text}>Доставка</span>
        <span className={style.cost}>{`${costOfDelivery} ₽`}</span>
      </div>
      <div className={style.basketSumm}>
        <span>Сумма заказа</span>
        <span>{`${totalCost + costOfDelivery} ₽`}</span>
      </div>
      <Input
        className={style.orderComment}
        classNameWrapper={style.inputWrapper}
        label=''
        name='Комментарий'
        placeholder='Комментарий к заказу'
        onChange={handlerChangeInputComment}
      />
    </div>
  );
};
