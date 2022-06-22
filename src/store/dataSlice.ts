import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import data from '../constants/data';
import { TItem } from '../constants/data';

const initialState = {
  data,
  category: 'All',
  count: 1
};

const dataSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {
    loadMore(state) {
      state.count++;
      const more = data.map((el) => ({
        ...el,
        name: `${el.name} ${state.count}`,
        _id: el._id + state.count
      }));
      state.data.push(...more);
    },
    toggleCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    deleteCard(state, action: PayloadAction<number>) {
      state.data = state.data.filter((el) => el._id !== action.payload);
    },
    toggleCard(state, action) {
      // state.currentCard = state.data.find((el) => el._id === action.payload);
    }
  }
});

export const { loadMore, toggleCategory } = dataSlice.actions;

export default dataSlice.reducer;
