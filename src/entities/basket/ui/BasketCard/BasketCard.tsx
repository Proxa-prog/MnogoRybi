import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { basketActions, BasketCardProps } from 'entities/basket';
import { ProductCounter } from 'entities/counter';

import { Svg, Button } from 'shared';

import style from './BasketCard.module.scss';

export const BasketCard: FC<BasketCardProps> = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  // Увеличить количество товара в корзине
  const handlerButtonAddAmountProduct = () => {
    const addAmount = product.amount + 1;
    const addCost = Number(product.baseCost) * addAmount;

    dispatch(basketActions.changeAmount({
      addAmount: addAmount,
      id: product.id,
    }));
    dispatch(basketActions.changeCost({
      addCost: addCost,
      id: product.id,
    }));
  };

  // Уменьшить количество товара в корзине
  const handlerButtonRemoveAmountProduct = () => {
    if (product.amount > 1) {
      const addAmount = product.amount - 1;
      const addCost = Number(product.baseCost) * addAmount;

      dispatch(basketActions.changeAmount({
        addAmount: addAmount,
        id: product.id,
      }));
      dispatch(basketActions.changeCost({
        addCost: addCost,
        id: product.id,
      }));
    }
  };

  // Удалить товар в корзине
  const handlerButtonRemoveProduct = () => {
    dispatch(basketActions.removeProduct(product.id));
  };

  return (
    <div className={style.basketCardWrapper}>
      <div className={style.basketCard}>
        <img
          className={style.productImage}
          src={`images/${product.imageUrl}`}
          alt='Ваш заказ'
          width={120}
          height={100}
        />
        <div className={style.descriptionWrapper}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <div className={style.trashWrapper}>
          <Button
            className={style.trashButton}
            type='button'
            onClick={handlerButtonRemoveProduct}
          >
            <Svg name='trash' width='24' height='24' />
          </Button>
        </div>
      </div>
      <hr />
      <div className={classNames(style.basketCard, style.amount)}>
        <span>{`${product.cost} ₽`}</span>
        <ProductCounter
          wrapperClassName={style.counterWrapper}
          removeAmountProduct={handlerButtonRemoveAmountProduct}
          addAmountProduct={handlerButtonAddAmountProduct}
          amount={product.amount}
        />
      </div>
    </div>
  );
};
