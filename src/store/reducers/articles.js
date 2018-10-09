import * as TYPES from '../action-types';
let initSate = {
  articles: [],
  payload: {
    pageIndex: 1,
    pageSize:5
  }
}
function articles(state = initSate, action) {
  switch (action.type) {
    case TYPES.REQUEST_ARTICLES:
      return state
    case TYPES.RECEIVE_ARTICLES:
      return {
        ...state,
        articles:action.response.data,
        payload: action.payload
      }
    default:
      return state
  }
}
export default articles