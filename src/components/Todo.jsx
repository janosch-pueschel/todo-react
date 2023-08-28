import React from "react";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";
import { mdiDelete } from "@mdi/js";

export default function Todo(props) {
  const [todoEditor, setTodoEditor] = React.useState(false);
  function openTodoEditor() {
    setTodoEditor(!todoEditor);
  }

  return (
    <div className="grid grid-cols-4 mb-10">
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

      <Icon
        path={mdiDelete}
        size={1}
        onClick={() => props.deleteTodo(props.id)}
      />

      <button className="border" onClick={openTodoEditor}>
        {todoEditor ? "Save" : <Icon path={mdiPencil} size={1} />}
      </button>
    </div>
  );
}
