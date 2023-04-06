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

const MenuButtonEnter: FC<MenuButtonEnterProps> = (props) => {
  const { isAuth, scroll } = props;

  const userEnter = useSelector(userEnterSelector);
  const dispatch = useAppDispatch();

  const handleCheckboxAgreementChange = () => {
    dispatch(registrationActions.changeIsOpenRegistration(true));
    dispatch(userEnterActions.changeIsOpenUserEnter(userEnter.isOpen));
  };

  return isAuth ? (
    <Link to='/personalArea'>
      <Button
        imageLeft='user_fill.svg'
        className={
          scroll && scroll >= ONE_HUNDRED_PIXEL_SCROLL
            ? style.authScroll
            : style.userAuth
        }
        type='button'
        isGrayTheme
        onClick={() => {}}
      />
    </Link>
  ) : (
    <Button
      className={style.buttonEnter}
      type='button'
      isGrayTheme
      onClick={handleCheckboxAgreementChange}
    >
      Войти
    </Button>
  );
};

export default MenuButtonEnter;
