import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { openBasket } from 'entities/basket/model';

import BasketCard from 'widgets/ui/BasketCard/BasketCard';

import style from './ShowOrder.module.scss';

export interface ShowOrderProps {
}

const ShowOrder: FC<ShowOrderProps> = (props) => {
  const basket = useSelector(openBasket);

  return (
    <div className={style.user_order}>
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

export default ShowOrder;
