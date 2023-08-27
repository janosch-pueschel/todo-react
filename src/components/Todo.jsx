import React from "react";

export default function Todo(props) {
  const [todoEditor, setTodoEditor] = React.useState(false);
  function openTodoEditor() {
    setTodoEditor(!todoEditor);
  }

  return (
    <div className="w-4/6 flex justify-between">
      <button className="border" onClick={() => props.markComplete(props.id)}>
        {props.completed ? "completed" : "open"}
      </button>
      {todoEditor ? (
        <input
          type="text"
          className="border"
          value={props.text}
          onChange={(event) => props.updateTodo(event, props.id)}
        ></input>
      ) : (
        <p>{props.text}</p>
      )}
      <button className="border" onClick={() => props.deleteTodo(props.id)}>
        Delete
      </button>
      <button className="border" onClick={openTodoEditor}>
        {todoEditor ? "Save" : "Edit"}
      </button>
    </div>
  );
}
