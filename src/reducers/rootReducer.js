import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
    elements: itemReducer,
});

export default rootReducer;
