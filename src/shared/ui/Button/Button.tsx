import React, { FC } from 'react';

import classNames from 'classnames';

import ImageWrapper from '../ImageWrapper/ImageWrapper';

import style from './Button.module.scss';

type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonColor = 'default' | 'yellow' | 'blue';
type ButtonTurn = 'back' | 'forward' | 'default';

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  type: ButtonType;
  color?: ButtonColor;
  isGrayTheme?: boolean;
  onClick: () => void;
  isTurn?: ButtonTurn;
  image?: string;
  buttonImageAlt?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    children,
    type = 'submit',
    color = 'default',
    isGrayTheme = false,
    onClick,
    isTurn = 'default',
    buttonImageAlt = '',
    image = '',
  } = props;

  const defaultButtonColor = isGrayTheme ? 'default_white' : '';

  const handleOnClick = () => {
    onClick();
  };

  return (
    <button
      className={classNames(
        className,
        style.default,
        style[color],
        [
          style[defaultButtonColor],
          style[isTurn],
        ],
      )}
      disabled={disabled}
      type={type}
      onClick={handleOnClick}
    >
      {(image !== '') ? <ImageWrapper name={image} alt={buttonImageAlt} /> : null}
      {children}
    </button>
  );
};

export default Button;
