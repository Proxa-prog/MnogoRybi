import React, { FC } from 'react';
import classnames from 'classnames';

import Image from '../../assets/image/poke_with_turkey.jpg';
import ImageInfo from '../../assets/image/cheesecake.jpg';
import Button, { ButtonColor } from '../../../shared/ui/Button/Button';
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
  isInfo?: boolean;
  buttonText?: string;
  buttonColor?: ButtonColor;
  isGrayTheme?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  id?: string;
}

const Card: FC<CardProps> = (props) => {
  const {
    className = '',
    imageUrl,
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

  // const fetchUser = fetch('http://localhost:3001/cards/2')
  //   .then(response => response.json())
  //   .then(json => console.log(json));

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={classnames(
        style.card,
        { [style.info]: isInfo },
        [style[className]],
      )}
      id={id}
    >
      <div
        className={style.image_wrapper}
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <div className={style.card_status_wrapper}>
          {(statuses !== undefined) ? statuses.map((status: StatusMarkerProps) => (
            <StatusMarker
              key={0}
              color={status.color}
              className={style.card_status}
            >
              {status.children}
            </StatusMarker>
          ))
            : null}
        </div>
      </div>
      <div className={classnames(
        style.description_wrapper,
        { [style.description_wrapper_info]: isInfo },
      )}
      >
        <h3>{header}</h3>
        <p className={style.descriprion}>{description}</p>
        <div className={style.cost_wrapper}>
          {(cost !== null || previousCost !== null)
            ? (
              <div className={style.current_cost}>
                {(cost !== null)
                  ? (
                    <p>
                      {cost}
                      &nbsp;
                      &#8381;
                    </p>
                  )
                  : null}
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
            )
            : null}
          <Button
            className={style.button_buy}
            color={buttonColor}
            isGrayTheme={isGrayTheme}
            type="button"
            disabled={disabled}
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
