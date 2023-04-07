import React, { FC } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { useAppDispatch } from "app/store";

import {
  openProductsCardSelector,
  ChooseCard,
  openProductsCardActions,
} from "features/productions";

import { Button } from "shared";

import style from "./ChooseCardWrapper.module.scss";

export const ChooseCardWrapper: FC = () => {
  const dispatch = useAppDispatch();
  const productsCard = useSelector(openProductsCardSelector);
  const cardWrapperId = nanoid();
  const buttonCloseId = nanoid();

  const handleBackgroundClick = (event: any) => {
    if (
      event.target.id === cardWrapperId ||
      event.target.id === buttonCloseId
    ) {
      dispatch(
        openProductsCardActions.setOpenProductsCard({
          imageUrl: "",
          isOpen: false,
        })
      );
    }
  };

  return (
    <>
      {productsCard.isOpen && (
        <div
          id={cardWrapperId}
          className={style.chooseCardWrapper}
          onClick={handleBackgroundClick}
        >
          <Button
            id={buttonCloseId}
            className={style.buttonClose}
            isClose="close"
            type="button"
          />
          <ChooseCard />
        </div>
      )}
    </>
  );
};
