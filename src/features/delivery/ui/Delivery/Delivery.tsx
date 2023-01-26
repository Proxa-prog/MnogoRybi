import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';

import { getRestaurantPagesInfoSelector } from 'features/restaurant';

import {
  openBasketSelector,
  addRecipientAddress,
  changePickupOfGoods,
} from 'entities/basket';

import {
  Select,
  Checkbox,
  LabelText
} from 'shared';

import style from './Delivery.module.scss';

const Delivery: FC = () => {
  const dispatch = useDispatch();
  const labelDeliveryCheckboxId = nanoid();
  const basket = useSelector(openBasketSelector);
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);

  const handlerChangeSelectAddress = (address: string) => {
    dispatch(addRecipientAddress(address));
  };

  const handlerChangeCheckboxPickupOfGoods = (isTrue: boolean) => {

    return () => {
      dispatch(changePickupOfGoods(isTrue));
    }
  };

  useEffect(() => {
    dispatch(addRecipientAddress(pagesInfo.restaurantAddress[0].name));
  }, []);

  return (
    <div className={style.delivery_wrapper}>
      <h4>Доставка</h4>
      <div className={style.delivery}>
        <div className={style.delivery_block_wrapepr}>
          <div className={style.delivery_header_wrapper}>
            <Checkbox
              id={labelDeliveryCheckboxId}
              checked
              isCircle
              onChange={() => { }} />
            <span>Доставка по адресу</span>
          </div>
          <p
            className={style.delivery_checkbox_label}
            id={labelDeliveryCheckboxId}
          >
            Доставляем заказ ежедневно с 09:00 по 00:00
          </p>
        </div>
        <hr />
        <div className={style.delivery_block_wrapepr}>
          <LabelText
            className={classNames(
              style.address_label,
            )}
            children=''
          />
          <Select
            className={classNames(
              style.delivery_address,
              style.delivery_open,
            )}
            promptOption={pagesInfo.restaurantAddress[0].name}
            options={pagesInfo.restaurantAddress}
            onChange={handlerChangeSelectAddress}
            required
          />
          <p className={style.change_address_text}>Хотите доставить по другому адресу?<br /> <a href='#'>Да изменить</a></p>
        </div>
      </div>
      <div className={style.pickup_of_goods}>
        <Checkbox
          isCircle
          onChange={handlerChangeCheckboxPickupOfGoods(basket.pickupOfGoods)} />
        <span>Самовывоз</span>
      </div>
    </div>
  )
};

export default Delivery;
