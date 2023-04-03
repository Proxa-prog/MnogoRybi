import React, { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { IProducts } from 'entities/basket/model/types/basketTypes';
import {useAppDispatch} from "../../../app/store";

import style from './List.module.scss';

export interface ListProps {
  classNameItem?: string;
  classNameList?: string;
  items: IProducts[];
  isLink?: boolean;
  isNavigate?: boolean;
  isText?: boolean;
  onClick?: (event?: any, items?: any) => void;
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
              onClick={onClick}
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
