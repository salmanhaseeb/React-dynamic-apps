import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuItems: [],
  currentApp: null,
  currentComponentVersion: 'v1',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMenuItems: (state, action) => {
      state.menuItems = action.payload;
    },
    loadApp: (state, action) => {
      state.currentApp = action.payload;
    },
    setComponentVersion: (state, action) => {
      state.currentComponentVersion = action.payload;
    },
  },
});

export const { setMenuItems, loadApp, setComponentVersion } = appSlice.actions;

export default appSlice.reducer;
