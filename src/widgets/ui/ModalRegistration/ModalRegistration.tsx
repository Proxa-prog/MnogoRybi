import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useAppDispatch } from 'app/store';
import { changeAgreement, changeIsOpen } from 'app/store/reducers/registration';

import { getRegistration } from 'entities/registration/model';

import Button from 'shared/ui/Button/Button';
import Checkbox from 'shared/ui/Checkbox/Checkbox';
import Input from 'shared/ui/Input/Input';

import style from './ModalRegistration.module.scss';
import { nanoid } from '@reduxjs/toolkit';

const ModalRegistration: React.FC = () => {
  const dispatch = useAppDispatch();
  const registration = useSelector(getRegistration);
  const buttonCloseId = nanoid();

  const handleCheckboxAgreementChange = () => {
    dispatch(changeAgreement(registration.agreement))
  };

  const handleButtonCloseChange = () => {
    dispatch(changeIsOpen(registration.isOpen))
  };

  return (
    <form
      method='POST'
      className={style.modal}
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
      />
      <Input
        className={style.input_text}
        label='Email'
        placeholder='Введите email'
        name='Email'
        type='email'
        required
      />
      <Input
        className={style.input_text}
        label='Телефон'
        placeholder='Введите телефон'
        name='Телефон'
        type='number'
        required
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
      >
        Зарегистрироваться
      </Button>
      <div className={style.have_account_wrapper}>
        <span className={style.have_account}>Уже есть учетная запись?&nbsp;&nbsp;</span>
        <Link className={style.button_have_account} to={'#'}>Войти</Link>
      </div>
    </form>
  )
};

export default ModalRegistration;
