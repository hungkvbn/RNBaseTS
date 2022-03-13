import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthService, ParamsLogin} from '.';

export const login = (key: any) =>
  createAsyncThunk(`${key}/login`, async (params: ParamsLogin, thunkApi) => {
    try {
      const data = await AuthService.login(params);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  });
