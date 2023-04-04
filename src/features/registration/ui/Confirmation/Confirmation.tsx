import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import {
  registrationActions,
  confirmationActions,
  getRegistrationSelector,
  openConfirmationSelector,
} from 'features/registration';

import {
  userAccountActions,
} from 'entities/user';

import { Button, Input } from 'shared';

import style from './Confirmation.module.scss';

const Confirmation: FC = () => {
  const dispatch = useAppDispatch();
  const registration = useSelector(getRegistrationSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleButtonCloseClick = () => {
    dispatch(confirmationActions.changeIsOpenConfirmation(confirmation.isOpen));
  };

  const handleButtonEnterClick = (password: string | undefined) => {
    return () => {
      if (password === registration.password) {
        dispatch(userAccountActions.changeIsLoginUserAccount());
        dispatch(confirmationActions.changeIsOpenConfirmation(confirmation.isOpen));
        dispatch(userAccountActions.changeEmailUserAccount(registration.email));
        console.log('Успешно!');
      } else {
        console.log('Неверный пароль');
      }
    };
  };

  const handleButtonBackClick = () => {
    dispatch(registrationActions.changeIsOpenRegistration(registration.isOpen));
    dispatch(confirmationActions.changeIsOpenConfirmation(confirmation.isOpen));
  };

  return (
    <div className={style.confirmation}>
      <Button
        className={style.button_back}
        isTurn='back'
        type='button'
        isGrayTheme
        onClick={handleButtonBackClick}
      />
      <Button
        className={style.button_close}
        isClose='close'
        type='button'
        onClick={handleButtonCloseClick}
      />
      <h3>Подтверждение</h3>
      <p>
        Мы отправили пароль на почту {registration.email} Введите его для
        подтверждения почты и авторизации на сайте
      </p>
      <Input
        className={style.input_password}
        required
        type='password'
        label='Пароль'
        name='Пароль'
        placeholder='Введите пароль'
        onChange={(password) => {
          password && setRepeatPassword(password);
        }}
      />
      <Button
        className={style.button_enter}
        type='button'
        color='yellow'
        onClick={handleButtonEnterClick(repeatPassword)}
      >
        <span className={style.button_text_desktop}>Войти</span>
        <span className={style.button_text_mobile}>Зарегистрироваться</span>
      </Button>
    </div>
  );
};

export default Confirmation;
