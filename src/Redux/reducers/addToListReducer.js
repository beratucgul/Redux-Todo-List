import { INITIAL_STATE } from "../../Constants/todoListConstants";
import { ADD_TODO_LIST } from "../actions/todoActions";

const addToListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO_LIST:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: state.list.length + 1,
            header: action.payload,
            complete: false,
          },
        ],
      };
    default:
      return state;
  }
};

export default addToListReducer;
