import React, { FC } from 'react';
import classNames from 'classnames';

import style from './LabelText.module.scss';

export interface LabelTextProps {
  className?: string;
  children: string;
  id?: string;
}

export const LabelText: FC<LabelTextProps> = (props) => {
  const {
    className,
    children,
    id,
  } = props;

  return (
    <label
      className={classNames(
        style.label_text,
        className,
      )}
      htmlFor={id}
    >
      {children}
    </label>
  );
};
