import React, { FC } from "react";

import { Svg } from "shared";

import style from './Advanced.module.scss';

export interface AdvancedProps {
  name?: string;
  width?: string;
  height?: string;
  text?: string;
}

export const Advanced: FC<AdvancedProps> = (props) => {
  const {
    name = '',
    width = '',
    height = '',
    text = '',
  } = props;

  return (
    <div className={style.advanced}>
      <Svg
        className={style.image}
        name={name}
        width={width}
        height={height}
      />
      <p>{text}</p>
    </div>
  )
}
