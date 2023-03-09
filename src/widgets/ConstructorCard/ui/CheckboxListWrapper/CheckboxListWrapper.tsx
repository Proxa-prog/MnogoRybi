import React, {FC} from "react";
import classNames from "classnames";

import {Checkbox, ImageWrapper} from "shared";

import {IProducts} from "entities/basket";

import CheckboxListColumnSquare from "../CheckboxListColumnSquare/CheckboxListColumnSquare";
import CheckboxListCircle from "../CheckboxListCircle/CheckboxListCircle";
import SelectList from "../SelectListWrapper/SelectList";


import style from "./CheckboxListWrapper.module.scss";

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

export interface  CheckboxListWrapperProps {
  productsType?: IProducts[];
  stepNumber?: number;
  header?: string;
  isCircleCheckbox?: boolean;
  image?: imageTypes;
  contentHeader?: contentHeaderTypes;
  description?: string;
  isSelectList?: boolean;
  selectListArray?: any;
}

const CheckboxListWrapper: FC<CheckboxListWrapperProps> = (props) => {
  const {
    productsType,
    stepNumber,
    header,
    image,
    isCircleCheckbox,
    contentHeader,
    description,
    isSelectList,
    selectListArray,
  } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.header_wrapper}>
        <div className={classNames({[style.hide]: isSelectList}, [])}>
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
        <div className={style.header}>
          {header}
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
            && !isSelectList
            && productsType
            && <CheckboxListColumnSquare
              isCircleCheckbox={isCircleCheckbox}
              productsType={productsType}
            />
          }
          {
            isCircleCheckbox
            && !isSelectList
            && productsType
            && <CheckboxListCircle
              isCircleCheckbox={isCircleCheckbox}
              productsType={productsType}
            />
          }
          {
            isSelectList
            && productsType
            && Object.entries(selectListArray).map(([key, value]) => {
              if (key === 'basis' || key === 'additionally') {
                return;
              }

              return (
                <SelectList
                  key={key}
                  // @ts-ignore
                  productsType={value.productsType}
                  // @ts-ignore
                  header={value?.header}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default CheckboxListWrapper;
