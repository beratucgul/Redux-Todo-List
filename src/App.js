import React, { useState } from "react";
import "./styles.css"

const INITIAL_STATE = [
  {id: 1, header: "Shopping", complete: false},
  {id: 2, header: "pay the bills", complete: true}
]


function App() {

  const [list, setList] = useState(INITIAL_STATE);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="adding_form">
        <input placeholder="add to do list" />
        <button>Add</button>
      </div>
      <div className="list">
        {list.map(item => (
          <div className={item.complete ? "complete" : ""}>{item.header}</div>
        ))}
      </div>
      <button className="clear">Clear the completed</button>
    </div>
  );
}

export default App;
