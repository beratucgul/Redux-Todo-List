import { INITIAL_STATE } from "../../Constants/todoListConstants";
import { TOGGLE_TODO_LIST_ITEM_CLICK } from "../actions/todoActions";

const toggleClickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_TODO_LIST_ITEM_CLICK:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload
            ? { ...item, complete: !item.complete }
            : item
        ),
      };
    default:
      return state;
  }
};

export default toggleClickReducer;
