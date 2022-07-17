import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = 500

const ballanceSlice = createSlice({
  name: "ballance",
  initialState: INITIAL_STATE,
  reducers: {
    
  },
})

export default ballanceSlice.reducer;
export const {  } = ballanceSlice.actions;

export const useBallance = (state: any) => {
  return state.ballance as number;
};
