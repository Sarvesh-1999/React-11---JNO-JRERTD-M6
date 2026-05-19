import style from "./TodoWrapper.module.css";
import CreateTodo from "./CreateTodo/CreateTodo";
import DisplayTodo from "./DisplayTodo/DisplayTodo";
import { useState } from "react";

const TodoWrapper = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(() => {
    let todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  });

  console.log(allTodos);

  const handleCreateTodo = (e) => {
    e.preventDefault();
    console.log("Todo Created");

    let newTodo = {
      id: Date.now(),
      text: todo.trim(),
    };

    console.log(newTodo);

    //! persisting new todos in localstorage
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    setAllTodos(todos);

    setTodo(""); //clearing input
  };

  return (
    <main className={style.wrapper}>
      <h1 className={style.heading}>Todo App</h1>

      <CreateTodo
        todo={todo}
        setTodo={setTodo}
        handleCreateTodo={handleCreateTodo}
      />
      <DisplayTodo />
    </main>
  );
};

export default TodoWrapper;
