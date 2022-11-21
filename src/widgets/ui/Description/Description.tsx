import React, { FC, useState } from 'react';

import classNames from 'classnames';

import Button from 'shared/ui/Button/Button';

import style from './Description.module.scss';
import { DESCRIPTION_IMAGES_LINKS } from 'entities/constants/constants';
import { nanoid } from '@reduxjs/toolkit';

export interface DescriptionProps {

}

const Description: FC<DescriptionProps> = (props) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [buttonClickCounter, setButtonClickCounter] = useState(1);
  const [isButtonPrevDisabled, setIsButtonPrevDisabled] = useState(true);
  const [isButtonForwardDisabled, setIsButtonForwardDisabled] = useState(false);

  const onButtonBackClick = () => {
    setButtonClickCounter(prev => prev - 1);

    buttonClickCounter < DESCRIPTION_IMAGES_LINKS.length + 1 && setIsButtonForwardDisabled(false);

    buttonClickCounter < 3
      ? setIsButtonPrevDisabled(true)
      : setIsButtonPrevDisabled(false), setWindowWidth(prev => prev + window.innerWidth)
  };

  const onButtonForwardClick = () => {
    setButtonClickCounter(prev => prev + 1);

    buttonClickCounter > 0 && setIsButtonPrevDisabled(false);

    buttonClickCounter === DESCRIPTION_IMAGES_LINKS.length - 1
      ? setIsButtonForwardDisabled(true)
      : setIsButtonForwardDisabled(false); setWindowWidth(prev => prev - window.innerWidth)
  };
  console.log(buttonClickCounter);

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
          DESCRIPTION_IMAGES_LINKS.map((link) => {
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
          DESCRIPTION_IMAGES_LINKS.map((item) => {
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
