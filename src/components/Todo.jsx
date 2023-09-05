import React from "react";
import Icon from "@mdi/react";
import { mdiCheckCircleOutline } from "@mdi/js";
import { mdiCheckCircle } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import { mdiPencil } from "@mdi/js";

export default function Todo(props) {
  const [todoEditor, setTodoEditor] = React.useState(false);
  function openTodoEditor() {
    setTodoEditor(!todoEditor);
  }

  return (
    <div className="grid grid-cols-todos gap-1 mb-5 pb-5 border-b border-slate-200">
      {props.completed ? (
        <Icon
          path={mdiCheckCircle}
          size={1}
          color="#60a5fa"
          onClick={() => props.markComplete(props.id)}
          className="my-1 mx-2 cursor-pointer"
        />
      ) : todoEditor ? (
        <p></p>
      ) : (
        <Icon
          path={mdiCheckCircleOutline}
          size={1}
          onClick={() => props.markComplete(props.id)}
          className="my-1 mx-2 cursor-pointer text-zinc-300 hover:text-blue-400"
        />
      )}

      {todoEditor ? (
        <input
          type="text"
          className="border appearance-none focus:outline-none italic border-none rounded bg-zinc-100 py-1 px-2"
          value={props.text}
          onChange={(event) => props.updateTodo(event, props.id)}
        ></input>
      ) : (
        <p className={`py-1 px-2 ${props.completed && "line-through"}`}>
          {props.text}
        </p>
      )}

      {props.completed ? (
        <p></p>
      ) : (
        <Icon
          path={mdiPencil}
          size={1}
          onClick={openTodoEditor}
          className={`my-1 mx-2 cursor-pointer hover:text-zinc-800 ${
            todoEditor ? "text-zinc-800" : "text-zinc-300"
          }`}
        />
      )}
      <Icon
        path={mdiDelete}
        size={1}
        onClick={() => props.deleteTodo(props.id)}
        className="my-1 mx-2 cursor-pointer text-zinc-300 hover:text-zinc-800"
      />
    </div>
  );
}
