import { call, put, takeEvery } from 'redux-saga/effects'
import article_action  from '../store/actions/acticles'
import * as TYPES from '../store/action-types'
import {fetchArticles  } from '../common/index'

function* yieldArticles(action=article_action) {
  const { payload } = action
  const response = yield call(fetchArticles, payload)
  yield put({ type: TYPES.RECEIVE_ARTICLES, response,payload})
}
export function* watchYieldArticles() {
  yield takeEvery(TYPES.REQUEST_ARTICLES, yieldArticles)
}