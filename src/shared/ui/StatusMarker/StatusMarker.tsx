import React, { FC } from 'react';
import classNames from 'classnames';

import style from './StatusMarker.module.scss';

export type ButtonColor = 'yellow' | 'blue' | 'purple' | 'gray' | 'green';

export interface StatusMarkerProps {
  className?: string;
  children?: string | number;
  color?: ButtonColor;
}
export const StatusMarker: FC<StatusMarkerProps> = (props) => {
  const {
    className,
    children,
    color = 'green',
  } = props;

  return (
    <span
      className={classNames(
        style.statusMarker,
        style[color],
        [
          className,
        ],
      )}
    >
      {children}
    </span>
  );
};
