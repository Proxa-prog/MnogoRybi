import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Typography.module.scss';

type TypographyType = 'H1' | 'H2' | 'H3' | 'SUB1' | 'SUB2' | 'TEXT1' | 'TEXT2' | 'CAPTION1' | 'CAPTION2';

export interface TypographyProps {
  type: TypographyType;
  className?: string;
  children?: React.ReactNode;
}

const Typography: FC<TypographyProps> = (props) => {
  const {
    type,
    className,
    children,
  } = props;

  return (
    <p className={classNames(
      styles.Typography,
      styles[type],
      [className],
    )}
    >
      {children}
    </p>
  );
};

export default Typography;
