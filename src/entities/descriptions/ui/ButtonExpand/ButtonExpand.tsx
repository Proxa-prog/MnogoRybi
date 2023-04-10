import React, { FC } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button, ButtonTurn } from 'shared';


interface IButtonExpand {
  className?: string;
  isTurn?: ButtonTurn;
  onClick?: () => void;
}

export const ButtonExpand: FC<IButtonExpand> = (props) => {
  const {
    isTurn,
    onClick,
    className,
  } = props;

  return (
    <Button
      className={className}
      isTurn={isTurn}
      type='button'
      onClick={onClick}
    />
  );
};
