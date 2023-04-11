import React from "react";

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import style from './Carousel.module.scss';
import classNames from "classnames/dedupe";
import {useSelector} from "react-redux";
import {RootState} from "../../../../app/store";
import {nanoid} from "nanoid";
// import SliderWrapper from "./SlickStyle";

export const Carousel = React.forwardRef((props, ref) => {
  const descriptions = useSelector((state: RootState) => state.description.descriptions);
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
          {
            descriptions.map((link) => {
              const id = nanoid();
              {/*<img src={`images/${link.name}`} />*/}
              console.log(link.name)
              return (
                  <div>
                    <div className={style.imageWrapper} style={{ backgroundImage: "url(" + require(`/public/images/${link.name}`) + ")", backgroundPosition: "center", backgroundSize: "cover" }} />
                  </div>
              );
            })
          }
      </Slider>
  )
});
