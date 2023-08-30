import React from "react";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";
import { mdiCheckCircleOutline } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import { mdiPencil } from "@mdi/js";

export default function Todo(props) {
  const [todoEditor, setTodoEditor] = React.useState(false);
  function openTodoEditor() {
    setTodoEditor(!todoEditor);
  }

  return (
    <div className="grid grid-cols-todos mb-10">
      {props.completed ? (
        <Icon
          path={mdiCheckCircleOutline}
          size={1}
          onClick={() => props.markComplete(props.id)}
          className="cursor-pointer"
        />
      ) : (
        <Icon
          path={mdiLoading}
          size={1}
          onClick={() => props.markComplete(props.id)}
          className="cursor-pointer"
        />
      )}

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
        path={mdiPencil}
        size={1}
        onClick={openTodoEditor}
        color={todoEditor ? "#7FFFD4" : ""}
        className="cursor-pointer"
      />
      <Icon
        path={mdiDelete}
        size={1}
        onClick={() => props.deleteTodo(props.id)}
        className="cursor-pointer"
      />
    </div>
  );
}
