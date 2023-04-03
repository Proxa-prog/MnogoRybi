import React, { FC } from "react";
import classNames from "classnames";

import style from './FranchiseAdvantages.module.scss';

interface IFranchiseAdvantages {
  header?: string;
  color?: string;
  description?: string;
}

export const FranchiseAdvantages: FC<IFranchiseAdvantages> = (props) => {
  const {
    header,
    color,
    description,
  } = props;

  return (
    <div className={style.wrapper}>
      <h3 className={classNames(style[color ?? ''])}>{header}</h3>
      <span>{description}</span>
    </div>
  )
};
