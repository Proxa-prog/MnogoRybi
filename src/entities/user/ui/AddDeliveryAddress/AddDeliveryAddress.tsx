import * as React from 'react';
import {useState} from "react";

import {Button, Input} from "shared";
import {useAppDispatch} from "app/store";
import {addDeliveryAddress, changeIsAddNewAddressOpen} from "../../model/slice/userAccountSlice";

import style from "./AddDeliveryAddress.module.scss";
import {addNewDeliveryAddressAsync} from "../../model/services/addNewDeliveryAddressAsync";
import {useSelector} from "react-redux";
import {openModalUserEnterSelector} from "../../model/selectors/openModalUserEnterSelector";
import {setUserAccountStateSelector} from "../../model/selectors/setUserAccountStateSelector";

export const AddDeliveryAddress: React.FC = () => {
  const dispatch = useAppDispatch();
  const userEnter = useSelector(openModalUserEnterSelector);
  const userAccount = useSelector(setUserAccountStateSelector);
  const [address, setNewAddress] = useState('');

  const handleButtonModalClose = () => {
    dispatch(changeIsAddNewAddressOpen());
  };

  const handleInputAddressChange = (newAddress: string | undefined) => {
    newAddress && setNewAddress(newAddress);
  };

  const handleButtonAddAddressClick = (newAddress: string) => {
    dispatch(addDeliveryAddress(newAddress));
    dispatch(addNewDeliveryAddressAsync({
      email: userEnter.userAccount.email,
      password: userEnter.userAccount.password,
      isWindowUserEnterOpen: userEnter.isOpen,
      isUserLogin: userAccount.userAccount.isLogin,
      newDeliveryAddress: newAddress,
    }));
  };

  return (
    <div className={style.modal}>
      <Button
        className={style.button_close}
        isClose='close'
        type='button'
        onClick={handleButtonModalClose}
      />
      <h3>Добавьте адрес</h3>
      <Input
        className={style.input_text}
        label=''
        placeholder='Введите адрес'
        name='Введите адрес'
        type='text'
        onChange={(event) => {handleInputAddressChange(event)}}
      />
      <Button
        className={style.button_add_new_address}
        type='button'
        color='yellow'
        onClick={() => {handleButtonAddAddressClick(address)}}
      >
        Добавить новый адрес
      </Button>
    </div>
  )
};
