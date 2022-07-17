import { applyMiddleware, configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from '@redux-saga/core'
import transactionSlice from "./slices/Transaction"
import summarySlice from "./slices/Summary"
import ballanceSlice from "./slices/Ballance"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
     transaction: transactionSlice,
     summary: summarySlice,
     ballance: ballanceSlice  
  },
  middleware: (applyMiddleware) => (applyMiddleware().concat(sagaMiddleware))
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

