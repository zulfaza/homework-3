import { createSlice } from '@reduxjs/toolkit';

export type reducerState = {
  accessToken: string | null;
};

const initialState: reducerState = {
  accessToken: null,
};

export const inputSlice = createSlice({
  name: 'spotify',
  initialState,
  reducers: {
    updateAccessToken: (state, action) => {
      return { ...state, accessToken: action.payload };
    },
  },
});

export const { updateAccessToken } = inputSlice.actions;

export default inputSlice.reducer;
