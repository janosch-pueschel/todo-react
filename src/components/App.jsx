import React from "react";
import { nanoid } from "nanoid";
import Todo from "./Todo";
export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [userInput, setUserInput] = React.useState("");

  function getUserInput(event) {
    setUserInput(event.target.value);
  }

  function addTodo(event) {
    if (event.type === "click" || event.key === "Enter") {
      setTodos([
        {
          text: userInput,
          completed: false,
          id: nanoid(),
        },
        ...todos,
      ]);
      setUserInput("");
    }
  }

  function markComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id
          ? { ...todo, completed: !todo.completed }
          : { todo };
      })
    );
  }

  const todoList = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        markComplete={markComplete}
      />
    );
  });

  return (
    <div>
      <div className="w-4/6 mb-5">
        <input
          className="border mr-5"
          type="text"
          placeholder="Todo"
          value={userInput}
          onChange={getUserInput}
          onKeyDown={addTodo}
        />
        <button className="border" onClick={addTodo}>
          Add
        </button>
      </div>
      {todoList}
    </div>
  );
}
