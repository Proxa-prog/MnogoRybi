import React from "react";

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import style from './Carousel.module.scss';
import classNames from "classnames/dedupe";
// import SliderWrapper from "./SlickStyle";

export const Carousel = React.forwardRef((props, ref) => {
  const settingsNoModules = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: style.dots,
    // arrows: false
  };

  return (
    // <SliderWrapper>
      <Slider
        // @ts-ignore
        ref={ref}
        {...settingsNoModules}
      >
        <div>
          <img src='images/description_background.jpg' />
        </div>
        <div>
          <img src='images/cheesecake.jpg' />
        </div>
        <div>
          <img src='images/poke/poke_with_turkey.jpg' />
        </div>
      </Slider>
    // </SliderWrapper>
  )
});
