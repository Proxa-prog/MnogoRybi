import React, {FC} from "react";

import {Checkbox, ImageWrapper} from "shared";

import style from "./ConstructorCard.module.scss";

export interface  ConstructorCardProps {
  productsType?: string[];
  stepNumber?: number;
  description?: string;
}

const ConstructorCard: FC<ConstructorCardProps> = (props) => {
  const {
    productsType,
    stepNumber,
    description,
  } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div>
          <span>{stepNumber}</span>
          <ImageWrapper
            name='poke_bowl.svg'
            alt='sdf'
            width={50}
            height={50}
          />
        </div>
        <div className={style.description}>
          {description}
        </div>
      </div>
      <div className={style.content_wrapper}>
        <div className={style.content}>
          {
            productsType && productsType.map((item: any) => (
              <div className={style.checkbox_wrapper}>
                <Checkbox
                  onChange={() => {}}
                  isCircle
                  className={style.checkbox}
                />
                <span>{item}</span>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
};

export default ConstructorCard;
