import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToList, toggleTodoListItemClick, clearTodoListItem } from "./actions/todoActions";
import { INITIAL_STATE } from "./reducers/todoReducers";
import "../styles.css";


function TodoList() {
  const [text, setText] = useState("");

  const [listItem, setListItem] = useState(INITIAL_STATE.list)
    
  console.log("LIST "+ listItem)

  // const add = useSelector(state => state.addToListReducer)
  // const toggle = useSelector(state => state.toggleClickReducer)
  // const clear = useSelector(state => state.clearTodoListReducer)

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="adding_form">
        <input
          placeholder="add to do list"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText("");
            dispatch(addToList(text));
          }}
        >
          Add
        </button>
      </div>
      <div className="list">
        {listItem.map((item) => (
          <div
            onClick={() => dispatch(toggleTodoListItemClick(item.id))}
            key={item.id}
            className={item.complete ? "complete" : ""}
          >
            {item.header}
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(clearTodoListItem())} className="clear">
        Clear the completed
      </button>
    </div>
  );
};

export default TodoList;
