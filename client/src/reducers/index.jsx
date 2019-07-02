import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import session from './sessionReducer';

const rootReducer = combineReducers({
    session: session,
    form: reducer

});

export default rootReducer;