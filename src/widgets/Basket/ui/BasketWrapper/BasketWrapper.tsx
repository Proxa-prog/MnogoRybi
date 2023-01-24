import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch } from 'app/store';

import { Basket } from 'widgets/Basket';

import { openBasketSelector, openBasketBlock } from 'entities/basket';

import { Button } from 'shared';

import style from './BasketWrapper.module.scss';


export interface BasketWrapperProps {
}

const BasketWrapper: FC<BasketWrapperProps> = (props) => {
  const dispatch = useAppDispatch();
  const basket = useSelector(openBasketSelector);
  const cardWrapperId = nanoid();
  const buttonCloseId = nanoid();

  const handleBackgroundClick = (event: any) => {
    if (event.target.id === cardWrapperId ||
      event.target.id === buttonCloseId
    ) {
      dispatch(openBasketBlock(basket.isBasketOpen));
    }
  };

  return (
    <>
      {
        basket.isBasketOpen && (
          <div
            className={style.basket_wrapper}
            id={cardWrapperId}
            onClick={handleBackgroundClick}
          >
            <Button
              id={buttonCloseId}
              className={style.button_close}
              isClose='close'
              type='button'
            />
            <Basket />
          </div>
        )
      }
    </>
  )
}

export default BasketWrapper;
