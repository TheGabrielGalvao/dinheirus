import { mockSummary } from '../../../server/data/summary';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasicSummaryProps } from '../../../components/molecules/summary/BasicSummary/types';


const INITIAL_STATE: BasicSummaryProps[] = mockSummary

const summarySlice = createSlice({
  name: "summary",
  initialState: INITIAL_STATE,
  reducers: {
    
  },
})

export default summarySlice.reducer;
export const {  } = summarySlice.actions;

export const useSummary = (state: any) => {
  return state.summary as BasicSummaryProps[];
};
