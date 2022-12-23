import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch } from 'app/store';
import { setOpenProductsCard } from 'app/store/reducers/openProductsCard';

import { openProductsCard } from 'entities/openProductsCard/model/selectors';

import Button from 'shared/ui/Button/Button';

import ChooseCard from 'widgets/ui/ChooseCard/ChooseCard';

import style from './ChooseCardWrapper.module.scss';

export interface ChooseCardWrapperProps {
}

const ChooseCardWrapper: FC<ChooseCardWrapperProps> = (props) => {
  const dispatch = useAppDispatch();
  const productsCard = useSelector(openProductsCard);
  const cardWrapperId = nanoid();
  const buttonCloseId = nanoid();

  const handleBackgroundClick = (event: any) => {
    if (event.target.id === cardWrapperId ||
      event.target.id === buttonCloseId
    ) {
      dispatch(setOpenProductsCard(
        {
          imageUrl: '',
          isOpen: false
        }
      ));
    }
  };

  return (
    <>
      {
        productsCard.isOpen && (
          <div
            id={cardWrapperId}
            className={style.choose_card_wrapper}
            onClick={handleBackgroundClick}
          >
            <Button
              id={buttonCloseId}
              className={style.button_close}
              isClose='close'
              type='button'
            />
            <ChooseCard />
          </div>
        )
      }
    </>
  )
}

export default ChooseCardWrapper;
