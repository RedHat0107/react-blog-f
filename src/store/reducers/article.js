import * as TYPES from '../action-types';
let initSate = {tag:{}}
function article(state = initSate, action) {
    switch (action.type) {
        case TYPES.REQUEST_ARTICLE:
          return state
        case TYPES.RECEIVE_ARTICLE:
          return action.article
        default:
          return state
      }    
}
export default article