import * as TYPES from '../action-types';

let collect_action={
    AddCollect(payload) {
        return {
            type: TYPES.ADD_COLLECT,
            payload
        }        
    },
    RequestCollect(payload) {
        return {
            type: TYPES.REQUEST_COLLECT,
            payload
        }        
    },
    DeleteCollect(payload) {
        return {
            type: TYPES.DELETE_COLLECT,
            payload
        }        
    },
    ReceiveCollect(payload) {
        return {
            type: TYPES.RECEIVE_COLLECT,
            payload
        }        
    },
};
export default collect_action;