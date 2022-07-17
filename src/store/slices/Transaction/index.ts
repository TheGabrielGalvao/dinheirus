import { useDispatch } from 'react-redux';
import { ITransactionState } from './types';
import { mockTransactions } from '../../../server/data/transactions';
import { ITransaction } from '../../../interfaces/ITransaction';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAll, teste } from '../../../api/service/transactionService';
import { AppDispatch } from '../..';
import api from '../../../api/api';


const INITIAL_STATE: ITransactionState = {
    data: [] as ITransaction[],
    error: false,
    loading: false
}

const transactionSlice = createSlice({
  name: "transaction",
  initialState: INITIAL_STATE,
  reducers: {
    getTransactions() {
        
    },
    setTransactions(state, action) {
        state.data = action.payload.transactions
    }
    // addTransaction(state, { payload }: PayloadAction<ITransaction>) {
    //   return [...state, { name: payload, favorite: false }];
    // },
    // toFavorite(state, { payload }: PayloadAction<string>) {
    //   return state.map((st) =>
    //     st.name === payload ? { ...st, favorite: !st.favorite } : st
    //   );
    // },
  },
})

// export const getTransactionsAsync = async () => {
//     const dispatch = useDispatch()
//     try {
//       const response = await api('transactions')
//       console.log(response)
//       dispatch(getTransactions(response.data))
//     } catch (err) {
//       console.log(err)
//     }
//   };

export default transactionSlice.reducer;
export const { getTransactions, setTransactions } = transactionSlice.actions;

export const useTransaction = (state: any) => {
  return state.transaction as ITransactionState;
};
