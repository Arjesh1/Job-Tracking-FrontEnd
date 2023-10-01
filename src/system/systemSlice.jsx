import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showToggle: false,
  
};
const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setShowToggle: (state, { payload }) => {
      state.showToggle = payload;
    },
    
  },
});

const { reducer, actions } = systemSlice;

export const {setShowToggle} = actions;

export default reducer;