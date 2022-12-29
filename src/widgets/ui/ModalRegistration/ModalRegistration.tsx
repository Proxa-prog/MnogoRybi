import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

import { useAppDispatch } from 'app/store';
import {
  changeAgreement,
  changeEmail,
  changeFirstName,
  changeIsOpenRegistration,
  changePhone
} from 'app/store/reducers/registration';

import { getRegistration } from 'entities/registration/model';
import { userRigistration } from 'entities/productions/model/services/setUserData';

import Button from 'shared/ui/Button/Button';
import Checkbox from 'shared/ui/Checkbox/Checkbox';
import Input from 'shared/ui/Input/Input';

import style from './ModalRegistration.module.scss';
import userEnter, { changeIsOpenUserEnter } from 'app/store/reducers/userEnter';
import { openModalUserEnter } from 'entities/userEnter/model';

const ModalRegistration: React.FC = () => {
  const dispatch = useAppDispatch();
  const buttonCloseId = nanoid();
  const registration = useSelector(getRegistration);
  const userEnter = useSelector(openModalUserEnter);

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

  const handleButtonRegistrationClick = () => {
    userRigistration({
      firstName: registration.firstName,
      email: registration.email,
      phone: registration.phone,
    });
  };

  return (
    <form className={style.modal}
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
      />
      <Input
        className={style.input_text}
        label='Email'
        placeholder='Введите email'
        name='Email'
        type='email'
        required
        onChange={handleInputEmailChange}
      />
      <Input
        className={style.input_text}
        label='Телефон'
        placeholder='Введите телефон'
        name='Телефон'
        type='number'
        required
        onChange={handleInputPhoneChange}
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
        type='button'
        color='yellow'
        disabled={!registration.agreement}
        onClick={handleButtonRegistrationClick}
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
