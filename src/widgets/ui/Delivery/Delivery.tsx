import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import { openBasket } from 'entities/basket/model';

import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import Select from 'shared/ui/Select/Select';

import style from './Delivery.module.scss';
import Checkbox from 'shared/ui/Checkbox/Checkbox';
import LabelText from 'shared/ui/LabelText/LabelText';
import { nanoid } from '@reduxjs/toolkit';

export interface DeliveryProps {
}

const Delivery: FC<DeliveryProps> = (props) => {
  const labelDeliveryCheckboxId = nanoid();

  return (
    <div className={style.delivery_wrapper}>
      <h4>Доставка</h4>
      <div className={style.delivery}>
        <div className={style.delivery_header_wrapper}>
          <Checkbox
            id={labelDeliveryCheckboxId}
            checked
            isCircle
            onChange={
              () => { }
            } />
          <span>Доставка по адресу</span>
        </div>
        <p
          className={style.delivery_checkbox_label}
          id={labelDeliveryCheckboxId}
        >
          Доставляем заказ ежедневно с 09:00 по 00:00
        </p>
        <hr />
        <Select
          className={style.delivery_address}
          options={[]}
        />
        <p>Хотите доставить по другому адресу? <a>Да изменить</a></p>
      </div>
      <div className={style.pickup_of_goods}>
        <Checkbox
          isCircle
          onChange={
            () => { }
          } />
        <span>Самовывоз</span>
      </div>
    </div>
  )
};

export default Delivery;
