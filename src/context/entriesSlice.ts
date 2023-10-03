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

export type entriesAll = entrySingle[];

export const entriesSlice = createSlice({
  name: 'entry',
  initialState: {value: []},
  reducers: {
    updateEntryAll: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const {updateEntryAll} = entriesSlice.actions;
export default entriesSlice.reducer;
