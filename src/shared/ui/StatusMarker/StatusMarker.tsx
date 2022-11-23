import React, { FC } from 'react';
import classNames from 'classnames';

import style from './StatusMarker.module.scss';

type ButtonColor = 'yellow' | 'blue' | 'purple' | 'gray' | 'green';

export interface StatusMarkerProps {
  className?: string;
  children?: string | number;
  color?: ButtonColor;
}
const StatusMarker: FC<StatusMarkerProps> = (props) => {
  const {
    className,
    children,
    color = 'green',
  } = props;

  return (
    <span
      className={classNames(
        style.status_marker,
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

export default StatusMarker;
