import React from "react";
import { nanoid } from "nanoid";
import Todo from "./Todo";

export default function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Aufgabe 5",
      completed: false,
      id: nanoid(),
    },
    {
      text: "Aufgabe 4",
      completed: false,
      id: nanoid(),
    },
    {
      text: "Aufgabe 3",
      completed: false,
      id: nanoid(),
    },
    {
      text: "Aufgabe 2",
      completed: false,
      id: nanoid(),
    },
    {
      text: "Aufgabe 1",
      completed: false,
      id: nanoid(),
    },
  ]);
  const [userInput, setUserInput] = React.useState("");
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

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
