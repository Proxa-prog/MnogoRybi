import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import React, { FC } from 'react';

import style from './List.module.scss';

export interface ListProps {
  classNameItem?: string;
  classNameList?: string;
  items: string[];
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
        items.map((item: string) => {
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
                  ? <a href={`#${item}`}>{item}</a>
                  : <span>{item}</span>
              }
            </li>
          )
        })
      }
    </ul>
  );
};

export default List;
