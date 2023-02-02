import React, { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import classnames from "classnames";

import { useAppDispatch } from "app/store";

import { CardProps } from "widgets/Card";

import { setOpenProductsCard } from "features/productions";

import { StatusMarker, Button, StatusMarkerProps } from "shared";

import style from "./Card.module.scss";

const Card: FC<CardProps> = (props) => {
  const {
    className = "",
    imageWrapperClassName = "",
    imageUrl = "",
    header,
    description,
    cost = null,
    previousCost = null,
    statuses,
    isInfo,
    buttonText = "В корзину",
    buttonColor = "default",
    isGrayTheme = false,
    disabled = false,
    onClick,
    id,
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
        setOpenProductsCard({
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
      className={classnames(style.card, { [style.info]: isInfo }, [className])}
      id={id}
      onClick={() => {}}
    >
      <div
        className={classnames(style.image_wrapper, imageWrapperClassName)}
        style={{
          backgroundImage: `url(images/${imageUrl})`,
        }}
      >
        <div className={style.card_status_wrapper}>
          {statuses &&
            statuses.map((status: StatusMarkerProps) => {
              const id = nanoid();

              return (
                <StatusMarker
                  key={id}
                  color={status.color}
                  className={style.card_status}
                >
                  {status.children}
                </StatusMarker>
              );
            })}
        </div>
      </div>
      <div
        className={classnames(style.description_wrapper, {
          [style.description_wrapper_info]: isInfo,
        })}
      >
        <h3>{header}</h3>
        <p className={style.descriprion}>{description}</p>
        <div className={style.cost_wrapper}>
          {(cost || previousCost) && (
            <div className={style.current_cost}>
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
          <Button
            className={style.button_buy}
            color={buttonColor}
            isGrayTheme={isGrayTheme}
            type="button"
            disabled={disabled}
            onClick={
              (onClick && handleButtonClick) || handleCardClick(imageUrl)
            }
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
