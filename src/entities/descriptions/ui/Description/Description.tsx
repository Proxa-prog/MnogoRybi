import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';

import { RootState, useAppDispatch } from 'app/store';

import { getRestaurantPagesInfoSelector } from 'features/restaurant';

import {
 IDescription,
 changeDescription,
 DESCRIPTION_COUNT_LENGTS,
 } from 'entities/descriptions';

import { Button } from 'shared';

import style from './Description.module.scss';

export interface DescriptionProps {

}

const Description: FC<DescriptionProps> = (props) => {
  const dispatch = useAppDispatch();
  const descriptions = useSelector((state: RootState) => state.description.descriptions);
  const [windowWidth, setWindowWidth] = useState(0);
  const [buttonClickCounter, setButtonClickCounter] = useState(0);
  const [isButtonPrevDisabled, setIsButtonPrevDisabled] = useState(true);
  const [isButtonForwardDisabled, setIsButtonForwardDisabled] = useState(false);
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);

  const chooseCurrentDescription = (counter: number, descriptionsArray: IDescription[]) => {
    const copy = JSON.parse(JSON.stringify(descriptionsArray))

    const newDescriptionsArray = copy.map((description: IDescription, index: number) => {

      description.isCurrent = false;

      if (index === counter) {
        description.isCurrent = true;

        return description;
      }

      return description;
    });

    dispatch(changeDescription(newDescriptionsArray));
  };

  const onButtonBackClick = () => {
    setButtonClickCounter(prev => prev - 1);

    buttonClickCounter < descriptions.length + 1 && setIsButtonForwardDisabled(false);

    buttonClickCounter < descriptions.length - 1
      ? setIsButtonPrevDisabled(true)
      : setIsButtonPrevDisabled(false), setWindowWidth(prev => prev + window.innerWidth)
  };

  const onButtonForwardClick = () => {
    setButtonClickCounter(prev => prev + 1);

    buttonClickCounter > 0 && setIsButtonPrevDisabled(false);

    buttonClickCounter === descriptions.length - DESCRIPTION_COUNT_LENGTS
      ? setIsButtonForwardDisabled(true)
      : setIsButtonForwardDisabled(false); setWindowWidth(prev => prev - window.innerWidth)
  };

  useEffect(() => {
    chooseCurrentDescription(buttonClickCounter, descriptions);
  }, [buttonClickCounter]);

  useEffect(() => {
    dispatch(changeDescription(pagesInfo.mainPageDescriptionImagesLinks));
  }, [pagesInfo.mainPageDescriptionImagesLinks]);

  return (
    <section className={style.description}>
      <Button
        disabled={isButtonPrevDisabled}
        className={style.button_back}
        isTurn='back'
        type='button'
        onClick={onButtonBackClick}
      />
      <div
        className={style.images_wrapper}
        style={{ transform: `translateX(${windowWidth}px)` }}
      >
        {
          descriptions.map((link) => {
            const id = nanoid();

            return (
              <div
                key={id}
                className={style.image}
                style={{
                  backgroundImage: `url(images/${link.name})`
                }}
              />
            )
          })
        }
      </div>
      <div className={style.slider_counter}>
        {
          descriptions.map((item) => {
            const id = nanoid();

            return (
              <div
                key={id}
                className={classNames(
                  style.slider_page,
                  { [style.slider_page_current]: item.isCurrent }
                )}
              />
            )
          })
        }
      </div>
      <Button
        disabled={isButtonForwardDisabled}
        className={style.button_forward}
        isTurn='forward'
        type='button'
        onClick={onButtonForwardClick}
      />
    </section >
  );
};

export default Description;
