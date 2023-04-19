import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { IProducts } from 'entities/basket';

import { Button } from "shared";

import style from './List.module.scss';

export interface ListProps {
  classNameItem?: string;
  classNameList?: string;
  items: IProducts[];
  isLink?: boolean;
  isNavigate?: boolean;
  isText?: boolean;
  isButton?: boolean;
  buttonMoreIsOpen?: boolean;
  onClick?: (event?: any, items?: any) => void;
  handleButtonMoreClick?: (isTrue: boolean) => void;
}

export const List: FC<ListProps> = (props) => {
  const {
    classNameItem,
    classNameList,
    items,
    isLink = false,
    isNavigate = false,
    isText = false,
    isButton = false,
    buttonMoreIsOpen = false,
    onClick,
    handleButtonMoreClick,
  } = props;

  const handleMoreClick = () => {
    return () => {
      handleButtonMoreClick && handleButtonMoreClick(!buttonMoreIsOpen);
    };
  };

  return (
    <ul className={classNames(style.default, classNameList)}>
      {items.map((item: IProducts, index: number) => {

        return (
          <li
            className={classNames(style.defaultLi, classNameItem, {
              [style.textShadow]: item.isCurrent && item.isCurrent,
            })}
            key={index}
            id={`navLink${item.id}`}
            onClick={onClick}
          >
            {isLink && <Link to={`/${item.id}`}>{item.name}</Link>}
            {isNavigate && <Link to={`/#${item.id}`}>{item.name}</Link>}
            {isText && <span>{item.name}</span>}
          </li>
        );
      })}
      {isButton && (
        <Button
          className={classNames(style.defaultLi, classNameItem, style.buttonMore)}
          type='button'
          imageRight='property_expand_down.svg'
          imageHeight={24}
          imageWidth={24}
          onClick={handleMoreClick}
        >
          Ещё
        </Button>
      )}
    </ul>
  );
};
