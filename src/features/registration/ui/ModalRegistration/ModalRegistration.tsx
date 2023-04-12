import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch } from 'app/store';

import {
  getRegistrationSelector,
  registrationActions,
} from 'features/registration';

import {
  userEnterSelector,
  registerUser,
  userEnterActions,
} from 'entities/user';

import {
  Button,
  Checkbox,
  MOK_PASSWORD,
  Input,
  USER_DATA,
} from 'shared';

import style from './ModalRegistration.module.scss';

export const ModalRegistration: React.FC = () => {
  const dispatch = useAppDispatch();
  const buttonCloseId = nanoid();
  const registration = useSelector(getRegistrationSelector);
  const userEnter = useSelector(userEnterSelector);

  const handleButtonUserEnterClick = () => {
    dispatch(registrationActions.changeIsOpenRegistration(registration.isOpen));
    dispatch(userEnterActions.changeIsOpenUserEnter(userEnter.isOpen));
  };

  const handleCheckboxAgreementChange = () => {
    dispatch(registrationActions.changeAgreement(registration.agreement));
  };

  const handleButtonCloseChange = () => {
    dispatch(registrationActions.changeIsOpenRegistration(registration.isOpen));
  };

  const handleInputNameChange = (firstName: string | undefined) => {
    dispatch(registrationActions.changeFirstName(firstName));
  };

  const handleInputEmailChange = (email: string | undefined) => {
    dispatch(registrationActions.changeEmail(email));
  };

  const handleInputPhoneChange = (phone: string | undefined) => {
    dispatch(registrationActions.changePhone(phone));
  };

  const handleButtonRegistrationClick = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(registrationActions.setPassword(MOK_PASSWORD));
    dispatch(
      registerUser({
        personalAreaLinks: [
          {
            name: 'Личные данные',
            id: 'PersonalArea',
            isCurrent: true,
          },
          {
            name: 'Мои заказы',
            id: 'MyOrders',
            isCurrent: false,
          },
        ],
        userAccount: {
          isModalAddNewAddressOpen: false,
          email: registration.email,
          password: MOK_PASSWORD,
          isLogin: false,
          isModalRecoveryOpen: true,
        },
        userData: {
          firstName: registration.firstName,
          phone: registration.phone,
          orders: [],
          currentOrders: [],
          userUrl: USER_DATA,
          deliveryAddress: ['Ярославль, ул. Льва Толстова, 56, кв. 36'],
        },
      })
    );
  };

  return (
    <form className={style.modal} onSubmit={handleButtonRegistrationClick}>
      <Button
        id={buttonCloseId}
        className={style.buttonClose}
        isClose='close'
        type='button'
        onClick={handleButtonCloseChange}
      />
      <h3>Регистрация</h3>
      <Input
        className={style.inputText}
        label='Имя'
        placeholder='Введите имя'
        name='Имя'
        type='text'
        required
        onChange={handleInputNameChange}
        value={registration.firstName}
      />
      <Input
        className={style.inputText}
        label='Email'
        placeholder='Введите email'
        name='Email'
        type='email'
        required
        onChange={handleInputEmailChange}
        value={registration.email}
      />
      <Input
        className={style.inputText}
        label='Телефон'
        placeholder='Введите телефон'
        name='Телефон'
        type='text'
        required
        onChange={handleInputPhoneChange}
        value={registration.phone}
      />
      <div className={style.agreementWrapper}>
        <Checkbox
          className={style.checkbox}
          required
          checked={registration.agreement}
          onChange={handleCheckboxAgreementChange}
        />
        <span>Даю согласие на обработку персональных данных</span>
      </div>
      <Button
        className={style.buttonRegistration}
        type='submit'
        color='yellow'
        disabled={!registration.agreement}
        onClick={() => {}}
      >
        Зарегистрироваться
      </Button>
      <div className={style.haveAccountWrapper}>
        <span>Уже есть учетная запись?&nbsp;&nbsp;</span>
        <Button
          className={style.buttonHaveAccount}
          onClick={handleButtonUserEnterClick}
          type='button'
        >
          Войти
        </Button>
      </div>
    </form>
  );
};
