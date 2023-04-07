import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import { getRegistrationSelector, registrationActions } from 'features/registration';

import {
  findUserAccount,
  userAccountSelector,
  userEnterSelector,
  userEnterActions,
  userAccountActions,
} from 'entities/user';

import { Button, Input } from 'shared';

import style from './UserEnter.module.scss';

export const UserEnter: FC = () => {
  const dispatch = useAppDispatch();
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(userEnterSelector);
  const userAccount = useSelector(userAccountSelector);

  const handleCheckboxAgreementChange = () => {
    dispatch(registrationActions.changeIsOpenRegistration(registration.isOpen));
    dispatch(userEnterActions.changeIsOpenUserEnter(userEnter.isOpen));
  };

  const handleUserEnterButtonClose = () => {
    dispatch(userEnterActions.changeIsOpenUserEnter(userEnter.isOpen));
  };

  const handleUserEnterEmail = (email: string | undefined) => {
    dispatch(userEnterActions.changeEmailUserEnter(email));
  };

  const handleUserEnterPassword = (email: string | undefined) => {
    dispatch(userEnterActions.changePasswordUserEnter(email));
  };

  const handleConfirmationButtonClick = () => {
    dispatch(
      userAccountActions.changeIsModalRecoveryOpen(userAccount.userAccount.isModalRecoveryOpen)
    );
    dispatch(userEnterActions.changeIsOpenUserEnter(userEnter.isOpen));
  };

  const handleButtonUserEnter = async (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      findUserAccount({
        email: userEnter.userAccount.email,
        password: userEnter.userAccount.password,
        isWindowUserEnterOpen: userEnter.isOpen,
        isUserLogin: userAccount.userAccount.isLogin,
      })
    );
  };

  return (
    <form
      className={style.userEnter}
      onSubmit={handleButtonUserEnter}
    >
      <Button
        className={style.buttonClose}
        isClose='close'
        type='button'
        onClick={handleUserEnterButtonClose}
      />
      <h3>Вход</h3>
      <Input
        className={style.inputEmail}
        required
        type='email'
        label='Email'
        name='email'
        placeholder='Введите email'
        onChange={handleUserEnterEmail}
      />
      <Button
        className={style.buttonForgotPassword}
        type='button'
        onClick={handleConfirmationButtonClick}
      >
        Забыли пароль?
      </Button>
      <Input
        className={style.inputPassword}
        required
        type='password'
        label='Пароль'
        name='Пароль'
        placeholder='Введите пароль'
        onChange={handleUserEnterPassword}
      />
      <Button
        className={style.buttonEnter}
        type='submit'
        color='yellow'
        onClick={() => {}}
      >
        Войти
      </Button>
      <div className={style.haveAccountWrapper}>
        <span className={style.haveAccount}>
          Нет учетной записи?
          <span className={style.space}>&nbsp;&nbsp;</span>
        </span>
        <Button
          onClick={handleCheckboxAgreementChange}
          className={style.buttonHaveAccount}
          type={'button'}
        >
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
};
