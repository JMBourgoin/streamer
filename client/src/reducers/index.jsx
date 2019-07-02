import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import session from './sessionReducer';

const rootReducer = combineReducers({
    session: session,
    form: formReducer

});

export default rootReducer;