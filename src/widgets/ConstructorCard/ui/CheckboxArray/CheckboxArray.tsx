import React, {FC} from "react";

import {Checkbox, ImageWrapper} from "shared";

import style from "./CheckboxArray.module.scss";
import classNames from "classnames";
import CheckboxListColumn from "../CheckboxListCircle/CheckboxListColumn";

interface imageTypes {
  url: string | undefined;
  width?: number;
  height?: number;
  alt?: string;
}

interface contentHeaderTypes {
  name?: string;
  howMuchIsLeft?: number;
  total?: number;
}

export interface  CheckboxArrayProps {
  productsType?: string[];
  stepNumber?: number;
  description?: string;
  isCircleCheckbox?: boolean;
  image?: imageTypes;
  contentHeader?: contentHeaderTypes;
}

const CheckboxArray: FC<CheckboxArrayProps> = (props) => {
  const {
    productsType,
    stepNumber,
    description,
    image,
    isCircleCheckbox,
    contentHeader,
  } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div>
          <span>{stepNumber}</span>
          {
            image
            && image.width
            && image.height
            && <ImageWrapper
              name={image?.url}
              alt='sdf'
              width={image?.width}
              height={image?.height}
            />
          }
        </div>
        <div className={style.description}>
          {description}
        </div>
      </div>
      <div className={style.content_wrapper}>
        {
          contentHeader &&
          <div className={style.content_header_wrapper}>
            <span className={style.contentHeader}>{contentHeader.name}</span>&nbsp;
            <span className={style.howMuchIsLeft}>/ Осталось {contentHeader.howMuchIsLeft} из {contentHeader.total}</span>
          </div>
        }
        <div className={classNames(style.content, {}, [])}>
          {
            !isCircleCheckbox
            && productsType
            && <CheckboxListColumn
              isCircleCheckbox={isCircleCheckbox}
              productsType={productsType}
            />
          }
          {
            isCircleCheckbox
            && productsType
            && productsType.map((item: any) => (
              <div className={classNames({[style.checkbox_wrapper]: isCircleCheckbox,}, [])}>
                <Checkbox
                  onChange={() => {}}
                  isCircle={isCircleCheckbox}
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

export default CheckboxArray;
