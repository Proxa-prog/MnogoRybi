import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';

import { useAppDispatch } from 'app/store';

import {
  setNewProduct,
  setBaseProduct,
  setSauce,
  setAmountProduct,
  setCostProduct
} from 'entities/basket/model/slice/amountProductReduser';
import ProductCounter from 'entities/ProductCounter/ProductCounter';
import { openProductsCardSelector } from 'features/openProductsCard/model/slice/openProductsCardSelector';
import { getAmountProductSelector } from 'entities/basket/model/services/getAmountProductSelector';
import { getSiteDataSelector } from 'features/siteData/model/selectors/siteDataSelector';
import { addProductInBasket } from 'entities/basket/model/slice/basketReducer';

import Select from 'shared/ui/Select/Select';
import LabelText from 'shared/ui/LabelText/LabelText';
import StatusMarker, { StatusMarkerProps } from 'shared/ui/StatusMarker/StatusMarker';
import Button from 'shared/ui/Button/Button';

import style from './ChooseCard.module.scss';

export interface ChooseCardProps {
}

const ChooseCard: FC<ChooseCardProps> = (props) => {
  const dispatch = useAppDispatch();
  const productsCard = useSelector(openProductsCardSelector);
  const amountProduct = useSelector(getAmountProductSelector);
  const siteData = useSelector(getSiteDataSelector);

  // Увеличить количество товараx
  const addAmountProduct = () => {
    const addAmount = amountProduct.amount + 1;
    const addCost = Number(productsCard.cost) * addAmount;

    dispatch(setAmountProduct(addAmount));
    dispatch(setCostProduct(addCost));
  };

  // Уменьшить количество товара
  const removeAmountProduct = () => {
    if (amountProduct.amount > 1) {
      const addAmount = amountProduct.amount - 1;
      const addCost = Number(productsCard.cost) * addAmount;

      dispatch(setAmountProduct(addAmount));
      dispatch(setCostProduct(addCost));
    }
  };

  // Добавить товар в корзину
  const addProductOnBasket = () => {
    const id = nanoid();

    dispatch(addProductInBasket({
      name: amountProduct.name,
      amount: amountProduct.amount,
      cost: amountProduct.cost,
      baseCost: Number(productsCard.cost),
      baseProduct: amountProduct.baseProduct,
      sauce: amountProduct.sauce,
      imageUrl: productsCard.imageUrl,
      description: productsCard.description,
      id: id,
    }));
  };

  // Установить значение основы блюда
  const changeBaseProduct = (baseProd: string) => {
    dispatch(setBaseProduct(baseProd));
  };

  // Установить значение соуса
  const changeSauce = (sauce: string) => {
    dispatch(setSauce(sauce));
  };

  useEffect(() => {
    dispatch(setNewProduct({
      name: productsCard.header,
      amount: 1,
      cost: Number(productsCard.cost),
      imageUrl: productsCard.imageUrl,
    }));
    dispatch(setBaseProduct(siteData.baseProduct[0].name));
    dispatch(setSauce(siteData.sauce[0].name));
  }, []);

  return (
    <div className={style.choose_card}>
      <div
        className={style.image}
        style={{
          backgroundImage: `url(images/${productsCard.imageUrl})`,
        }}
      >
        <div className={style.statuses_wrapper}>
          {(productsCard.statuses) && productsCard.statuses.map((status: StatusMarkerProps) => {
            const id = nanoid();

            return (
              <StatusMarker
                key={id}
                color={status.color}
                className={style.card_status}
              >
                {status.children}
              </StatusMarker>
            )
          }
          )}
        </div>
      </div>
      <div className={style.info_wrapper}>
        <div className={style.info}>
          <h3>{productsCard.header}</h3>

          <div className={style.calories}>
            <span>1 шт. / 320 гр.</span>
            <span>280 ккал / 1172 кДж</span>
          </div>

          <div className={style.compaund}>
            <h4>Состав</h4>
            <span>{productsCard.description}</span>
          </div>

          <div className={style.ingredients}>
            <LabelText
              children="Выберите основу"
              className={style.ingredients_label}
            />
            <Select
              options={siteData.baseProduct}
              promptOption={siteData.baseProduct[0].name}
              className={style.ingredients_select}
              onChange={changeBaseProduct}
            />

            <LabelText
              children="Выберите соус"
              className={classNames(
                style.ingredients_label,
                style.sauce_label,
              )}
            />
            <Select
              options={siteData.sauce}
              promptOption={siteData.sauce[0].name}
              className={style.ingredients_select}
              onChange={changeSauce}
            />
          </div>
        </div>
        <div className={style.amount_wrapper}>
          <ProductCounter
            removeAmountProduct={removeAmountProduct}
            addAmountProduct={addAmountProduct}
            amount={amountProduct.amount}
          />
          <Button
            className={style.button_basket}
            type='button'
            color='yellow'
            children={`В корзину за ${amountProduct.cost} ₽`}
            onClick={addProductOnBasket}
          />
        </div>
      </div>
    </div>
  )
}

export default ChooseCard;
