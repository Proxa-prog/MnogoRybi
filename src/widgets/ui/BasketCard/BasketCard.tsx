import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import {
  IAmountProduct,
  setAmountProduct,
  setCostProduct
} from 'app/store/reducers/amountProduct';

import Svg from 'shared/ui/Svg/Svg';
import Button from 'shared/ui/Button/Button';

import ProductCounter from 'widgets/ui/ProductCounter/ProductCounter';

import { openProductsCard } from 'entities/openProductsCard/model/selectors';
import { getAmountProduct } from 'entities/amountProduct/model';

import style from './BasketCard.module.scss';
import { changeAmount, changeCost } from 'app/store/reducers/basket';
import { openBasket } from 'entities/basket/model';

export interface BasketCardProps {
  product: IAmountProduct;
}

const BasketCard: FC<BasketCardProps> = (props) => {
  const {
    product,
  } = props;

  const dispatch = useDispatch();


  // Увеличить количество товара в корзине
  const addAmountProduct = () => {
    const addAmount = product.amount + 1;
    const addCost = Number(product.baseCost) * addAmount;

    dispatch(changeAmount({addAmount: addAmount, id: product.id}));
    dispatch(changeCost({addCost: addCost, id: product.id}));
  };

  // Уменьшить количество товара в корзине
  const removeAmountProduct = () => {
    if (product.amount > 1) {
      const addAmount = product.amount - 1;
      const addCost = Number(product.baseCost) * addAmount;

      dispatch(changeAmount({addAmount: addAmount, id: product.id}));
      dispatch(changeCost({addCost: addCost, id: product.id}));
    }
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
            type='button'
          >
            <Svg
              name='trash'
              width='24'
              height='24'
            />
          </Button>
        </div>
      </div>
      <hr />
      <div className={classNames(
        style.basket_card,
        style.amount,
      )}>
        <span>{`${product.cost} ₽`}</span>
        <ProductCounter
          wrapperClassName={style.counter_wrapper}
          removeAmountProduct={removeAmountProduct}
          addAmountProduct={addAmountProduct}
          amount={product.amount}
        />
      </div>
    </div>
  )
};

export default BasketCard;
