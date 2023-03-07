import React, {FC} from "react";

import {Button} from "shared";

import style from "./AddCreatedPoke.module.scss";
import ProductCounter from "../../../../entities/counter/ui/ProductCounter/ProductCounter";
import {addProductInBasket, setAmountProduct, setCostProduct} from "../../../../entities/basket";
import {nanoid} from "@reduxjs/toolkit";
import {useAppDispatch} from "../../../../app/store";

const AddCreatedPoke: FC = () => {
  const dispatch = useAppDispatch();

  // Увеличить количество товараx
  const addAmountProduct = () => {
    // const addAmount = amountProduct.amount + 1;
    // const addCost = Number(productsCard.cost) * addAmount;
    //
    // dispatch(setAmountProduct(addAmount));
    // dispatch(setCostProduct(addCost));
  };

  // Уменьшить количество товара
  const removeAmountProduct = () => {
    // if (amountProduct.amount > 1) {
    //   const addAmount = amountProduct.amount - 1;
    //   const addCost = Number(productsCard.cost) * addAmount;
    //
    //   dispatch(setAmountProduct(addAmount));
    //   dispatch(setCostProduct(addCost));
    // }
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
          amount={0}
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
