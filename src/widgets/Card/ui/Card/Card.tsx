import React, {FC, useEffect, useState} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { useAppDispatch } from 'app/store';

import { CardProps } from 'widgets/Card';

import { openProductsCardActions } from 'features/getProductionsData';

import {
  StatusMarker,
  Button,
  StatusMarkerProps
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

  const useProgressiveImage = (src: string) => {
    const [sourceLoaded, setSourceLoaded] = useState('')

    useEffect(() => {
      const img = new Image()
      img.src = src
      img.onload = () => setSourceLoaded(src)
    }, [src])

    return sourceLoaded;
  }
  const loaded = useProgressiveImage(`images/${imageUrl}`)
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
      onClick={() => {}}
    >
      <div
        className={classnames(
          style.imageWrapper,
          imageWrapperClassName,
          { [style.imageWrapperPreview]: isPreview },
          [style.lazyBackground]
        )}
        style={{
          backgroundImage: `url(${loaded || ''})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className={style.cardStatusWrapper}>
          {statuses &&
            statuses.map((status: StatusMarkerProps) => {
              const id = nanoid();

              return (
                <StatusMarker
                  key={id}
                  color={status.color}
                  className={style.cardStatus}
                >
                  {status.children}
                </StatusMarker>
              );
            })}
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
            <Button type='button'>
              <Link to={`/constructor`} className={style.createPokeButton}>
                Создать поке
              </Link>
            </Button>
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
