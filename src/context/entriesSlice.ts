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
  value: null,
};

export const entriesSlice = createSlice({
  name: 'entry',
  initialState,
  reducers: {
    updateEntryAll: (state, action) => {
      console.log(state);
      console.log(action);
      state.value = action.payload;
    },
    updateEntrySingle: (state, action) => {},
  },
});

export const {updateEntrySingle, updateEntryAll} = entriesSlice.actions;

export default entriesSlice.reducer;
