import React, { FC } from 'react';

import styles from './Typography.module.scss';

type TypographyType = 'H1' | 'H2' | 'H3' | 'SUB1' | 'SUB2' | 'TEXT1' | 'TEXT2' | 'CAPTION1' | 'CAPTION2';

type TypographyProps = {
  type: TypographyType;
  children: React.ReactNode;
}

const Typography: FC<TypographyProps> = (props) => {
  const {
    type,
    children,
  } = props;
  return (
    <p className={styles[type]}>{children}</p>
  );
};

export default Typography;
