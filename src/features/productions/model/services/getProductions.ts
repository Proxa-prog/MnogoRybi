import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { productionsActions, ResponseApiProductions } from 'features/productions';

import { POKE_URL, ThunkConfig } from 'shared';

export const fetchProductions = createAsyncThunk<void, void, ThunkConfig<void>>(
  'productions/fetchProductions',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<string, ResponseApiProductions>(
        POKE_URL
      );
      thunkAPI.dispatch(productionsActions.getProductionsAction(response.data));
    } catch (error) {
      console.error(error);
    }
  }
);
