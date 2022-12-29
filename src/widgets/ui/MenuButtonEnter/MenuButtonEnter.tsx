import React, { FC } from 'react';
import { useSelector } from "react-redux";

import { useAppDispatch } from "app/store";
import { changeIsOpenRegistration } from "app/store/reducers/registration";
import { changeIsOpenUserEnter } from 'app/store/reducers/userEnter';

import Button from 'shared/ui/Button/Button';

import { openModalUserEnter } from 'entities/userEnter/model';
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

  const userEnter = useSelector(openModalUserEnter);
  const dispatch = useAppDispatch();

  const handleCheckboxAgreementChange = () => {
    dispatch(changeIsOpenRegistration(true));
    dispatch(changeIsOpenUserEnter(userEnter.isOpen));
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
