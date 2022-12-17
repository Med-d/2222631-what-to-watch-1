import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';

const initialState: {error: string | null} = {
  error: null
};

export const appProcessor = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  }
});

export const {setError} = appProcessor.actions;
