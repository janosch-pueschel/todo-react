// Design Inspo:
// https://miro.medium.com/v2/resize:fit:1400/1*0Tm2ahjpE_zqv3Qx6-M_cQ.png

import React from "react";
import { nanoid } from "nanoid";
import Header from "./Header";
import Todo from "./Todo";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

export default function App() {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos"))
  );
  const [userInput, setUserInput] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function getUserInput(event) {
    setUserInput(event.target.value);
  }

  function addTodo(event) {
    if (userInput === "") {
      alert("Please enter your todo-item!");
    } else if (event.type === "click" || event.key === "Enter") {
      console.log(event.target.value);
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
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => {
      const updatedTodos = [];
      for (let i = 0; i < prevTodos.length; i++) {
        const todo = prevTodos[i];
        if (todo.id === id) {
          continue;
        } else {
          updatedTodos.push(todo);
        }
      }
      return updatedTodos;
    });
  }

  function updateTodo(event, id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, text: event.target.value } : todo;
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
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    );
  });

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <div className="w-4/6 my-5 flex justify-center">
          <div className="flex w-fit p-1 border-b border-slate-200 text-lg">
            <input
              className="appearance-none focus:outline-none w-96 mr-5"
              type="text"
              placeholder="Todo"
              value={userInput}
              onChange={getUserInput}
              onKeyDown={addTodo}
            />
            <Icon
              path={mdiPlus}
              size={1}
              onClick={addTodo}
              className="rotate-90 cursor-pointer"
            />
          </div>
        </div>
        <div className="w-4/6">
          {todos.length === 0 ? "Nothing to do..." : todoList}
        </div>
      </div>
    </div>
  );
}
