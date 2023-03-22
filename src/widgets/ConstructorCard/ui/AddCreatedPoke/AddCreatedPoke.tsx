import React, {FC} from "react";
import { nanoid } from "@reduxjs/toolkit";

import { Button } from "shared";

import { ProductCounter } from "entities/counter";
import {
  addProductInBasket, getAmountProductSelector,
  setAmountConstructorProduct,
  setAmountProduct,
  setCostProduct
} from "../../../../entities/basket";
import { useAppDispatch } from "app/store";

import style from "./AddCreatedPoke.module.scss";
import {useSelector} from "react-redux";
import {
  getAmountConstructorProductSelector
} from "../../../../entities/basket/model/selectors/getAmountProductSelector";

const AddCreatedPoke: FC = () => {
  const dispatch = useAppDispatch();
  const amountConstructorProduct = useSelector(getAmountConstructorProductSelector);

  // Увеличить количество товараx
  const addAmountProduct = () => {
    const addAmount = amountConstructorProduct.amount + 1;
    // const addCost = Number(productsCard.cost) * addAmount;

    dispatch(setAmountConstructorProduct(addAmount));
    // dispatch(setCostProduct(addCost));
  };

  // Уменьшить количество товара
  const removeAmountProduct = () => {
    if (amountConstructorProduct.amount > 0) {
      const addAmount = amountConstructorProduct.amount - 1;
    //   const addCost = Number(productsCard.cost) * addAmount;
    //
      dispatch(setAmountConstructorProduct(addAmount));
    //   dispatch(setCostProduct(addCost));
    }
  };

  // Добавить товар в корзину
  const addProductOnBasket = () => {
    const id = nanoid();

    // dispatch(
    //   // addProductInBasket({
    //   //   name: amountProduct.name,
    //   //   amount: amountProduct.amount,
    //   //   cost: amountProduct.cost,
    //   //   baseCost: Number(productsCard.cost),
    //   //   baseProduct: amountProduct.baseProduct,
    //   //   sauce: amountProduct.sauce,
    //   //   imageUrl: productsCard.imageUrl,
    //   //   description: productsCard.description,
    //   //   id: id,
    //   // })
    // );
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header_wrapper}>
        <h3>Готово</h3>
        <span>Вы создали свой идеальный поке</span>
      </div>
      <div className={style.button_wrapper}>
        <ProductCounter
          wrapperClassName={style.counter_wrapper}
          removeAmountProduct={removeAmountProduct}
          addAmountProduct={addAmountProduct}
          amount={amountConstructorProduct.amount}
        />
        <Button
          className={style.button_basket}
          type="button"
          color="yellow"
          children={`В корзину за ${0} ₽`}
          onClick={addProductOnBasket}
        />
      </div>
    </div>
  )
};

export default AddCreatedPoke;
