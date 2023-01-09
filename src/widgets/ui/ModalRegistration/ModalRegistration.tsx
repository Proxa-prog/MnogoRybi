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
  setPassword
} from 'app/store/reducers/registration';
import { changeIsOpenUserEnter } from 'app/store/reducers/userEnter';
import { changeIsOpenConfirmation } from 'app/store/reducers/confirmation';

import { getRegistration } from 'entities/registration/model';
import { userRigistration } from 'entities/productions/model/services/setUserData';
import { openConfirmation } from 'entities/confirmation/model';
import { openModalUserEnter } from 'entities/userEnter/model';
import { MOK_PASSWORD } from 'entities/constants/constants';

import Button from 'shared/ui/Button/Button';
import Checkbox from 'shared/ui/Checkbox/Checkbox';
import Input from 'shared/ui/Input/Input';

import style from './ModalRegistration.module.scss';

const ModalRegistration: React.FC = () => {
  const dispatch = useAppDispatch();
  const buttonCloseId = nanoid();
  const registration = useSelector(getRegistration);
  const userEnter = useSelector(openModalUserEnter);
  const confirmation = useSelector(openConfirmation);

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

  const handleFormSubmit = () => {
    dispatch(changeIsOpenConfirmation(confirmation.isOpen));
    dispatch(changeIsOpenRegistration(registration.isOpen));
  };

  const handleButtonRegistrationClick = () => {
    dispatch(setPassword(MOK_PASSWORD));

    userRigistration({
      firstName: registration.firstName,
      email: registration.email,
      phone: registration.phone,
      password: MOK_PASSWORD,
    });
  };

  return (
    <form
      className={style.modal}
      onSubmit={handleFormSubmit}
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
