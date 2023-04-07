import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { openBasketSelector, BasketCard } from 'entities/basket';

import style from './ShowOrder.module.scss';

export const ShowOrder: FC = () => {
  const basket = useSelector(openBasketSelector);
  console.log(basket);
  return (
    <div className={style.userOrder}>
      <>
        <h3>Ваш улов</h3>
        {
          basket.basket && basket.basket.map((product) => {
            const id = nanoid();

            return (
              <BasketCard
                key={id}
                product={product}
              />
            )
          })
        }
      </>
    </div>
  )
};
