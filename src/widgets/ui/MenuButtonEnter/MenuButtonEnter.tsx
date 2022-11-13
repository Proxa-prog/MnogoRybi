import React, { FC } from 'react';

import Button from '/src/shared/ui/Button/Button';

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
          className={(scroll !== undefined && scroll >= 100) ? 'user_auth_scroll' : 'user_auth'}
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
