import * as TYPES from '../action-types';
let initSate = {say:[],payload:{pageIndex:1,pageSize:10}}
function say(state = initSate, action) {
    switch (action.type) {
        case TYPES.REQUEST_SAY:
            return state
        case TYPES.RECEIVE_SAY:
             return {   
          ...state,
          say: action.response,
          payload: action.payload
        }
        default:
            return state
    }
}
export default say