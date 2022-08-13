import { ADD, TOGGLE, CLEAR } from "../actions/actions";

const INITIAL_STATE = {
    list: [
        {id: 1, header: "Shopping", complete: false},
        {id: 2, header: "pay the bills", complete: true},    
        {id: 3, header: "work", complete: false}    
    ]
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD:
            return {
                ...state, list: [...state.list, {
                    id: state.list.length + 1,
                    header: action.payload,
                    complete: false
                }]
            };
        case TOGGLE:
            return {
                ...state, list: state.list.map(item => item.id === action.payload ? {...item, complete: !item.complete} : item)
            };
        case CLEAR:
            return {
                ...state, list: state.list.filter(item => item.complete === false)
            };
    default: 
        return state;
    }
    
}