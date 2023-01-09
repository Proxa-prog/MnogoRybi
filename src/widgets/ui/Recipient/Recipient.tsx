import { addRecipientName, addRecipientPhone } from 'app/store/reducers/basket';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import Input from 'shared/ui/Input/Input';

import style from './Recipient.module.scss';

export interface RecipientProps {
}

const Recipient: FC<RecipientProps> = (props) => {
  const dispatch = useDispatch();

  const handleInputNameChange = (name: string | undefined) => {
    dispatch(addRecipientName(name));
  };

  const handleInputPhoneChange = (phone: string | undefined) => {
    dispatch(addRecipientPhone(phone));
  };

  return (
    <div className={style.recipient}>
      <h4>Получатель</h4>
      <div className={style.recipient_data_wrapper}>
        <Input
          className={style.user_name}
          label='Имя'
          placeholder='Иванов Иван Иванович'
          required
          name='recipient_name'
          onChange={handleInputNameChange}
        />
        <Input
          className={style.user_phone}
          label='Телефон'
          placeholder='+7 986 456 75 34'
          required
          type='number'
          name='recipient_phone'
          onChange={handleInputPhoneChange}
        />
      </div>
    </div>
  )
};

export default Recipient;
