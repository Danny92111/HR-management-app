import {configureStore} from '@reduxjs/toolkit';
import entriesReducer from './entriesSlice';

const store = configureStore({
  reducer: {
    entries: entriesReducer,
  },
});

export default store;
