import { useAppDispatch } from "app/store";
import { changeIsOpenRegistration } from "app/store/reducers/registration";
import { changeIsOpenUserEnter } from "app/store/reducers/userEnter";
import { getRegistration } from "entities/registration/model";
import { openModalUserEnter } from "entities/userEnter/model";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import Button from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";

import style from './UserEnter.module.scss';

interface UserEnterProps {

}

const UserEnter: FC<UserEnterProps> = () => {
  const dispatch = useAppDispatch();
  const registration = useSelector(getRegistration);
  const userEnter = useSelector(openModalUserEnter);

  const handleCheckboxAgreementChange = () => {
    dispatch(changeIsOpenRegistration(registration.isOpen));
    dispatch(changeIsOpenUserEnter(userEnter.isOpen));
  };

  return (
    <div className={style.user_enter}>
      <Button
        className={style.button_close}
        isClose='close'
        type="button"
        onClick={() => { }}
      />
      <h3>Вход</h3>
      <Input
        className={style.input_email}
        required
        type="email"
        label="Email"
        name="email"
        placeholder="Введите email"
      />
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
    </div>
  )
};

export default UserEnter;
