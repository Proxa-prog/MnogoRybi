import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import { changeIsOpenRecovery } from "app/store/reducers/userAccount";
import { changeIsOpenUserEnter } from "app/store/reducers/userEnter";
import { useAppDispatch } from "app/store";

import Button from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";

import { passwordRecovery } from "entities/productions/model/services/passwordRecovery";
import { setUserAccountState } from "entities/userAccount/model/userAccount";
import { openModalUserEnter } from "entities/userEnter/model";

import style from "./Recovery.module.scss";

interface RecoveryProps { }

const Recovery: FC<RecoveryProps> = () => {
  const dispatch = useAppDispatch();
  const userAccount = useSelector(setUserAccountState);
  const userEnter = useSelector(openModalUserEnter);
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
