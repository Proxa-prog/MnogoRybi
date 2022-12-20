import React, { FC } from 'react';

import Input from 'shared/ui/Input/Input';

import style from './Recipient.module.scss';

export interface RecipientProps {
}

const Recipient: FC<RecipientProps> = (props) => {

  return (
    <div className={style.recipient}>
      <h4>Получатель</h4>
      <div className={style.recipient_data_wrapper}>
        <Input
          label='Имя'
          placeholder='Иванов Иван Иванович'
          required
          name='recipient_name'
          className={style.user_name}
        />
        <Input
          label='Телефон'
          placeholder='+7 986 456 75 34'
          required
          name='recipient_phone'
          className={style.user_phone}
        />
      </div>
    </div>
  )
};

export default Recipient;
