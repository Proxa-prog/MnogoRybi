import axios from 'axios';
import { ResponseApi } from 'entities/basket';

import { IResponse, IUserEnterFull } from 'entities/user';
import {
  confirmationActions,
  registrationActions,
} from 'features/registration';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, USER_DATA } from 'shared';

const checkEmailExistence = (resp: IResponse, email: string | undefined) => {
  const emailIsBusy = resp.data.some((item: IUserEnterFull) => {
    return item.userAccount.email === email;
  });

  return emailIsBusy;
};

export const registerUser = createAsyncThunk<
  void,
  IUserEnterFull,
  ThunkConfig<void>
>(USER_DATA, async (user: IUserEnterFull, thunkAPI) => {
  const { userAccount, userData } = user;
  const { firstName, phone, orders, userUrl, deliveryAddress, id } = userData;

  const { password, email } = userAccount;

  try {
    const createUser = () =>
      axios.post<string, ResponseApi>(userUrl, {
        userAccount: {
          isLogin: false,
          recoveryIsOpen: false,
          email: email,
          password: password,
        },
        userData: {
          firstName: firstName,
          phone: phone,
          orders,
          userUrl: '',
          deliveryAddress,
        },
      });

    const data = await axios.get<string, ResponseApi>(userUrl);

    const check = checkEmailExistence(data, email);

    const state = thunkAPI.getState();
    console.log(state);
    if (!check) {
      thunkAPI.dispatch(
        confirmationActions.changeIsOpenConfirmation(
          state.confirmation.confirmation.isOpen
        )
      );
      thunkAPI.dispatch(
        registrationActions.changeIsOpenRegistration(
          state.registration.registration.isOpen
        )
      );

      await createUser();
    } else {
      console.log('Пользователь с таким email уже существует.');
    }
  } catch (error) {
    console.error(error);
  }
});
