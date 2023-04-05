import React, { FC } from 'react';

import { IContactsCard } from 'entities/contact';

import { Button } from 'shared';

import style from './ContactsCard.module.scss';

export interface ContactsCardProps {
  card: IContactsCard;
  onClick?: () => void;
}

export const ContactsCard: FC<ContactsCardProps> = (props) => {
  const { card, onClick } = props;

  return (
    <div className={style.contactsCard}>
      <h3>{card.name}</h3>
      <p>{card.workTime}</p>
      <p>{card.phone}</p>
      <Button
        className={style.buttonShowOnMap}
        isGrayTheme
        type='button'
        onClick={onClick}
      >
        Показать на карте
      </Button>
    </div>
  );
};
