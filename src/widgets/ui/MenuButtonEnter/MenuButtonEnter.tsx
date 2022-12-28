import React, { FC } from 'react';
import { useSelector } from "react-redux";

import { useAppDispatch } from "app/store";
import { changeIsOpen } from "app/store/reducers/registration";

import Button from 'shared/ui/Button/Button';

import { getRegistration } from "entities/registration/model";
import { ONE_HUNDRED_PIXEL_SCROLL } from 'entities/constants/constants';

import style from 'widgets/ui/Header/Header.module.scss';

interface MenuButtonEnterProps {
  isAuth: boolean;
  scroll?: number;
}

const MenuButtonEnter: FC<MenuButtonEnterProps> = (props) => {
  const {
    isAuth,
    scroll,
  } = props;

  const registration = useSelector(getRegistration);
  const dispatch = useAppDispatch();

  const handleCheckboxAgreementChange = () => {
    dispatch(changeIsOpen(registration.isOpen))
  };

  return (
    isAuth
      ? (
        <Button
          imageLeft="user_fill.svg"
          className={
            (scroll && scroll >= ONE_HUNDRED_PIXEL_SCROLL)
            ? style.user_auth_scroll
            : style.user_auth
          }
          type="button"
          isGrayTheme
          onClick={handleCheckboxAgreementChange}
        />
      )
      : (
        <Button
          type="button"
          isGrayTheme
          onClick={handleCheckboxAgreementChange}
        >
          Войти
        </Button>
      )
  );
};

export default MenuButtonEnter;
