import React, {FC, useEffect} from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { useAppDispatch } from "app/store";

import { Button } from "shared";

import { constructorSelector } from "entities/constructor";
import { ProductCounter } from "entities/counter";
import {
  setAmountOfProductsInConstructor,
  setCostOfProductsInConstructor,
  getAmountConstructorProductSelector,
  addProductInBasket, openBasketSelector,
} from "entities/basket";

import style from "./AddCreatedPoke.module.scss";

const AddCreatedPoke: FC = () => {
  const dispatch = useAppDispatch();
  const amountOfProductsInConstructor = useSelector(getAmountConstructorProductSelector);
  const constructor = useSelector(constructorSelector);

  // Увеличить количество товара
  const addAmountProduct = () => {
    const addAmount = amountOfProductsInConstructor.amount + 1;
    const addCost = amountOfProductsInConstructor.baseCost * addAmount;

    dispatch(setAmountOfProductsInConstructor(addAmount));
    dispatch(setCostOfProductsInConstructor(addCost));
  };

  // Уменьшить количество товара
  const removeAmountProduct = () => {
    if (amountOfProductsInConstructor.amount > 0) {
      const addAmount = amountOfProductsInConstructor.amount - 1;
      const addCost = amountOfProductsInConstructor.baseCost * addAmount;

      dispatch(setAmountOfProductsInConstructor(addAmount));
      dispatch(setCostOfProductsInConstructor(addCost));
    }
  };

  // Добавить товар в корзину
  const addProductOnBasket = () => {
    const id = nanoid();

    dispatch(
      addProductInBasket({
        name: '',
        amount: amountOfProductsInConstructor.amount,
        cost: amountOfProductsInConstructor.cost,
        baseCost: amountOfProductsInConstructor.baseCost,
        baseProduct: constructor.baseProduct?.name,
        sauce: constructor.sauce?.name,
        crunch: constructor.crunch?.name,
        protein: constructor.protein?.name,
        fillers: constructor.fillers?.type,
        topping: constructor.topping?.type,
        additionally: constructor.additionally,
        id: id,
      })
    );
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
          amount={amountOfProductsInConstructor.amount}
        />
        <Button
          className={style.button_basket}
          type="button"
          color="yellow"
          children={`В корзину за ${amountOfProductsInConstructor.cost} ₽`}
          onClick={addProductOnBasket}
        />
      </div>
    </div>
  )
};

export default AddCreatedPoke;
