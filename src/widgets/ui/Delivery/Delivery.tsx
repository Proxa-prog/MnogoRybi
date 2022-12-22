import React, { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import Select from 'shared/ui/Select/Select';
import Checkbox from 'shared/ui/Checkbox/Checkbox';

import { ADDRESS } from 'entities/constants/constants';

import style from './Delivery.module.scss';
import LabelText from 'shared/ui/LabelText/LabelText';
import classNames from 'classnames';

export interface DeliveryProps {
}

const Delivery: FC<DeliveryProps> = (props) => {
  const labelDeliveryCheckboxId = nanoid();

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
            className={style.delivery_address}
            promptOption={ADDRESS[0].name}
            options={ADDRESS}
          />
          <p className={style.change_address_text}>Хотите доставить по другому адресу?<br /> <a href='#'>Да изменить</a></p>
        </div>
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
