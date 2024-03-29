import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'app/store';
import { Link } from 'react-router-dom';

import { registrationActions } from 'features/registration';

import { userEnterSelector, userEnterActions } from 'entities/user';

import { ONE_HUNDRED_PIXEL_SCROLL, Button } from 'shared';

import style from './MenuButtonEnter.module.scss';

interface MenuButtonEnterProps {
  isAuth: boolean;
  scroll?: number;
}

export const MenuButtonEnter: FC<MenuButtonEnterProps> = (props) => {
  const { isAuth, scroll } = props;
  const userEnter = useSelector(userEnterSelector);
  const dispatch = useAppDispatch();

  const handleCheckboxAgreementChange = () => {
    dispatch(registrationActions.changeIsOpenRegistration(true));
    dispatch(userEnterActions.changeIsOpenUserEnter(userEnter.isOpen));
  };

  if (isAuth) {
    return (
      <Link to='/personalArea'>
        <Button
          buttonName='Личный кабинет'
          imageLeft='user_fill.svg'
          className={
            scroll &&
            scroll >= ONE_HUNDRED_PIXEL_SCROLL
              ? style.authScroll
              : style.userAuth
          }
          type='button'
          isGrayTheme
        />
      </Link>
    );
  }

  if (
    !isAuth
    && scroll
    && scroll >= ONE_HUNDRED_PIXEL_SCROLL) {
    return (
      <Button
        buttonName='Вход'
        imageLeft='user_fill.svg'
        className={
          scroll && scroll >= ONE_HUNDRED_PIXEL_SCROLL ? style.authScroll : style.userAuth
        }
        type='button'
        isGrayTheme
        onClick={handleCheckboxAgreementChange}
      />
    );
  }

  return (
    <Button
      className={style.buttonEnter}
      buttonName='Вход'
      type='button'
      isGrayTheme
      onClick={handleCheckboxAgreementChange}
    >
      Войти
    </Button>
  )
};
