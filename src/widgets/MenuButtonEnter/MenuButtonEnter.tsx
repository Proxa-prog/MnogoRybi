import React, { FC } from 'react';
import { useSelector } from "react-redux";

import { useAppDispatch } from "app/store";

import { changeIsOpenRegistration } from "features/ModalRegistration/model/slice/registrationReducer";
import { openModalUserEnterSelector } from 'entities/user/model/selectors/openModalUserEnterSelector';

import { changeIsOpenUserEnter } from 'entities/user/model/slice/userEnterSlice';

import { ONE_HUNDRED_PIXEL_SCROLL } from 'shared/assets/constants/constants';

import Button from 'shared/ui/Button/Button';

import style from 'widgets/Header/Header.module.scss';

interface MenuButtonEnterProps {
  isAuth: boolean;
  scroll?: number;
}

const MenuButtonEnter: FC<MenuButtonEnterProps> = (props) => {
  const {
    isAuth,
    scroll,
  } = props;

  const userEnter = useSelector(openModalUserEnterSelector);
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
