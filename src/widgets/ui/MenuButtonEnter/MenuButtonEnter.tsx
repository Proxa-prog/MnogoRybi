import React, { FC } from 'react';

import Button from '/src/shared/ui/Button/Button';

import style from '/src/widgets/ui/Header/Header.module.scss';

interface MenuButtonEnterProps {
  isAuth: boolean;
  scroll?: number;
}

const MenuButtonEnter: FC<MenuButtonEnterProps> = (props) => {
  const {
    isAuth,
    scroll,
  } = props;

  return (
    isAuth
      ? (
        <Button
          imageLeft="user_fill.svg"
          className={
            (scroll !== undefined && scroll >= 100)
            ? style.user_auth_scroll
            : style.user_auth
          }
          type="button"
          isGrayTheme
          onClick={() => {
            console.log('Button enter header');
          }}
        />
      )
      : (
        <Button
          type="button"
          isGrayTheme
          onClick={() => {
            console.log('Button enter header');
          }}
        >
          Войти
        </Button>
      )
  );
};

export default MenuButtonEnter;
