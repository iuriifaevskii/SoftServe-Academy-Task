import {
    INPUT_CHANGE,
    CLICK_CHANGE,
} from './actionTypes';


export function inputChange(itemChange) {
    const isMoreThenFive = itemChange.length > 5;
    const itemInLabel = isMoreThenFive ? itemChange : '';
    return {
        type: INPUT_CHANGE,
        payload: { item: itemChange, itemInLabel, isMoreThenFive },
    };
}

export function clickChange(item) {
    const itemInLabel = item;
    return {
        type: CLICK_CHANGE,
        payload: { item, itemInLabel, isMoreThenFive: false },
    };
}
