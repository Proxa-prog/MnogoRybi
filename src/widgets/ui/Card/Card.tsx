import React, { FC } from 'react';

import { nanoid } from '@reduxjs/toolkit';

import classnames from 'classnames';

import { useAppDispatch } from 'app/store';
import { setOpenProductsCard } from 'app/store/reducers/openProductsCard';

import Button, { ButtonColor } from 'shared/ui/Button/Button';
import StatusMarker, { StatusMarkerProps } from 'shared/ui/StatusMarker/StatusMarker';


import style from './Card.module.scss';


export interface CardProps {
  className?: string;
  imageUrl?: string;
  header?: string;
  description?: string;
  cost?: number;
  previousCost?: number;
  statuses?: StatusMarkerProps[];
  isInfo?: boolean;
  buttonText?: string;
  buttonColor?: ButtonColor;
  isGrayTheme?: boolean;
  disabled?: boolean;
  onClick?: (image: string) => JSX.Element;
  id?: string;
}

const Card: FC<CardProps> = (props) => {
  const {
    className = '',
    imageUrl = '',
    header,
    description,
    cost = null,
    previousCost = null,
    statuses,
    isInfo,
    buttonText = 'В корзину',
    buttonColor = 'default',
    isGrayTheme = false,
    disabled = false,
    onClick,
    id,
  } = props;

  const dispatch = useAppDispatch();

  const handleButtonClick = (image: string) => {
    if (onClick) {
      onClick(image);
    }
  };

  const handleCardClick = (image: string) => {
    dispatch(setOpenProductsCard({
      imageUrl: image,
      isOpen: true,
      header: header,
      description: description,
      cost: cost,
      statuses: statuses,
    }));
  };

  return (
    <div
      className={classnames(
        style.card,
        { [style.info]: isInfo },
        [className],
      )}
      id={id}
      onClick={() => {}}
    >
      <div
        className={style.image_wrapper}
        style={{
          backgroundImage: `url(images/${imageUrl})`,
        }}
      >
        <div className={style.card_status_wrapper}>
          {(statuses) && statuses.map((status: StatusMarkerProps) => {
            const id = nanoid();

            return (
              <StatusMarker
                key={id}
                color={status.color}
                className={style.card_status}
              >
                {status.children}
              </StatusMarker>
            )
          }
          )}
        </div>
      </div>
      <div className={classnames(
        style.description_wrapper,
        { [style.description_wrapper_info]: isInfo },
      )}
      >
        <h3>{header}</h3>
        <p className={style.descriprion}>
          {description}
        </p>
        <div className={style.cost_wrapper}>
          {(cost || previousCost) && (
            <div className={style.current_cost}>
              {(cost) && (
                <p>
                  {cost}
                  &nbsp;
                  &#8381;
                </p>
              )}
              {(previousCost) && (
                <span className={style.previousCost}>
                  {previousCost}
                  &nbsp;
                  &#8381;
                </span>
              )}
            </div>
          )}
          <Button
            className={style.button_buy}
            color={buttonColor}
            isGrayTheme={isGrayTheme}
            type="button"
            disabled={disabled}
            onClick={() => {handleCardClick(imageUrl)}}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
