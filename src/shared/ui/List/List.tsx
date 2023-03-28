import React, {FC, useState} from 'react';
import {nanoid} from '@reduxjs/toolkit';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import {getRestaurantProducts} from "../../../features/restaurant";

import {IProducts} from 'entities/basket/model/types/basketTypes';
import {useAppDispatch} from "../../../app/store";

import style from './List.module.scss';

export interface ListProps {
  classNameItem?: string;
  classNameList?: string;
  items: IProducts[];
  isLink?: boolean;
  isNavigate?: boolean;
  isText?: boolean;
  onClick?: () => void;
}

export const List: FC<ListProps> = (props) => {
  const {
    classNameItem,
    classNameList,
    items,
    isLink = false,
    isNavigate = false,
    isText = false,
    onClick,
  } = props;
  const dispatch = useAppDispatch();

  const handleLinkClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const newArray = items.map((item) => {
      if (event.currentTarget.id === `navLink${item.id}`) {

        return {...item, isCurrent: !item.isCurrent};
      }

      return {...item, isCurrent: false};
    })

    dispatch(getRestaurantProducts(newArray));
  };

  return (
    <ul className={classNames(
      style.default,
      classNameList,
    )}
    >
      {
        items.map((item: IProducts) => {
          const id = nanoid();

          return (
            <li
              className={classNames(
                style.defaultLi,
                classNameItem,
                {[style.textShadow]: item.isCurrent && item.isCurrent}
              )}
              key={id}
              id={`navLink${item.id}`}
              onClick={handleLinkClick}
            >
              {
                isLink && <Link to={`/${item.id}`}>{item.name}</Link>
              }
              {
                isNavigate && <a href={`/#${item.id}`}>{item.name}</a>
              }
              {
                isText && <span>{item.name}</span>
              }
            </li>
          )
        })
      }
    </ul>
  );
};
