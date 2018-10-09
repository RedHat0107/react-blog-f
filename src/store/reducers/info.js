import * as TYPES from '../action-types';
let initSate = {
    name: '小张',
}

function info(state = initSate, action) {
  switch (action.type) {
    case TYPES.REQUEST_INFO:
      return state
    case TYPES.RECEIVE_INFO:      
      return {...action.info};     
    default:
      return state
  }
}
export default info;