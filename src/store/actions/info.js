import * as TYPES from '../action-types';


// blog articles action
let info_action={
    IRequestInfo() {
        //每一个方法返回的都是dispatch派发时候传递的action对象
        return{
            type: TYPES.REQUEST_INFO
        }
    },
    IReceiveInfo(payload) {
        return {
            type: TYPES.RECEIVE_INFO,
            payload
        }
    }
};
export default info_action;