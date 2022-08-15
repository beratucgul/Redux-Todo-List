import { ADD_TODO_LIST, CLEAR_TODO_LIST_ITEM, TOGGLE_TODO_LIST_ITEM_CLICK } from "../actions/todoActions";

// const allReducers = combineReducers({
//   clearTodoListReducer,
//   toggleClickReducer,
//   addToListReducer,
// });

export const INITIAL_STATE = {
  list: [
      {id: 1, header: "Shopping", complete: false},
      {id: 2, header: "pay the bills", complete: true},    
      {id: 3, header: "work", complete: false}    
  ]
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
      case ADD_TODO_LIST:
          return {
              ...state, list: [...state.list, {
                  id: state.list.length + 1,
                  header: action.payload,
                  complete: false
              }]
          };
      case CLEAR_TODO_LIST_ITEM:
          return {
              ...state, list: state.list.map(item => item.id === action.payload ? {...item, complete: !item.complete} : item)
          };
      case TOGGLE_TODO_LIST_ITEM_CLICK:
          return {
              ...state, list: state.list.filter(item => item.complete === false)
          };
  default: 
      return state;
  }

} 
