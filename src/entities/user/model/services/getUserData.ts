import {createAsyncThunk} from "@reduxjs/toolkit";
import {ResponseApiUserData} from "../types/types";
import {ThunkConfig, USER_DATA} from "../../../../shared";
import axios from "axios";
import {setUserData} from "../slice/userEnterSlice";
import {setUserDataInUserAccount} from "../slice/userAccountSlice";

export const getUserData = createAsyncThunk<void, string, ThunkConfig<void>>(
  USER_DATA,
  async (userEmail: string, thunkAPI) => {
    const response = await axios.get<string, ResponseApiUserData>(`${USER_DATA}`);

    const actualUser = response.data.find((user) => userEmail === user.userAccount.email);
    actualUser && thunkAPI.dispatch(setUserData(actualUser));
    actualUser && thunkAPI.dispatch(setUserDataInUserAccount(actualUser));
    console.log('actualUser', actualUser);
  }
);
