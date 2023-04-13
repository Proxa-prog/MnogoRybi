import React, {FC, useEffect} from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { nanoid } from 'nanoid';

import { CheckboxListColumnSquare } from '../CheckboxListColumnSquare/CheckboxListColumnSquare';
import { CheckboxListCircle } from '../CheckboxListCircle/CheckboxListCircle';
import { SelectList } from '../SelectListWrapper/SelectList';

import { CheckboxListWrapperProps, IFiltersIngredients } from 'widgets/ConstructorCard';

import { filtersSelector } from 'entities/constructor';

import { ImageWrapper } from 'shared';

import style from './CheckboxListWrapper.module.scss';

export const CheckboxListWrapper: FC<CheckboxListWrapperProps> = (props) => {
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

  const func = fillersType?.ingredients.filter(
    (filler) => filler.name === contentHeader?.name
  );

  const isFillerChecked = (
    fillersType: string | string[] | undefined,
    fillerName: string
  ) => {
    if (fillersType === fillerName) {
      return true;
    }

    return false;
  };

  return (
    <div
      className={classNames(
        style.wrapper,
        { [style.horizontalLine]: hasHorizontalLine },
        []
      )}
    >
      <div className={style.headerWrapper}>
        <div
          className={classNames({ [style.hide]: isSelectList }, [
            style.imageHeader,
          ])}
        >
          <span>{stepNumber}</span>
          {image && image.width && image.height && (
            <ImageWrapper
              name={image?.url}
              alt='sdf'
              width={image?.width}
              height={image?.height}
            />
          )}
        </div>
        <div className={style.header}>{header}</div>
        <div className={style.description}>{description}</div>
      </div>
      <div className={style.contentWrapper}>
        {hasFilters && productsType && (
          <div className={style.filtersWrapper}>
            {filters.filters.map((item: IFiltersIngredients) => {
              const id = nanoid();

              return (
                <CheckboxListCircle
                  key={id}
                  isCircleCheckbox
                  productsType={item}
                  className={style.checkboxWrapper}
                  isFillers
                  checked={isFillerChecked(checkboxState?.name, item.name)}
                  isFillerChecked={isFillerChecked(
                    checkboxState?.name,
                    item.name
                  )}
                  changeChecked={changeChecked}
                  // @ts-ignore
                  changeType={changeFiltersType}
                  changeFiltersType={changeFiltersType}
                />
              );
            })}
          </div>
        )}
        {contentHeader && (
          <div className={style.contentHeaderWrapper}>
            <span className={style.contentHeader}>{contentHeader.name}</span>
            &nbsp;
            <span className={style.howMuchIsLeft}>
              / Осталось {howMuchIsLeft} из&nbsp;
              {filters.filters.map((filter: IFiltersIngredients) => {
                if (filter.name === fillersType?.name) {
                  return filter.ingredients.map((item) => {
                    if (item.name === contentHeader.name) {
                      return item.count;
                    }
                  });
                }
              })}
            </span>
          </div>
        )}
        <div className={classNames(style.content, {}, [])}>
          {!isCircleCheckbox && !isSelectList && productsType && (
            <ul className={style.list}>
              {productsType.map((item) => {
                return (
                  <CheckboxListColumnSquare
                    isCircleCheckbox={isCircleCheckbox}
                    productsType={item}
                    className={style.checkboxWhiteBackground}
                    changeType={changeType}
                    changeChecked={changeChecked}
                    disabled={func && howMuchIsLeft === func[0].count}
                    name={contentHeader?.name}
                  />
                );
              })}
            </ul>
          )}
          {isCircleCheckbox &&
            !isSelectList &&
            productsType &&
            productsType.map((item: any) => {
              const id = nanoid();
              return (
                <CheckboxListCircle
                  key={id}
                  isCircleCheckbox={isCircleCheckbox}
                  productsType={item}
                  isFillers
                  checked={isFillerChecked(checkboxState?.name, item.name)}
                  isFillerChecked={isFillerChecked(
                    checkboxState?.name,
                    item.name
                  )}
                  changeChecked={changeChecked}
                  changeType={changeType}
                  changeFiltersType={changeFiltersType}
                />
              );
            })}
          {isSelectList &&
            productsType &&
            Object.entries(selectListArray).map(([key, value]) => {
              if (key === 'basis' || key === 'additionally') {
                return;
              }
              const id = nanoid();

              return (
                <SelectList
                  key={key}
                  // @ts-ignore
                  productsType={value.productsType}
                  // @ts-ignore
                  header={value?.header}
                  id={id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
