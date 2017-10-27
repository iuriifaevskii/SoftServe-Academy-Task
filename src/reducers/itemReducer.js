import {
    INPUT_CHANGE,
    CLICK_CHANGE,
} from '../actions/actionTypes';

const INITIAL_STATE = { item: '', itemInLabel: '', flag: true };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
    case INPUT_CHANGE:
        return { ...state, item: action.payload.item, itemInLabel: action.payload.itemInLabel, flag: action.payload.flag };
    case CLICK_CHANGE:
        return { ...state, item: action.payload.item, itemInLabel: action.payload.itemInLabel, flag: action.payload.flag };
    default:
        return state;
    }
}
