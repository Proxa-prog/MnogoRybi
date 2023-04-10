import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'app/store';

import { getRestaurantPagesInfoSelector } from 'features/restaurant';

import {
  getDescriptionSelector,
  IDescription,
  descriptionsActions,
  ButtonExpand,
  Carousel,
} from 'entities/descriptions';

import style from './Description.module.scss';

export const Description: FC = () => {
  const dispatch = useAppDispatch();
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);
  let sliderRef = React.useRef();

  useEffect(() => {
    dispatch(descriptionsActions.changeDescription(pagesInfo.mainPageDescriptionImagesLinks));
  }, [pagesInfo.mainPageDescriptionImagesLinks]);

  return (
    <div className={style.wrapper}>
      <div className={style.description}>
        <ButtonExpand
          className={style.prevArrow}
          isTurn='back'
          // @ts-ignore
          onClick={() => sliderRef?.current?.slickPrev()}
        />
        <Carousel ref={sliderRef}></Carousel>
        <ButtonExpand
          className={style.nextArrow}
          isTurn='forward'
          // @ts-ignore
          onClick={() => sliderRef?.current?.slickNext()}
        />
      </div>
    </div>
  );
};
