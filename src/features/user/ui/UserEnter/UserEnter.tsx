import React, { FC } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "app/store";

import {
  getRegistrationSelector,
  changeIsOpenRegistration
} from "features/registration";
import {
  findUserAccount,
  setUserAccountStateSelector,
  openModalUserEnterSelector,
  changeEmailUserEnter,
  changeIsOpenUserEnter,
  changePasswordUserEnter,
  changeIsOpenRecovery,
} from "entities/user";

import { Button, Input } from "shared";

import style from './UserEnter.module.scss';

interface UserEnterProps {

}

const UserEnter: FC<UserEnterProps> = () => {
  const dispatch = useAppDispatch();
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(openModalUserEnterSelector);
  const userAccount = useSelector(setUserAccountStateSelector);

  const handleCheckboxAgreementChange = () => {
    dispatch(changeIsOpenRegistration(registration.isOpen));
    dispatch(changeIsOpenUserEnter(userEnter.isOpen));
  };

  const handleUserEnterButtonClose = () => {
    dispatch(changeIsOpenUserEnter(userEnter.isOpen));
  };

  const handleUserEnterEmail = (email: string | undefined) => {
    dispatch(changeEmailUserEnter(email));
  };

  const handleUserEnterPassword = (email: string | undefined) => {
    dispatch(changePasswordUserEnter(email));
  };

  const handleConfirmationButtonClick = () => {
    dispatch(changeIsOpenRecovery(userAccount.recoveryIsOpen));
    dispatch(changeIsOpenUserEnter(userEnter.isOpen));
  };

  const handleButtonUserEnter = async (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(findUserAccount({
      email: userEnter.email,
      password: userEnter.password,
      isWindowUserEnterOpen: userEnter.isOpen,
      isUserLogin: userAccount.isLogin,
    }));
  };

  return (
    <form
      className={style.user_enter}
      onSubmit={handleButtonUserEnter}
    >
      <Button
        className={style.button_close}
        isClose='close'
        type="button"
        onClick={handleUserEnterButtonClose}
      />
      <h3>Вход</h3>
      <Input
        className={style.input_email}
        required
        type="email"
        label="Email"
        name="email"
        placeholder="Введите email"
        onChange={handleUserEnterEmail}
      />
      <Button
        className={style.button_forgot_password}
        type="button"
        onClick={handleConfirmationButtonClick}
      >
        Забыли пароль?
      </Button>
      <Input
        classNameWrapper={style.email_wrapper}
        className={style.input_password}
        required
        type="password"
        label="Пароль"
        name="Пароль"
        placeholder="Введите пароль"
        onChange={handleUserEnterPassword}
      />
      <Button
        className={style.button_enter}
        type="submit"
        color="yellow"
        onClick={() => { }}
      >
        Войти
      </Button>
      <div className={style.have_account_wrapper}>
        <span className={style.have_account}>
          Нет учетной записи?
          <span className={style.space}>
            &nbsp;&nbsp;
          </span>
        </span>
        <Button
          onClick={handleCheckboxAgreementChange}
          className={style.button_have_account}
          type={"button"}
        >
          Зарегистрироваться
        </Button>
      </div>
    </form>
  )
};

export default UserEnter;
