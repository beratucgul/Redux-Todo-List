 export const ADD_TODO_LIST = "ADD_TODO_LIST";
 export const CLEAR_TODO_LIST_ITEM = "CLEAR_TODO_LIST_ITEM";
 export const TOGGLE_TODO_LIST_ITEM_CLICK = "TOGGLE_TODO_LIST_ITEM_CLICK";

export const addToList = (text) => {
  return {
    type: ADD_TODO_LIST,
    payload: text,
  };
};

export const toggleTodoListItemClick = (id) => {
  return { type: TOGGLE_TODO_LIST_ITEM_CLICK, payload: id };
};

export const clearTodoListItem = () => {
  return { type: CLEAR_TODO_LIST_ITEM };
};
