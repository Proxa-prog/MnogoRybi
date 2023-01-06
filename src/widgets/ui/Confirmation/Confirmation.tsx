import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import { changeIsOpenConfirmation } from "app/store/reducers/confirmation";
import { changeIsOpenRegistration } from "app/store/reducers/registration";
import { useAppDispatch } from "app/store";

import Button from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";

import { getRegistration } from "entities/registration/model";
import { openConfirmation } from "entities/confirmation/model";

import style from './Confirmation.module.scss';

interface ConfirmationProps {

}

const Confirmation: FC<ConfirmationProps> = () => {
  const dispatch = useAppDispatch();
  const registration = useSelector(getRegistration);
  const confirmation = useSelector(openConfirmation);
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleButtonCloseClick = () => {
    dispatch(changeIsOpenConfirmation(confirmation.isOpen));
  };

  const handleButtonEnterClick = (password: string | undefined) => {
    return () => {
      console.log("password",password);
      console.log("registration.password",registration.password);
      if (password === registration.password) {
        console.log("Enter");
      }
      console.log("error");
    }
  };

  const handleButtonBackClick = () => {
    dispatch(changeIsOpenRegistration(registration.isOpen));
    dispatch(changeIsOpenConfirmation(confirmation.isOpen));
  };
console.log(registration);

  return (
    <div className={style.confirmation}>
      <Button
        className={style.button_back}
        isTurn="back"
        type="button"
        isGrayTheme
        onClick={handleButtonBackClick}
      />
      <Button
        className={style.button_close}
        isClose='close'
        type="button"
        onClick={handleButtonCloseClick}
      />
      <h3>Подтверждение</h3>
      <p>Мы отправили пароль на почту {registration.email} Введите его для подтверждения почты и авторизации на сайте</p>
      <Input
        className={style.input_password}
        required
        type="password"
        label="Пароль"
        name="Пароль"
        placeholder="Введите пароль"
        onChange={(password) => {password && setRepeatPassword(password)}}
      />
      <Button
        className={style.button_enter}
        type="button"
        color="yellow"
        onClick={handleButtonEnterClick(repeatPassword)}
      >
        <span className={style.button_text_desktop}>Войти</span>
        <span className={style.button_text_mobile}>Зарегистрироваться</span>
      </Button>
    </div>
  )
};

export default Confirmation;
