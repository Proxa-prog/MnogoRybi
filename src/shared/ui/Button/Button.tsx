import React, { FC } from 'react';
import classNames from 'classnames';

import style from './Button.module.scss';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonColor = 'yellow' | 'blue';

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  type: ButtonType;
  color?: ButtonColor;
  isGrayTheme?: boolean;
}
const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    children,
    type = 'submit',
    color = 'default',
    isGrayTheme = false,
  } = props;

  const defaultButtonColor = isGrayTheme ? 'default_white' : '';
  return (
    <button
      className={classNames(
        className,
        style.default,
        [
          style[color],
          style[defaultButtonColor],
        ],
      )}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
