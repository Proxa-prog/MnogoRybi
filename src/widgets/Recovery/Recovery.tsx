import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "app/store";

import {
  setUserAccountStateSelector,
  openModalUserEnterSelector,
  passwordRecovery,
  changeIsOpenUserEnter,
  changeIsOpenRecovery,
} from "entities/user";

import Button from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";

import style from "./Recovery.module.scss";

interface RecoveryProps { }

const Recovery: FC<RecoveryProps> = () => {
  const dispatch = useAppDispatch();
  const userAccount = useSelector(setUserAccountStateSelector);
  const userEnter = useSelector(openModalUserEnterSelector);
  const [email, setEmail] = useState("");

  const handleButtonCloseClick = () => {
    dispatch(changeIsOpenRecovery(userAccount.recoveryIsOpen));
  };

  const handleButtonSendClick = (email: string) => {
    passwordRecovery(email);
  };

  const handleButtonBackClick = () => {
    dispatch(changeIsOpenUserEnter(userEnter.isOpen));
    dispatch(changeIsOpenRecovery(userAccount.recoveryIsOpen));
  };

  return (
    <div className={style.recovery}>
      <Button
        className={style.button_back}
        isTurn="back"
        type="button"
        isGrayTheme
        onClick={handleButtonBackClick}
      />
      <Button
        className={style.button_close}
        isClose="close"
        type="button"
        onClick={handleButtonCloseClick}
      />
      <h3>Восстановление пароля</h3>
      <p>Мы отправим новый пароль на email</p>
      <Input
        className={style.input_password}
        required
        type="email"
        label="Email"
        name="email"
        placeholder="Введите email"
        onChange={(email) => {email && setEmail(email)}}
      />
      <Button
        className={style.button_enter}
        type="button"
        color="yellow"
        onClick={() => {handleButtonSendClick(email)}}
      >
        <span className={style.button_text_desktop}>Отправить</span>
      </Button>
    </div>
  );
};

export default Recovery;
