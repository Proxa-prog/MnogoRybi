import React, { FC } from 'react';
import classnames from 'classnames';

import style from './Counter.module.scss';

export interface CounterProps {
  count?: number;
  classNames?: string;
}

export const Counter: FC<CounterProps> = (props) => {
  const {
    count = 0,
    classNames,
  } = props;

  return (
    <span
      className={classnames(
        style.counter,
        [
          classNames,
        ],
      )}
    >
      {count}
    </span>
  );
};
