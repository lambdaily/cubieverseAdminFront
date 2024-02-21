import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    order: 'ASC',
    column: 'id',
    limit: 10
  },
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setColumn: (state, action) => {
      state.column = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { setOrder, setColumn } = paginationSlice.actions;
export default paginationSlice.reducer;