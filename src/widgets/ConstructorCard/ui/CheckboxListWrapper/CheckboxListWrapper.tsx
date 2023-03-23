import React, {FC, useEffect, useState} from "react";
import classNames from "classnames";

import {Checkbox, ImageWrapper} from "shared";

import {IProducts} from "entities/basket";

import CheckboxListColumnSquare from "../CheckboxListColumnSquare/CheckboxListColumnSquare";
import CheckboxListCircle from "../CheckboxListCircle/CheckboxListCircle";
import SelectList from "../SelectListWrapper/SelectList";
import {
  ConstructorType,
  FillersType
} from "entities/constructor/model/slice/constructorSlice";
import {AnyAction} from "@reduxjs/toolkit";

import {IFiltersIngredients} from "../../model/types/types";
import {useSelector} from "react-redux";
import {filtersSelector} from "entities/constructor/model/selectors/filtersSelector";
import {nanoid} from "nanoid";
import {constructorSelector} from "../../../../entities/constructor";

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
  howMuchIsLeft?: number;
  isSelectList?: boolean;
  selectListArray?: any;
  hasHorizontalLine?: boolean;
  hasFilters?: boolean;
  checkboxState?: IFiltersIngredients | FillersType | ConstructorType;
  fillersType?: IFiltersIngredients;
  changeChecked: () => AnyAction;
  changeType: (name: ConstructorType | string) => AnyAction;
  changeFiltersType?: (name: IFiltersIngredients) => AnyAction;
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
    howMuchIsLeft,
    isSelectList,
    selectListArray,
    hasHorizontalLine,
    hasFilters,
    checkboxState,
    fillersType,
    changeChecked,
    changeType,
    changeFiltersType,
  } = props;

  const filters = useSelector(filtersSelector);

  const func = fillersType?.ingredients.filter((filler) => filler.name === contentHeader?.name)
  const isFillerChecked = (fillersType: string | string[] | undefined, fillerName: string) => {
    if (fillersType === fillerName) {
      return true;
    }

    return false
  };

  return (
    <div className={classNames(style.wrapper, {[style.horizontal_line]: hasHorizontalLine}, [])}>
      <div className={style.header_wrapper}>
        <div className={classNames({[style.hide]: isSelectList}, [style.image_header])}>
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
          hasFilters &&
          productsType &&
          <div className={style.filters_wrapper}>
            {
              filters.filters.map((item: IFiltersIngredients) => {
                const id = nanoid();

                return (
                  <CheckboxListCircle
                    key={id}
                    isCircleCheckbox
                    productsType={item}
                    className={style.checkbox_wrapper}
                    isFillers
                    checked={isFillerChecked(checkboxState?.name, item.name)}
                    isFillerChecked={isFillerChecked(checkboxState?.name, item.name)}
                    changeChecked={changeChecked}
                    // @ts-ignore
                    changeType={changeFiltersType}
                    changeFiltersType={changeFiltersType}
                  />
                )
              })
            }
          </div>
        }
        {
          contentHeader &&
          <div className={style.content_header_wrapper}>
            <span className={style.contentHeader}>{contentHeader.name}</span>&nbsp;
            <span className={style.howMuchIsLeft}>/ Осталось {howMuchIsLeft} из&nbsp;
              {
                filters.filters.map((filter: IFiltersIngredients) => {
                  if (filter.name === fillersType?.name) {

                    return (
                      filter.ingredients.map(
                        (item) => {
                          if (item.name === contentHeader.name) {
                            return item.count
                          }
                        })
                    )
                  }
                })
              }
            </span>
          </div>
        }
        <div className={classNames(style.content, {}, [])}>
          {
            !isCircleCheckbox
            && !isSelectList
            && productsType
            && <ul className={style.list}>
              {
                productsType.map((item) => {

                  return (
                    <CheckboxListColumnSquare
                      isCircleCheckbox={isCircleCheckbox}
                      productsType={item}
                      className={style.checkbox_white_background}
                      changeType={changeType}
                      changeChecked={changeChecked}
                      disabled={func && (howMuchIsLeft === func[0].count)}
                      name={contentHeader?.name}
                    />
                  )
                })
              }
            </ul>
          }
          {
            isCircleCheckbox
            && !isSelectList
            && productsType
            && productsType.map((item: any) => {
              const id = nanoid();
              return (
                <CheckboxListCircle
                  key={id}
                  isCircleCheckbox={isCircleCheckbox}
                  productsType={item}
                  isFillers
                  checked={isFillerChecked(checkboxState?.name, item.name)}
                  isFillerChecked={isFillerChecked(checkboxState?.name, item.name)}
                  changeChecked={changeChecked}
                  changeType={changeType}
                  changeFiltersType={changeFiltersType}
                />
              )
            })
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
