import React, { FC } from 'react';

import Icons from '../../assets/icons/sprite.svg';

interface SvgProps {
  name: string;
  className?: string;
  width: string;
  height: string;
}

const Svg: FC<SvgProps> = (props) => {
  const {
    name,
    className,
    width,
    height,
  } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${Icons}#${name}`} />
    </svg>
  );
};

export default Svg;