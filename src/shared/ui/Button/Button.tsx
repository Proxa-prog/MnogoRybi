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
  imageLeft?: string;
  imageRight?: string;
  buttonImageAlt?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    disabled,
    children,
    type = 'submit',
    color = 'default',
    isGrayTheme = false,
    onClick,
    isTurn = 'default',
    buttonImageAlt = '',
    imageLeft = '',
    imageRight = '',
  } = props;

  const defaultButtonColor = isGrayTheme ? 'default_white' : '';

  const handleOnClick = () => {
    onClick();
  };

  return (
    <button
      className={classNames(
        style.default,
        style[color],
        [
          style[defaultButtonColor],
          style[isTurn],
          style[className],
        ],
      )}
      disabled={disabled}
      type={type}
      onClick={handleOnClick}
    >
      {
        (imageLeft !== '')
          ? <ImageWrapper className={style.button__image} name={imageLeft} alt={buttonImageAlt} />
          : null
      }
      {children}
      {
        (imageRight !== '')
          ? <ImageWrapper className={style.button__image} name={imageRight} alt={buttonImageAlt} />
          : null
      }
    </button>
  );
};

export default Button;
