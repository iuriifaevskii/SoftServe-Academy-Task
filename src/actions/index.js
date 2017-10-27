import {
    INPUT_CHANGE,
    CLICK_CHANGE,
} from './actionTypes';


export function inputChange(itemChange) {
    const flag = itemChange.length > 5;
    const itemInLabel = flag ? itemChange : '';
    return {
        type: INPUT_CHANGE,
        payload: { item: itemChange, itemInLabel, flag },
    };
}

export function clickChange(item) {
    const itemInLabel = item;
    return {
        type: CLICK_CHANGE,
        payload: { item, itemInLabel, flag: false },
    };
}
