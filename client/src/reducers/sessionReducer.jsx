import {
    SIGN_IN,
    SIGN_OUT
} from '../actions/index';
import { merge } from 'lodash';

const sessionReducer = (oldState = {currentUser: false}, action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type){
        case SIGN_IN:
            newState = merge({}, oldState, {currentUser: true});
            return newState;
        case SIGN_OUT:
            newState = merge({}, oldState, {currentUser: false});
            return newState;
        default:
            return oldState;
    };
}

export default sessionReducer;
