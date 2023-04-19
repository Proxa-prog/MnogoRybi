import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { openBasketSelector, BasketCard } from 'entities/basket';

import style from './ShowOrder.module.scss';

export const ShowOrder: FC = () => {
  const basket = useSelector(openBasketSelector);

  return (
    <div className={style.userOrder}>
      <>
        <h3>Ваш улов</h3>
        {
          basket.basket && basket.basket.map((product, index) => {

            return (
              <BasketCard
                key={index}
                product={product}
              />
            )
          })
        }
      </>
    </div>
  )
};
