import React, { FC } from "react";
import Button from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";

import style from './Confirmation.module.scss';

interface ConfirmationProps {

}

const Confirmation: FC<ConfirmationProps> = () => {
  return (
    <div className={style.confirmation}>
      <Button
        className={style.button_back}
        isTurn="back"
        type="button"
        isGrayTheme
        onClick={() => { }}
      />
      <Button
        className={style.button_close}
        isClose='close'
        type="button"
        onClick={() => { }}
      />
      <h3>Подтверждение</h3>
      <p>Мы отправили пароль на почту ivanov@mail.ru. Введите его для подтверждения почты и авторизации на сайте</p>
      <Input
        className={style.input_password}
        required
        type="password"
        label="Пароль"
        name="Пароль"
        placeholder="Введите пароль"
      />
      <Button
        className={style.button_enter}
        type="button"
        color="yellow"
        onClick={() => { }}
      >
        <span className={style.button_text_desktop}>Войти</span>
        <span className={style.button_text_mobile}>Зарегистрироваться</span>
      </Button>
    </div>
  )
};

export default Confirmation;
