import React, { FC } from 'react';
import classnames from 'classnames';

import Image from './poke_with_turkey.jpg';
import Button from '../../../shared/ui/Button/Button';
import StatusMarker, { StatusMarkerProps } from '../../../shared/ui/StatusMarker/StatusMarker';

import style from './Card.module.scss';

export interface CardProps {
  className?: string;
  imageUrl?: string;
  header?: string;
  description?: string;
  cost?: number;
  previousCost?: number;
  statuses?: StatusMarkerProps[];
}

const Card: FC<CardProps> = (props) => {
  const {
    className,
    imageUrl,
    header,
    description,
    cost,
    previousCost = null,
    statuses,
  } = props;

  return (
    <div className={classnames(
      style.card,
      className,
    )}
    >
      <div className={style.image_wrapper}>
        <div className={style.card_status_wrapper}>
          {(statuses !== undefined) ? statuses.map((status: StatusMarkerProps) => (
            <StatusMarker
              color={status.color}
              className={style.card_status}
            >
              {status.children}
            </StatusMarker>
          ))
            : null}
        </div>
        <img src={Image} width="305" height="240" alt="Поке с индейкой" />
      </div>
      <div className={style.description_wrapper}>
        <h3>{header}</h3>
        <p className={style.descriprion}>{description}</p>
        <div className={style.cost_wrapper}>
          <div className={style.current_cost}>
            <p>
              {cost}
              &nbsp;
              &#8381;
            </p>
            {(previousCost !== null)
              ? (
                <span className={style.previousCost}>
                  {previousCost}
                  &nbsp;
                  &#8381;
                </span>
              )
              : null}
          </div>
          <Button
            className={style.button_buy}
            color="yellow"
            type="button"
            onClick={() => {
              console.log('Товар добавлен в корзину');
            }}
          >
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
