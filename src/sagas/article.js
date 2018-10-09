import { call, put, takeEvery } from 'redux-saga/effects'
import actions from '../store/actions/article'
import * as TYPES from '../store/action-types'
import {fetchArticle  } from '../common/index'

function* yieldArticle(action = actions) {
    const article = yield call(fetchArticle, action.Id)
    yield put({ type: TYPES.RECEIVE_ARTICLE, article })
}
export function* watchYieldArticle() {
  yield takeEvery(TYPES.REQUEST_ARTICLE, yieldArticle)
}


