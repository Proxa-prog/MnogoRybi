import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Slider from 'react-slick';

import { getDescriptionSelector } from 'entities/descriptions';

import style from './Carousel.module.scss';

export const Carousel = React.forwardRef((props, ref) => {
  const descriptions = useSelector(getDescriptionSelector);
  const settingsNoModules = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: style.dots,
  };

  return (
    <Slider
      // @ts-ignore
      ref={ref}
      {...settingsNoModules}
    >
      {descriptions.map((link, index) => {

        return (
          <div key={index}>
            <div
              className={style.imageWrapper}
              style={{
                backgroundImage: 'url(' + require(`/public/images/${link.name}`) + ')',
              }}
            />
          </div>
        );
      })}
    </Slider>
  );
});
