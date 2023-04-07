import React, { useState } from 'react';

import { useAppDispatch } from 'app/store';

import {
  userAccountActions,
  userAccountSelector,
  userEnterSelector,
  addNewDeliveryAddressAsync,
} from 'entities/user';

import { useSelector } from 'react-redux';

import { Button, Input } from 'shared';

import style from './AddDeliveryAddress.module.scss';

export const AddDeliveryAddress: React.FC = () => {
  const dispatch = useAppDispatch();
  const userEnter = useSelector(userEnterSelector);
  const userAccount = useSelector(userAccountSelector);
  const [address, setNewAddress] = useState('');

  const handleButtonModalClose = () => {
    dispatch(userAccountActions.changeIsModalAddNewAddressOpen());
  };

  const handleInputAddressChange = (newAddress: string | undefined) => {
    newAddress && setNewAddress(newAddress);
  };

  const handleButtonAddAddressClick = (newAddress: string) => {
    dispatch(userAccountActions.addDeliveryAddress(newAddress));
    dispatch(
      addNewDeliveryAddressAsync({
        email: userEnter.userAccount.email,
        password: userEnter.userAccount.password,
        isWindowUserEnterOpen: userEnter.isOpen,
        isUserLogin: userAccount.userAccount.isLogin,
        newDeliveryAddress: newAddress,
      })
    );
  };

  return (
    <div className={style.modal}>
      <Button
        className={style.buttonClose}
        isClose='close'
        type='button'
        onClick={handleButtonModalClose}
      />
      <h3>Добавьте адрес</h3>
      <Input
        className={style.inputText}
        label=''
        placeholder='Введите адрес'
        name='Введите адрес'
        type='text'
        onChange={(event) => {
          handleInputAddressChange(event);
        }}
      />
      <Button
        className={style.buttonAddNewAddress}
        type='button'
        color='yellow'
        onClick={() => {
          handleButtonAddAddressClick(address);
        }}
      >
        Добавить новый адрес
      </Button>
    </div>
  );
};
