import React, { FC } from "react";
import { useSelector } from "react-redux";

import { changeIsOpenRegistration } from "app/store/reducers/registration";
import { changeIsLoginUserAccount } from "app/store/reducers/userAccount";
import { useAppDispatch } from "app/store";
import {
  changeEmailUserEnter,
  changeIsOpenUserEnter,
  changePasswordUserEnter
} from "app/store/reducers/userEnter";

import { findUserAccount } from "entities/productions/model/services/findUserAccount";
import { setUserAccountState } from "entities/userAccount/model/userAccount";
import { getRegistration } from "entities/registration/model";
import { openModalUserEnter } from "entities/userEnter/model";

import Button from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";

import style from './UserEnter.module.scss';

interface UserEnterProps {

}

const UserEnter: FC<UserEnterProps> = () => {
  const dispatch = useAppDispatch();
  const registration = useSelector(getRegistration);
  const userEnter = useSelector(openModalUserEnter);
  const userAccount = useSelector(setUserAccountState);

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

  const handleButtonUserEnter = async (event: any) => {
    event.preventDefault();

    const isSubmit = await findUserAccount({
      email: userEnter.email,
      password: userEnter.password,
    });

    if (isSubmit) {
      dispatch(changeIsOpenUserEnter(userEnter.isOpen));
      dispatch(changeIsLoginUserAccount(userAccount.isLogin));
    }
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
      <h3>????????</h3>
      <Input
        className={style.input_email}
        required
        type="email"
        label="Email"
        name="email"
        placeholder="?????????????? email"
        onChange={handleUserEnterEmail}
      />
      <a href="#">???????????? ?????????????</a>
      <Input
        classNameWrapper={style.email_wrapper}
        className={style.input_password}
        required
        type="password"
        label="????????????"
        name="????????????"
        placeholder="?????????????? ????????????"
        onChange={handleUserEnterPassword}
      />
      <Button
        className={style.button_enter}
        type="submit"
        color="yellow"
        onClick={() => { }}
      >
        ??????????
      </Button>
      <div className={style.have_account_wrapper}>
        <span className={style.have_account}>
          ?????? ?????????????? ?????????????
          <span className={style.space}>
            &nbsp;&nbsp;
          </span>
        </span>
        <Button
          onClick={handleCheckboxAgreementChange}
          className={style.button_have_account}
          type={"button"}
        >
          ????????????????????????????????????
        </Button>
      </div>
    </form>
  )
};

export default UserEnter;
