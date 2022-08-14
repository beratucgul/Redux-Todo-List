import { INITIAL_STATE } from "../../Constants/todoListConstants";
import { CLEAR_TODO_LIST_ITEM } from "../actions/todoActions";

const clearTodoListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_TODO_LIST_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.complete === false),
      };
    default:
      return state;
  }
};

export default clearTodoListReducer;
