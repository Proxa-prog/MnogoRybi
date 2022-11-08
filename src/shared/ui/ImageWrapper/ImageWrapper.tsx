import React, { FC } from 'react';

interface ImageWrapperProps {
  name: string;
  alt: string;
}

const ImageWrapper: FC<ImageWrapperProps> = (props) => {
  const {
    name,
    alt,
  } = props;

  return <img src={`images/${name}`} alt={alt} />;
};

export default ImageWrapper;
