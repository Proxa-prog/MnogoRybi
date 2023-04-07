import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { basketActions, openBasketSelector } from 'entities/basket';

import { Input, Checkbox } from 'shared';

import style from './Payment.module.scss';

export const Payment: FC = () => {
  const dispatch = useDispatch();
  const labelPaymentCheckboxId = nanoid();
  const basket = useSelector(openBasketSelector);

  const handlerChangeInputCardNumber = (cardNumber: string | undefined) => {
    dispatch(basketActions.addRecipientCardNumber(cardNumber));
  };

  const handlerChangeInputCardDate = (cardDate: string | undefined) => {
    dispatch(basketActions.addRecipientCardDate(cardDate));
  };

  const handlerChangeInputCardCvc = (cardCvc: string | undefined) => {
    dispatch(basketActions.addRecipientCardCvc(cardCvc));
  };

  const handlerChangeCheckboxPaymentToTheCourier = (isTrue: boolean) => {
    return () => {
      dispatch(basketActions.changePaymentToTheCourier(isTrue));
    };
  };

  const handlerChangeCheckboxSaveCardDate = (isTrue: boolean) => {
    return () => {
      dispatch(basketActions.changeSaveCardDate(isTrue));
    };
  };

  return (
    <div>
      <h4>Оплата</h4>
      <div className={style.payment}>
        <div className={style.blockWrapper}>
          <div className={style.headerWrapper}>
            <Checkbox
              id={labelPaymentCheckboxId}
              checked
              isCircle
              onChange={() => {}}
            />
            <span>Картой на сайте</span>
          </div>
          <p>
            Платеж безопасен. Мы не храним данные карт все операции проводит сертифицированная
            платежная система ЮКасса
          </p>
        </div>
        <hr />
        <div className={style.blockWrapper}>
          <div className={style.cardData}>
            <Input
              className={style.userName}
              placeholder='Номер карты'
              label=''
              name='Номер карты'
              type='text'
              onChange={handlerChangeInputCardNumber}
              required
            />
            <Input
              classNameWrapper={style.validityWrapper}
              className={style.cardValidity}
              placeholder='Срок действия'
              label=''
              name='Срок действия'
              type='text'
              onChange={handlerChangeInputCardDate}
              required
            />
            <Input
              classNameWrapper={style.cvcWrapper}
              className={style.cardCvc}
              placeholder='CVC'
              label=''
              name='CVC'
              type='text'
              onChange={handlerChangeInputCardCvc}
              required
            />
          </div>
          <div className={style.agreement}>
            <Checkbox
              checked={basket.saveCardDate}
              className={style.agreementCheckbox}
              onChange={handlerChangeCheckboxSaveCardDate(basket.saveCardDate)}
            />
            <span>Привязать карту к кабинету для быстрой оплаты</span>
          </div>
        </div>
      </div>
      <div className={style.courier}>
        <Checkbox
          isCircle
          onChange={handlerChangeCheckboxPaymentToTheCourier(basket.paymentToTheCourier)}
        />
        <span>Курьеру при получении</span>
      </div>
    </div>
  );
};
