import React, { useState } from "react";
import { connect } from "react-redux";
import { addToList, toggle, clear } from "./actions/actions";
import "../styles.css"

const Redux = (props) => {
    const [text, setText] = useState("");

  return (
    <div className="Redux">
      <h1>Todo List</h1>
      <div className="adding_form">
        <input placeholder="add to do list" value={text} onChange=
        {e => setText(e.target.value)}/>
        <button onClick={() => {
            setText("");
            props.addToList(text)}}>Add</button>
      </div>
      <div className="list">
         {props.list.map(item => (
          <div onClick={() => props.toggle(item.id)} key={item.id} className={item.complete ? "complete" : ""}>{item.header}</div>
        ))} 
      </div>
      <button onClick={() => props.clear()} className="clear">Clear the completed</button>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps, {addToList, toggle, clear})(Redux);