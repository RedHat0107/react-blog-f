import * as TYPES from '../action-types';

let say_action={
    RequestSAY(payload) {
        return {
            type: TYPES.REQUEST_SAY,
            payload
        }       
    },
    ReceiveSAY(payload) {
          return {
            type: TYPES.RECEIVE_SAY,
            payload
          }       
    },
    RequestArticles(payload) {
        return {
            type: TYPES.REQUEST_ARTICLES,
            payload: payload
        }
    },
};
export default say_action;