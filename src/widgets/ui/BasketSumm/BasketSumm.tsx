import React, { FC } from 'react';

import Input from 'shared/ui/Input/Input';

import style from './BasketSumm.module.scss';

export interface BasketSummProps {
}

const BasketSumm: FC<BasketSummProps> = (props) => {

  return (
    <div className={style.basket_summ_wrapper}>
      <div className={style.product_amount}>
        <span className={style.text}>2 товара</span>
        <span className={style.cost}>₽</span>
      </div>
      <div className={style.cost_of_delivery}>
        <span className={style.text}>Доставка</span>
        <span className={style.cost}>₽</span>
      </div>
      <div className={style.basket_summ}>
        <span>Сумма заказа</span>
        <span>₽</span>
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
