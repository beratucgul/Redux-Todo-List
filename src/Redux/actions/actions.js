export const ADD = "ADD";
export const CLEAR = "CLEAR";
export const TOGGLE = "TOGGLE";

export const addToList = (text) => {
return {
    type: ADD, 
    payload: text}
}

export const toggle = id => {
    return {type: TOGGLE, payload: id}
}

export const clear = () => {
    return {type: CLEAR}
}