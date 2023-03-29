import * as React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch } from 'app/store';
import {
  changeAgreement,
  changeEmail,
  changeFirstName,
  changeIsOpenRegistration,
  changePhone,
  setPassword,
  openConfirmationSelector,
  getRegistrationSelector,
} from 'features/registration';

import {
  openModalUserEnterSelector,
  changeIsOpenUserEnter,
  registerUser,
} from "entities/user";

import {
  MOK_PASSWORD,
  Button,
  Checkbox,
  Input,
  USER_DATA,
} from 'shared';

import style from './ModalRegistration.module.scss';
import {getRestaurantPagesInfoSelector} from "../../../restaurant";

const ModalRegistration: React.FC = () => {
  const dispatch = useAppDispatch();
  const buttonCloseId = nanoid();
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(openModalUserEnterSelector);
  const confirmation = useSelector(openConfirmationSelector);
  const restaurant = useSelector(getRestaurantPagesInfoSelector);

  const handleButtonUserEnterClick = () => {
    dispatch(changeIsOpenRegistration(registration.isOpen));
    dispatch(changeIsOpenUserEnter(userEnter.isOpen));
  };

  const handleCheckboxAgreementChange = () => {
    dispatch(changeAgreement(registration.agreement));
  };

  const handleButtonCloseChange = () => {
    dispatch(changeIsOpenRegistration(registration.isOpen));
  };

  const handleInputNameChange = (firstName: string | undefined) => {
    dispatch(changeFirstName(firstName));
  };

  const handleInputEmailChange = (email: string | undefined) => {
    dispatch(changeEmail(email));
  };

  const handleInputPhoneChange = (phone: string | undefined) => {
    dispatch(changePhone(phone));
  };

  const handleButtonRegistrationClick = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setPassword(MOK_PASSWORD));

    const restaurantAddress = restaurant.restaurantAddress.map((item) => {

      return item.name;
    })

    dispatch(registerUser({
      userAccount: {
        isAddNewAddressOpen: false,
        email: registration.email,
        password: MOK_PASSWORD,
        isLogin: false,
        recoveryIsOpen: true,
      },
      userData: {
        firstName: registration.firstName,
        phone: registration.phone,
        orders: [],
        userUrl: USER_DATA,
        deliveryAddress: [],
      },
    }));
  };

  return (
    <form
      className={style.modal}
      onSubmit={handleButtonRegistrationClick}
    >
      <Button
        id={buttonCloseId}
        className={style.button_close}
        isClose='close'
        type='button'
        onClick={handleButtonCloseChange}
      />
      <h3>Регистрация</h3>
      <Input
        className={style.input_text}
        label='Имя'
        placeholder='Введите имя'
        name='Имя'
        type='text'
        required
        onChange={handleInputNameChange}
        value={registration.firstName}
      />
      <Input
        className={style.input_text}
        label='Email'
        placeholder='Введите email'
        name='Email'
        type='email'
        required
        onChange={handleInputEmailChange}
        value={registration.email}
      />
      <Input
        className={style.input_text}
        label='Телефон'
        placeholder='Введите телефон'
        name='Телефон'
        type='number'
        required
        onChange={handleInputPhoneChange}
        value={registration.phone}
      />
      <div className={style.agreement_wrapper}>
        <Checkbox
          className={style.checkbox}
          required
          checked={registration.agreement}
          onChange={handleCheckboxAgreementChange}
        />
        <span>Даю согласие на обработку персональных данных</span>
      </div>
      <Button
        className={style.button_registration}
        type='submit'
        color='yellow'
        disabled={!registration.agreement}
        onClick={() => {}}
      >
        Зарегистрироваться
      </Button>
      <div className={style.have_account_wrapper}>
        <span className={style.have_account}>Уже есть учетная запись?&nbsp;&nbsp;</span>
        <Button
          className={style.button_have_account}
          onClick={handleButtonUserEnterClick}
          type='button'
        >
          Войти
        </Button>
      </div>
    </form>
  )
};

export default ModalRegistration;
