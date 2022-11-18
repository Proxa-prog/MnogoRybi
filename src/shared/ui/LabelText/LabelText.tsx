import React, { FC } from 'react';
import classNames from 'classnames';

import style from './LabelText.module.scss';

export interface LabelTextProps {
  className?: string;
  children: string;
}

const LabelText: FC<LabelTextProps> = (props) => {
  const {
    className,
    children,
  } = props;

  return (
    <p
      className={classNames(
        style.label_text,
        className,
      )}
    >
      {children}
    </p>
  );
};

export default LabelText;
