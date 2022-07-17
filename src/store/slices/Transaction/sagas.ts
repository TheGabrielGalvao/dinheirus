import { put, call } from "@redux-saga/core/effects"
import { last } from "lodash"
import { all, takeLatest } from 'redux-saga/effects'
import { getTransactions, setTransactions } from "."
import { getAll } from "../../../api/service/transactionService"

export function* load() {
    try {
        const {data} = yield getAll()
        // console.log(data)
        yield put(setTransactions(data))
    }
    catch (ex) {
        yield put(setTransactions({
            error: true
        }))
        
    }
}

export function* transactionSaga() {
    yield all([
        takeLatest(getTransactions, load),
    ])
}