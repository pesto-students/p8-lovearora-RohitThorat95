import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialLightState = { isLightOn: true };

const lightSlice = createSlice({
  name: "LightToggle",
  initialState: initialLightState,
  reducers: {
    toggle(state) {
      state.isLightOn = !state.isLightOn;
    },
  },
});

const store = configureStore({
  reducer: {
    light: lightSlice.reducer,
  },
});

export const lightActions = lightSlice.actions;

export default store;
