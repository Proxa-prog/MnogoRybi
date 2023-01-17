import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch } from 'app/store';

import { setOpenProductsCard } from 'features/openProductsCard/model/slice/openProductsCardSlice';
import { openProductsCardSelector } from 'features/openProductsCard/model/slice/openProductsCardSelector';
import ChooseCard from 'features/ChooseCard/ChooseCard';

import Button from 'shared/ui/Button/Button';


import style from './ChooseCardWrapper.module.scss';

export interface ChooseCardWrapperProps {
}

const ChooseCardWrapper: FC<ChooseCardWrapperProps> = (props) => {
  const dispatch = useAppDispatch();
  const productsCard = useSelector(openProductsCardSelector);
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
