import clearTodoListReducer from "./clearTodoListReducer";
import toggleClickReducer from "./toggleClickReducer";
import addToListReducer from "./addToListReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  clearTodoListReducer,
  toggleClickReducer,
  addToListReducer,
});

export default allReducers;
