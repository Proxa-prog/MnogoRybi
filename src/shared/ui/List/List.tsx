import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import React, { FC } from 'react';
import { IProducts } from 'entities/constants/constants';

import style from './List.module.scss';

export interface ListProps {
  classNameItem?: string;
  classNameList?: string;
  items: IProducts[];
  isLink?: boolean;
}

const List: FC<ListProps> = (props) => {
  const {
    classNameItem,
    classNameList,
    items,
    isLink = false,
  } = props;

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
              )}
              key={id}
            >
              {
                isLink
                  ? <a href={`#${item}`}>{item.name}</a>
                  : <span>{item.name}</span>
              }
            </li>
          )
        })
      }
    </ul>
  );
};

export default List;
