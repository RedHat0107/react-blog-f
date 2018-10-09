import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../store/action-types'
import actions from '../store/actions/say'
import {getSay  } from '../common/index'

function* yieldSay(action = actions) {
    const response = yield call(getSay, action.payload)
    yield put({ type: types.RECEIVE_SAY, response,payload:action.payload})
    
}

export function* watchYieldSay() {
    yield all([takeLatest(types.REQUEST_SAY, yieldSay)])
}

