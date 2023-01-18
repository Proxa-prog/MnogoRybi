import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import {
  addRecipientCardCvc,
  addRecipientCardDate,
  addRecipientCardNumber,
  changePaymentToTheCourier,
  changeSaveCardDate
} from 'entities/basket/model/slice/basketReducer';

import { openBasketSelector } from 'entities/basket';

import Input from 'shared/ui/Input/Input';
import Checkbox from 'shared/ui/Checkbox/Checkbox';


import style from './Payment.module.scss';

export interface PaymentProps {
}

const Payment: FC<PaymentProps> = (props) => {
  const dispatch = useDispatch();
  const labelPaymentCheckboxId = nanoid();
  const basket = useSelector(openBasketSelector);

  const handlerChangeInputCardNumber = (cardNumber: string | undefined) => {
    dispatch(addRecipientCardNumber(cardNumber));
  };

  const handlerChangeInputCardDate = (cardDate: string | undefined) => {
    dispatch(addRecipientCardDate(cardDate));
  };

  const handlerChangeInputCardCvc = (cardCvc: string | undefined) => {
    dispatch(addRecipientCardCvc(cardCvc));
  };

  const handlerChangeCheckboxPaymentToTheCourier = (isTrue: boolean) => {
    return () => {
      dispatch(changePaymentToTheCourier(isTrue));
    }
  };

  const handlerChangeCheckboxSaveCardDate = (isTrue: boolean) => {
    return () => {
      dispatch(changeSaveCardDate(isTrue));
    }
  };

  return (
    <div className={style.payment_wrapper}>
      <h4>Оплата</h4>
      <div className={style.payment}>
        <div className={style.payment_block_wrapepr}>
          <div className={style.payment_header_wrapper}>
            <Checkbox
              id={labelPaymentCheckboxId}
              checked
              isCircle
              onChange={() => { }}
            />
            <span>Картой на сайте</span>
          </div>
          <p>Платеж безопасен. Мы не храним данные карт все операции проводит сертифицированная платежная система ЮКасса</p>
        </div>
        <hr />
        <div className={style.payment_block_wrapepr}>
          <div className={style.card_data}>
            <Input
              className={style.user_name}
              placeholder='Номер карты'
              label=''
              name='Номер карты'
              type='number'
              onChange={handlerChangeInputCardNumber}
              required
            />
            <Input
              classNameWrapper={style.validity_wrapper}
              className={style.card_validity}
              placeholder='Срок действия'
              label=''
              name='Срок действия'
              type='number'
              onChange={handlerChangeInputCardDate}
              required
            />
            <Input
              classNameWrapper={style.cvc_wrapper}
              className={style.card_cvc}
              placeholder='CVC'
              label=''
              name='CVC'
              type='number'
              onChange={handlerChangeInputCardCvc}
              required
            />
          </div>
          <div className={style.agreement}>
            <Checkbox
              checked={basket.saveCardDate}
              className={style.agreement_checkbox}
              onChange={handlerChangeCheckboxSaveCardDate(basket.saveCardDate)}
            />
            <span>Привязать карту к кабинету для быстрой оплаты</span>
          </div>
        </div>
      </div>
      <div className={style.courier}>
        <Checkbox
          isCircle
          onChange={handlerChangeCheckboxPaymentToTheCourier(basket.paymentToTheCourier)} />
        <span>Курьеру при получении</span>
      </div>
    </div>
  )
};

export default Payment;
