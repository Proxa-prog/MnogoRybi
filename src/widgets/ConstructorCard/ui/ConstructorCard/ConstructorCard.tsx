import React, {FC} from "react";

import style from "./ConstructorCard.module.scss";

export interface  ConstructorCardProps {
  children?: React.ReactNode;
}

const ConstructorCard: FC<ConstructorCardProps> = (props) => {
  const {
    children,
  } = props;

  return (
    <div className={style.wrapper}>
      {children}
    </div>
  )
};

export default ConstructorCard;
