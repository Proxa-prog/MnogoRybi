import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';

import { useAppDispatch } from 'app/store';

import { getRestaurantPagesInfoSelector } from 'features/restaurant';

import {
  getDescriptionSelector,
  IDescription,
  descriptionsActions,
  DESCRIPTION_COUNT_LENGTH,
} from 'entities/descriptions';

import { Button } from 'shared';

import style from './Description.module.scss';

export const Description: FC = () => {
  const dispatch = useAppDispatch();
  const descriptions = useSelector(getDescriptionSelector);
  const [windowWidth, setWindowWidth] = useState(0);
  const [buttonClickCounter, setButtonClickCounter] = useState(0);
  const [isButtonPrevDisabled, setIsButtonPrevDisabled] = useState(true);
  const [isButtonForwardDisabled, setIsButtonForwardDisabled] = useState(false);
  const pagesInfo = useSelector(getRestaurantPagesInfoSelector);

  const chooseCurrentDescription = (counter: number, descriptionsArray: IDescription[]) => {
    const copy = JSON.parse(JSON.stringify(descriptionsArray));

    const newDescriptionsArray = copy.map((description: IDescription, index: number) => {
      description.isCurrent = false;

      if (index === counter) {
        description.isCurrent = true;

        return description;
      }

      return description;
    });

    dispatch(descriptionsActions.changeDescription(newDescriptionsArray));
  };

  const onButtonBackClick = () => {
    setButtonClickCounter((prev) => prev - 1);
    buttonClickCounter < descriptions.length + 1 && setIsButtonForwardDisabled(false);
    buttonClickCounter < descriptions.length - 1
      ? setIsButtonPrevDisabled(true)
      : setIsButtonPrevDisabled(false);
    setWindowWidth((prev) => prev + window.innerWidth);
  };

  const onButtonForwardClick = () => {
    setButtonClickCounter((prev) => prev + 1);
    buttonClickCounter > 0 && setIsButtonPrevDisabled(false);
    buttonClickCounter === descriptions.length - DESCRIPTION_COUNT_LENGTH
      ? setIsButtonForwardDisabled(true)
      : setIsButtonForwardDisabled(false);
    setWindowWidth((prev) => prev - window.innerWidth);
  };

  useEffect(() => {
    chooseCurrentDescription(buttonClickCounter, descriptions);
  }, [buttonClickCounter]);

  useEffect(() => {
    dispatch(descriptionsActions.changeDescription(pagesInfo.mainPageDescriptionImagesLinks));
  }, [pagesInfo.mainPageDescriptionImagesLinks]);

  return (
    <section className={style.description}>
      <Button
        disabled={isButtonPrevDisabled}
        className={style.buttonBack}
        isTurn='back'
        type='button'
        onClick={onButtonBackClick}
      />
      <div
        className={style.imagesWrapper}
        style={{ transform: `translateX(${windowWidth}px)` }}
      >
        {descriptions.map((link) => {
          const id = nanoid();

          return (
            <div
              key={id}
              className={style.image}
              style={{
                backgroundImage: `url(images/${link.name})`,
              }}
            />
          );
        })}
      </div>
      <div className={style.sliderCounter}>
        {descriptions.map((item) => {
          const id = nanoid();

          return (
            <div
              key={id}
              className={classNames(style.sliderPage, {
                [style.sliderPageCurrent]: item.isCurrent,
              })}
            />
          );
        })}
      </div>
      <Button
        disabled={isButtonForwardDisabled}
        className={style.buttonForward}
        isTurn='forward'
        type='button'
        onClick={onButtonForwardClick}
      />
    </section>
  );
};
