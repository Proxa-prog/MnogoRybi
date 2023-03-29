import React, { FC } from 'react';

export interface ImageWrapperProps {
  name: string | undefined;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const ImageWrapper: FC<ImageWrapperProps> = (props) => {
  const {
    name,
    alt,
    className,
    width,
    height,
  } = props;

  return (
    <img
      className={className}
      src={`images/${name}`}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
