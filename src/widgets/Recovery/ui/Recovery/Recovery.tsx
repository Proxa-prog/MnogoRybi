import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "app/store";

import {
  userAccountSelector,
  userEnterSelector,
  restorePassword,
  userEnterActions,
  userAccountActions,
} from "entities/user";

import { Button, Input } from "shared";

import style from "./Recovery.module.scss";

const Recovery: FC = () => {
  const dispatch = useAppDispatch();
  const userAccount = useSelector(userAccountSelector);
  const userEnter = useSelector(userEnterSelector);
  const [email, setEmail] = useState("");

  const handleButtonCloseClick = () => {
    dispatch(userAccountActions.changeIsModalRecoveryOpen(userAccount.userAccount.isModalRecoveryOpen));
  };

  const handleButtonSendClick = (email: string) => {
    dispatch(restorePassword(email));
  };

  const handleButtonBackClick = () => {
    dispatch(userEnterActions.changeIsOpenUserEnter(userEnter.isOpen));
    dispatch(userAccountActions.changeIsModalRecoveryOpen(userAccount.userAccount.isModalRecoveryOpen));
  };

  return (
    <div className={style.recovery}>
      <Button
        className={style.buttonBack}
        isTurn="back"
        type="button"
        isGrayTheme
        onClick={handleButtonBackClick}
      />
      <Button
        className={style.buttonClose}
        isClose="close"
        type="button"
        onClick={handleButtonCloseClick}
      />
      <h3>Восстановление пароля</h3>
      <p>Мы отправим новый пароль на email</p>
      <Input
        className={style.inputPassword}
        required
        type="email"
        label="Email"
        name="email"
        placeholder="Введите email"
        onChange={(email) => {
          email && setEmail(email);
        }}
      />
      <Button
        className={style.buttonEnter}
        type="button"
        color="yellow"
        onClick={() => {
          handleButtonSendClick(email);
        }}
      >
        <span>Отправить</span>
      </Button>
    </div>
  );
};

export default Recovery;
