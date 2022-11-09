import classNames from 'classnames';
import React, { FC } from 'react';

import style from './List.module.scss';

export interface ListProps {
  classNameItem?: string;
  classNameList?: string;
  items: any[];
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
    <ul className={classNameList}>
      {
        isLink
          ? items.map((item: string) => (
            <li
              className={classNames(
                style.defaultLi,
                classNameItem,
              )}
              key={item}
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          ))
          : items.map((item: string) => <li className={classNameItem} key={item}>{item}</li>)
      }
    </ul>
  );
};

export default List;
