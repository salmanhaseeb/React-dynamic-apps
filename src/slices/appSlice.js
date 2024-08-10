import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  menuItems: [],
  currentApp: null,
  currentComponentVersion: 'v1',
  currentAppComponents: []
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
    setAppComponents: (state, action) => {
      state.currentAppComponents = action.payload;
    }
  },
});

export const { setMenuItems, loadApp, setComponentVersion, setAppComponents } = appSlice.actions;

export default appSlice.reducer;
