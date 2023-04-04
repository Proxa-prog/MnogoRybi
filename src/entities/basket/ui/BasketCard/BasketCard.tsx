import React, { FC } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";

import {
  basketActions,
  IAmountProduct,
} from "entities/basket";

import { ProductCounter } from "entities/counter";

import { Svg, Button } from "shared";

import style from "./BasketCard.module.scss";

export interface BasketCardProps {
  product: IAmountProduct;
}

const BasketCard: FC<BasketCardProps> = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  // Увеличить количество товара в корзине
  const handlerButtonAddAmountProduct = () => {
    const addAmount = product.amount + 1;
    const addCost = Number(product.baseCost) * addAmount;

    dispatch(basketActions.changeAmount({ addAmount: addAmount, id: product.id }));
    dispatch(basketActions.changeCost({ addCost: addCost, id: product.id }));
  };

  // Уменьшить количество товара в корзине
  const handlerButtonRemoveAmountProduct = () => {
    if (product.amount > 1) {
      const addAmount = product.amount - 1;
      const addCost = Number(product.baseCost) * addAmount;

      dispatch(basketActions.changeAmount({ addAmount: addAmount, id: product.id }));
      dispatch(basketActions.changeCost({ addCost: addCost, id: product.id }));
    }
  };

  // Удалить товар в корзине
  const handlerButtonRemoveProduct = () => {
    dispatch(basketActions.removeProduct(product.id));
  };

  return (
    <div className={style.basket_card_wrapper}>
      <div className={style.basket_card}>
        <img
          className={style.product_image}
          src={`images/${product.imageUrl}`}
          alt="Ваш заказ"
          width={120}
          height={100}
        />
        <div className={style.description_wrapper}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <div className={style.trash_wrapper}>
          <Button
            className={style.trash_button}
            type="button"
            onClick={handlerButtonRemoveProduct}
          >
            <Svg name="trash" width="24" height="24" />
          </Button>
        </div>
      </div>
      <hr />
      <div className={classNames(style.basket_card, style.amount)}>
        <span>{`${product.cost} ₽`}</span>
        <ProductCounter
          wrapperClassName={style.counter_wrapper}
          removeAmountProduct={handlerButtonRemoveAmountProduct}
          addAmountProduct={handlerButtonAddAmountProduct}
          amount={product.amount}
        />
      </div>
    </div>
  );
};

export default BasketCard;
