import React, { FC } from 'react';

import classNames from 'classnames';
import ImageWrapper from 'shared/ui/ImageWrapper/ImageWrapper';

import style from './Button.module.scss';

type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonColor = 'default' | 'yellow' | 'blue' | 'white';
type ButtonTurn = 'back' | 'forward' | 'default';
type ButtonClose = 'close';

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  childrenWrapperClassName?: string;
  type: ButtonType;
  color?: ButtonColor;
  isGrayTheme?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  isTurn?: ButtonTurn;
  isClose?: ButtonClose;
  imageLeft?: string;
  imageRight?: string;
  buttonImageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  id?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    children,
    childrenWrapperClassName = '',
    type = 'submit',
    color = 'default',
    isGrayTheme = false,
    onClick,
    isTurn = 'default',
    isClose = '',
    buttonImageAlt = '',
    imageLeft = '',
    imageRight = '',
    imageWidth = 0,
    imageHeight = 0,
    id,
  } = props;

  const defaultButtonColor = isGrayTheme ? 'default_white' : '';

  const handleOnClick = () => {
    console.log("Button");

    if (onClick) {
      console.log("onClick");
      onClick();
    }
  };

  return (
    <button
      className={classNames(
        style.default,
        style[isTurn],
        style[isClose],
        [
          style[defaultButtonColor],
          style[color],
          className,
        ],
      )}
      disabled={disabled}
      type={type}
      onClick={handleOnClick}
      id={id}
    >
      {
        (imageLeft !== '') && (
          <ImageWrapper
            className={style.button__image}
            width={imageWidth}
            height={imageHeight}
            name={imageLeft}
            alt={buttonImageAlt}
          />
        )
      }
      <span className={style[childrenWrapperClassName]}>
        {children}
      </span>
      {
        (imageRight !== '') && (
          <ImageWrapper
            className={style.button__image}
            width={imageWidth}
            height={imageHeight}
            name={imageRight}
            alt={buttonImageAlt}
          />
        )
      }
    </button>
  );
};

export default Button;
