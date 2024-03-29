import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';

import { getRestaurantPagesInfoSelector } from 'features/getRestaurantData';

import { openBasketSelector, basketActions } from 'entities/basket';

import { Select, Checkbox, LabelText } from 'shared';

import style from './Delivery.module.scss';

export const Delivery: FC = () => {
  const dispatch = useDispatch();
  const labelDeliveryCheckboxId = nanoid();
  const basket = useSelector(openBasketSelector);
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);
  const selectId = nanoid();
  const pickupOfGoodsSelectId = nanoid();

  const handlerChangeSelectAddress = (address: string) => {
    dispatch(basketActions.addRecipientAddress(address));
  };

  const handlerChangeCheckboxPickupOfGoods = (isTrue: boolean) => {
    return () => {
      dispatch(basketActions.changePickupOfGoods(isTrue));
    };
  };

  useEffect(() => {
    basket.recipientAddress === '' && dispatch(basketActions.addRecipientAddress(pagesInfo.restaurantAddress[0].name));
  }, []);

  return (
    <div className={style.wrapper}>
      <h4>Доставка</h4>
      <div className={style.delivery}>
        <div className={style.container}>
          <div className={style.headerWrapper}>
            <Checkbox
              id={labelDeliveryCheckboxId}
              checked
              isCircle
              onChange={() => {}}
            />
            <span>Доставка по адресу</span>
          </div>
          <p
            className={style.checkboxLabel}
            id={labelDeliveryCheckboxId}
          >
            Доставляем заказ ежедневно с 09:00 по 00:00
          </p>
        </div>
        <hr />
        <div className={style.container}>
          <LabelText
            className={classNames(style.addressLabel)}
            children=''
          />
          <Select
            className={classNames(style.deliveryAddress, {}, [style.deliveryOpen])}
            promptOption={
              basket.recipientAddress === ''
                ? pagesInfo.restaurantAddress[0].name
                : basket.recipientAddress
            }
            options={pagesInfo.restaurantAddress}
            onChange={handlerChangeSelectAddress}
            required
            id={selectId}
          />
          <p className={style.changeAddressText}>
            Хотите доставить по другому адресу?
            <br />
            <a href='#'>Да изменить</a>
          </p>
        </div>
      </div>
      <div className={style.pickupOfGoods}>
        <Checkbox
          isCircle
          onChange={handlerChangeCheckboxPickupOfGoods(basket.pickupOfGoods)}
          label='Самовывоз'
          id={pickupOfGoodsSelectId}
        />
      </div>
    </div>
  );
};
