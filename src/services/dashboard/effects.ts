import {createAsyncThunk} from '@reduxjs/toolkit';
import {DasbhoardService} from '.';

export const fetchProfile = (key: string) =>
  createAsyncThunk(
    `${key}/fetchProfile`,
    async (params: {accessToken: string}, thunkApi) => {
      try {
        const data = await DasbhoardService.getUserProfile(params);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    },
  );
