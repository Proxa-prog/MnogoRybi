import React, {FC} from "react";

import classNames from "classnames";

import style from "./ConstructorCard.module.scss";

export interface  ConstructorCardProps {
  children?: React.ReactNode;
  className?: string;
}

export const ConstructorCard: FC<ConstructorCardProps> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <div className={classNames(style.wrapper, {}, [className])}>
      {children}
    </div>
  )
};
