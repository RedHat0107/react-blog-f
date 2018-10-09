import { all } from 'redux-saga/effects'
import { watchYieldArticle } from './article'
import { watchYieldArticles } from './articles'
import { watchYieldInfo } from './info'
import { watchYieldSay } from './say'
export default function* rootSaga() {
  yield all([
    watchYieldArticles(),
    watchYieldInfo(),
    watchYieldArticle(),
    watchYieldSay(),
  ])
}
