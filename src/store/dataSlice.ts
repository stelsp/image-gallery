import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import data from '../constants/data';

const initialState = {
  data,
  category: 'All'
};

const dataSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {
    loadMore(state) {
      state.data.push(...data);
    },
    toggleCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    }
  }
});

export const { loadMore, toggleCategory } = dataSlice.actions;

export default dataSlice.reducer;
