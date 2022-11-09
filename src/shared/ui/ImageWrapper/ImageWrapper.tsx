import React, { FC } from 'react';

interface ImageWrapperProps {
  name: string;
  alt: string;
  className?: string;
}

const ImageWrapper: FC<ImageWrapperProps> = (props) => {
  const {
    name,
    alt,
    className,
  } = props;

  return <img className={className} src={`images/${name}`} alt={alt} width={24} height={24} />;
};

export default ImageWrapper;
