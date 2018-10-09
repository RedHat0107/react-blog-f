import { call, put, takeEvery } from 'redux-saga/effects'
import * as types from '../store/action-types'
import {fetchInfo } from '../common/index'

function* yieldInfo() {
    const info = yield call(fetchInfo);
    
    yield put({ type: types.RECEIVE_INFO, info })
}
export function* watchYieldInfo() {
    yield takeEvery(types.REQUEST_INFO, yieldInfo)
}

