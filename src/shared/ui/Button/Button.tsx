import React, { FC } from 'react';

import classNames from 'classnames';
import ImageWrapper from 'shared/ui/ImageWrapper/ImageWrapper';

import style from './Button.module.scss';

type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonColor = 'default' | 'yellow' | 'blue';
type ButtonTurn = 'back' | 'forward' | 'default';

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  childrenWrapperClassName?: string;
  type: ButtonType;
  color?: ButtonColor;
  isGrayTheme?: boolean;
  onClick: () => void;
  isTurn?: ButtonTurn;
  imageLeft?: string;
  imageRight?: string;
  buttonImageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
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
    buttonImageAlt = '',
    imageLeft = '',
    imageRight = '',
    imageWidth = 0,
    imageHeight = 0,
  } = props;

  const defaultButtonColor = isGrayTheme ? 'default_white' : '';

  const handleOnClick = () => {
    onClick();
  };

  return (
    <button
      className={classNames(
        style.default,
        style[isTurn],
        [
          style[defaultButtonColor],
          style[color],
          className,
        ],
      )}
      disabled={disabled}
      type={type}
      onClick={handleOnClick}
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
