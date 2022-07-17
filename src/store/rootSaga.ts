import { all, fork } from 'redux-saga/effects'
import { transactionSaga } from './slices/Transaction/sagas'

export default function* rootSaga() {
    yield all([
        fork(transactionSaga),
        // fork()
    ])
}
