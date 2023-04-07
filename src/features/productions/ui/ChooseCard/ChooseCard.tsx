import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';

import { useAppDispatch } from 'app/store';

import { openProductsCardSelector } from 'features/productions';
import { getRestaurantProductionsSelector } from 'features/restaurant';

import {
  getAmountProductSelector,
  basketActions,
  amountProductActions,
} from 'entities/basket';
import { ProductCounter } from 'entities/counter';

import {
  Select,
  LabelText,
  StatusMarker,
  Button,
  StatusMarkerProps,
} from 'shared';

import style from './ChooseCard.module.scss';

export const ChooseCard: FC = () => {
  const dispatch = useAppDispatch();
  const productsCard = useSelector(openProductsCardSelector);
  const amountProduct = useSelector(getAmountProductSelector);
  const restaurantProductions = useSelector(getRestaurantProductionsSelector);

  // Увеличить количество товара
  const addAmountProduct = () => {
    const addAmount = amountProduct.amount + 1;
    const addCost = Number(productsCard.cost) * addAmount;

    dispatch(amountProductActions.setAmountProduct(addAmount));
    dispatch(amountProductActions.setCostProduct(addCost));
  };

  // Уменьшить количество товара
  const removeAmountProduct = () => {
    if (amountProduct.amount > 1) {
      const addAmount = amountProduct.amount - 1;
      const addCost = Number(productsCard.cost) * addAmount;

      dispatch(amountProductActions.setAmountProduct(addAmount));
      dispatch(amountProductActions.setCostProduct(addCost));
    }
  };

  // Добавить товар в корзину
  const addProductOnBasket = () => {
    const id = nanoid();

    dispatch(
      basketActions.addProductInBasket({
        name: amountProduct.name,
        amount: amountProduct.amount,
        cost: amountProduct.cost,
        baseCost: Number(productsCard.cost),
        baseProduct: amountProduct.baseProduct,
        sauce: amountProduct.sauce,
        imageUrl: productsCard.imageUrl,
        description: productsCard.description,
        id: id,
      })
    );
  };

  // Установить значение основы блюда
  const changeBaseProduct = (baseProd: string) => {
    dispatch(amountProductActions.setBaseProduct(baseProd));
  };

  // Установить значение соуса
  const changeSauce = (sauce: string) => {
    dispatch(amountProductActions.setSauce(sauce));
  };

  useEffect(() => {
    dispatch(
      amountProductActions.setNewProduct({
        name: productsCard.header,
        amount: 1,
        cost: Number(productsCard.cost),
        imageUrl: productsCard.imageUrl,
        baseCost: 0,
      })
    );
    dispatch(
      amountProductActions.setBaseProduct(
        restaurantProductions.baseProduct[0].name
      )
    );
    dispatch(
      amountProductActions.setSauce(restaurantProductions.sauce[0].name)
    );
  }, []);

  return (
    <div className={style.chooseCard}>
      <div
        className={style.image}
        style={{
          backgroundImage: `url(images/${productsCard.imageUrl})`,
        }}
      >
        <div className={style.statusesWrapper}>
          {productsCard.statuses &&
            productsCard.statuses.map((status: StatusMarkerProps) => {
              const id = nanoid();

              return (
                <StatusMarker
                  key={id}
                  color={status.color}
                  className={style.cardStatus}
                >
                  {status.children}
                </StatusMarker>
              );
            })}
        </div>
      </div>
      <div className={style.infoWrapper}>
        <div className={style.info}>
          <h3>{productsCard.header}</h3>

          <div className={style.calories}>
            <span>1 шт. / 320 гр.</span>
            <span>280 ккал / 1172 кДж</span>
          </div>

          <div className={style.compound}>
            <h4>Состав</h4>
            <span>{productsCard.description}</span>
          </div>

          <div className={style.ingredients}>
            <LabelText
              children='Выберите основу'
              className={style.ingredientsLabel}
            />
            <Select
              options={restaurantProductions.baseProduct}
              promptOption={restaurantProductions.baseProduct[0].name}
              className={style.ingredients_select}
              onChange={changeBaseProduct}
            />

            <LabelText
              children='Выберите соус'
              className={classNames(style.ingredientsLabel, style.sauceLabel)}
            />
            <Select
              options={restaurantProductions.sauce}
              promptOption={restaurantProductions.sauce[0].name}
              className={style.ingredients_select}
              onChange={changeSauce}
            />
          </div>
        </div>
        <div className={style.amountWrapper}>
          <ProductCounter
            removeAmountProduct={removeAmountProduct}
            addAmountProduct={addAmountProduct}
            amount={amountProduct.amount}
          />
          <Button
            type='button'
            color='yellow'
            children={`В корзину за ${amountProduct.cost} ₽`}
            onClick={addProductOnBasket}
          />
        </div>
      </div>
    </div>
  );
};
