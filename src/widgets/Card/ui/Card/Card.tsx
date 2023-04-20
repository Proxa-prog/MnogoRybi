import React, { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { useAppDispatch } from 'app/store';

import { CardProps } from 'widgets/Card';

import { openProductsCardActions } from 'features/getProductionsData';

import {
  StatusMarker,
  Button,
  StatusMarkerProps, ImageWrapper
} from 'shared';

import style from './Card.module.scss';

export const Card: FC<CardProps> = (props) => {
  const {
    className = '',
    imageWrapperClassName = '',
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
    isPreview,
  } = props;

  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleCardClick = (image: string) => {
    return () => {
      dispatch(
        openProductsCardActions.setOpenProductsCard({
          imageUrl: image,
          isOpen: true,
          header: header,
          description: description,
          cost: String(cost),
          statuses: statuses,
        })
      );
    };
  };

  return (
    <div
      className={classnames(
        style.card,
        {
          [style.info]: isInfo,
          [style.previewCard]: isPreview,
        },
        [className]
      )}
      id={id}
    >
      <div
        className={classnames(
          style.imageWrapper,
          imageWrapperClassName,
          { [style.imageWrapperPreview]: isPreview },
          { [style.background]: imageUrl === 'createPokePreview.png' },
          []
        )}
        style={{
          backgroundImage: `url(images/${imageUrl === 'createPokePreview.png' && imageUrl})`,
        }}
      >
        {
          imageUrl !== 'createPokePreview.png' &&
          <ImageWrapper
            name={imageUrl}
            alt='Продукция'
            width='100%'
            height='100%'
          />
        }
        <div className={style.cardStatusWrapper}>
          {statuses &&
            statuses.map((status: StatusMarkerProps, index) => (
                <StatusMarker
                  key={index}
                  color={status.color}
                  className={style.cardStatus}
                >
                  {status.children}
                </StatusMarker>
              )
            )}
        </div>
      </div>
      <div
        className={classnames(style.descriptionWrapper, {
          [style.descriptionWrapperInfo]: isInfo,
          [style.previewDescriptionWrapper]: isPreview,
        })}
      >
        <h3 className={classnames({ [style.previewDescription]: isPreview })}>
          {header}
        </h3>
        <p
          className={classnames(style.description, {
            [style.createPokeDescription]: isPreview,
          })}
        >
          {description}
        </p>
        <div
          className={classnames(style.costWrapper, {
            [style.createPokeCostWrapper]: isPreview,
          })}
        >
          {(cost || previousCost) && (
            <div className={style.currentCost}>
              {cost && (
                <p>
                  {cost}
                  &nbsp; &#8381;
                </p>
              )}
              {previousCost && (
                <span className={style.previousCost}>
                  {previousCost}
                  &nbsp; &#8381;
                </span>
              )}
            </div>
          )}
          {isPreview ? (
            <Link to={`/constructor`} className={style.createPokeButton}>
              <Button type='button'>
                  Создать поке
              </Button>
            </Link>
          ) : (
            <Button
              className={classnames(style.buttonBuy)}
              color={buttonColor}
              isGrayTheme={isGrayTheme}
              type='button'
              disabled={disabled}
              onClick={
                (onClick && handleButtonClick) || handleCardClick(imageUrl)
              }
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
