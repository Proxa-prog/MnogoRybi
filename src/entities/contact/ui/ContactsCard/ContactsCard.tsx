import React, { FC } from 'react';

import { IContactsCard } from 'entities/contact';

import Button from 'shared/ui/Button/Button';

import style from './ContactsCard.module.scss';

export interface ContactsCardProps {
  card: IContactsCard;
  onClick?: () => void;
}

const ContactsCard: FC<ContactsCardProps> = (props) => {
  const {
    card,
    onClick,
  } = props;

  return (
    <div className={style.contacts_card}>
      <h3>{card.name}</h3>
      <p>{card.workTime}</p>
      <p>{card.phone}</p>
      <Button
        className={style.button_show_on_map}
        isGrayTheme
        type='button'
        onClick={onClick}
      >
        Показать на карте
      </Button>
    </div>
  )
};

export default ContactsCard;
