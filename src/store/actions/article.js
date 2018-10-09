import * as TYPES from '../action-types';

// blog article action
let article_action = {
    RequestArticle(Id) {
        console.log(Id);
        return {
            type: TYPES.REQUEST_ARTICLE,
            Id
          }
    },
    ReceiveArticle() {
        return {
            type: TYPES.RECEIVE_ARTICLE,
        }
    }
}
export default article_action;