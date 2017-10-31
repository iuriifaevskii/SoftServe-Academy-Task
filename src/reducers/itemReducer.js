import {
    INPUT_CHANGE,
    CLICK_CHANGE,
} from '../actions/actionTypes';

const INITIAL_STATE = { item: '', itemInLabel: '', isMoreThenFive: true };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
    case INPUT_CHANGE:
    case CLICK_CHANGE:
        return { ...state, item: action.payload.item, itemInLabel: action.payload.itemInLabel, isMoreThenFive: action.payload.isMoreThenFive };
    default:
        return state;
    }
}
