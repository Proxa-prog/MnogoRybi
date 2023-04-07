import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { basketActions } from 'entities/basket';

import { Input } from 'shared/ui/Input/Input';

import style from './Recipient.module.scss';

export const Recipient: FC = () => {
  const dispatch = useDispatch();

  const handleInputNameChange = (name: string | undefined) => {
    dispatch(basketActions.addRecipientName(name));
  };

  const handleInputPhoneChange = (phone: string | undefined) => {
    dispatch(basketActions.addRecipientPhone(phone));
  };

  return (
    <div className={style.recipient}>
      <h4>Получатель</h4>
      <div className={style.wrapper}>
        <Input
          className={style.inputName}
          label='Имя'
          placeholder='Иванов Иван Иванович'
          required
          name='recipient_name'
          onChange={handleInputNameChange}
        />
        <Input
          className={style.inputPhone}
          label='Телефон'
          placeholder='+7 986 456 75 34'
          required
          type='text'
          name='recipient_phone'
          onChange={handleInputPhoneChange}
        />
      </div>
    </div>
  );
};
