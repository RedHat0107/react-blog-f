import * as TYPES from '../action-types';

// blog articles action
let articles_action = {
    RequestArticles(payload) {
        return {
            type: TYPES.REQUEST_ARTICLES,
            payload: payload
        }
    },
    ReceiveArticles(payload) {
        return {
            type: TYPES.RECEIVE_ARTICLES,
            payload,
        }        
      }
}
export default articles_action;