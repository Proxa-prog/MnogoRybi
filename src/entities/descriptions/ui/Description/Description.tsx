import React, {
  FC,
  useEffect,
  useState,
} from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import { getRestaurantPagesInfoSelector } from 'features/getRestaurantData';

import {
  descriptionsActions,
  ButtonExpand,
  Carousel,
} from 'entities/descriptions';

import style from './Description.module.scss';

export const Description: FC = () => {
  const dispatch = useAppDispatch();
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);
  let sliderRef = React.useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // @ts-ignore
  const handleButtonForwardClick = () => sliderRef?.current?.slickNext();
  // @ts-ignore
  const handleButtonPrevClick = () => sliderRef?.current?.slickPrev();

  useEffect(() => {
    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);

  useEffect(() => {
    dispatch(descriptionsActions.changeDescription(pagesInfo.mainPageDescriptionImagesLinks));
  }, [pagesInfo.mainPageDescriptionImagesLinks]);

  return (
    <div className={style.wrapper}>
      <div className={style.description}>
        {windowWidth > 1023 && (
          <ButtonExpand
            className={style.prevArrow}
            isTurn='back'
            onClick={handleButtonPrevClick}
          />
        )}
        <Carousel ref={sliderRef}></Carousel>
        {windowWidth > 1023 &&
          <ButtonExpand
            className={style.nextArrow}
            isTurn='forward'
            onClick={handleButtonForwardClick}
          />
        }
      </div>
    </div>
  );
};
