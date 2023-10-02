import {createSlice} from '@reduxjs/toolkit';

export interface entrySingle {
  id: number;
  first_name: string | null;
  last_name: string | null;
  date_of_birth: string | null;
  industry: string | null;
  salary: number;
  email: string | null;
  years_of_experience: string | null;
}

export interface entriesAll {
  value: entrySingle[] | null;
}

const initialState: entriesAll = {
  value: [],
};

export const entriesSlice = createSlice({
  name: 'entry',
  initialState,
  reducers: {
    updateEntryAll: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {updateEntryAll} = entriesSlice.actions;

export default entriesSlice.reducer;
