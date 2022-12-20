import React, { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import Input from 'shared/ui/Input/Input';

import Checkbox from 'shared/ui/Checkbox/Checkbox';
import LabelText from 'shared/ui/LabelText/LabelText';
import style from './Payment.module.scss';

export interface PaymentProps {
}

const Payment: FC<PaymentProps> = (props) => {
  const labelPaymentCheckboxId = nanoid();

  return (
    <div className={style.payment_wrapper}>
      <h4>Оплата</h4>
      <div className={style.payment}>
        <div className={style.payment_header_wrapper}>
          <Checkbox
            id={labelPaymentCheckboxId}
            checked
            isCircle
            onChange={
              () => { }
            } />
          <span>Картой на сайте</span>
        </div>
        <p>Платеж безопасен. Мы не храним данные карт все операции проводит сертифицированная платежная система ЮКасса</p>
        <hr />
        <div className={style.card_data}>
          <Input
            className={style.user_name}
            placeholder='Номер карты'
            label=''
            name='Номер карты'
          />
          <Input
            className={style.card_validity}
            placeholder='Срок действия'
            label=''
            name='Срок действия'
          />
          <Input
            className={style.card_cvc}
            placeholder='CVC'
            label=''
            name='CVC'
          />
        </div>
        <div className={style.agreement}>
          <Checkbox
            checked
            onChange={() => { }}
          />
          <span>Привязать карту к кабинету для быстрой оплаты</span>
        </div>
      </div>
      <div className={style.courier}>
        <Checkbox
          isCircle
          onChange={
            () => { }
          } />
        <span>Курьеру при получении</span>
      </div>
    </div>
  )
};

export default Payment;
