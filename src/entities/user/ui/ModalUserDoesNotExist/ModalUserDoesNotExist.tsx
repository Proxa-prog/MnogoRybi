import React from 'react';

import { useAppDispatch } from 'app/store';

import {
  userAccountActions,
} from 'entities/user';

import { Button } from 'shared';

import style from './ModalUserDoesNotExist.module.scss';

export const ModalUserDoesNotExist: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleButtonModalClose = () => {
    dispatch(userAccountActions.changeIsModalUserDoesNotExist());
  };

  return (
    <div className={style.modal}>
      <Button
        className={style.buttonClose}
        isClose='close'
        type='button'
        onClick={handleButtonModalClose}
      />
      <h3>Пользователя с таким email не существует.</h3>
    </div>
  );
};
