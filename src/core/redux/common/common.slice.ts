/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TStateCommon = {
  loading: boolean;
};

const initialState: TStateCommon = {
  loading: false
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    }
  }
});

export const { reducer, actions } = commonSlice;
export const { showLoading } = actions;
export default { reducer, actions };
