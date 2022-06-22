import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import data from '../constants/data';
import { TItem, Tdata } from '../constants/data';

type TinitialState = {
  data: Tdata;
  category: string;
  count: number;
  selectedCard: TItem | undefined | null;
};

const initialState: TinitialState = {
  data,
  category: 'Show All',
  count: 1,
  selectedCard: null
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
        _id: `${el._id}${state.count}`
      }));
      state.data.push(...more);
    },
    toggleCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    deleteCard(state) {
      state.data = state.data.filter((el) => el._id !== state.selectedCard?._id);
    },
    selectCard(state, action: PayloadAction<string | null>) {
      state.selectedCard = state.data.find((el) => el._id === action.payload);
    }
  }
});

export const { loadMore, toggleCategory, selectCard, deleteCard } = dataSlice.actions;

export default dataSlice.reducer;
