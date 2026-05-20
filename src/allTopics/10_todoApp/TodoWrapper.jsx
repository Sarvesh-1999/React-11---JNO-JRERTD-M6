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
  const [editTodoId, setEditTodoId] = useState(null);

  const handleCreateTodo = (e) => {
    e.preventDefault();
    console.log("Todo Created");

    if (editTodoId) {
      const updatedTodos = allTodos.map((ele) => {
        if (ele.id === editTodoId) {
          return { ...ele, text: todo.trim() };
        }
        return ele;
      });

      setAllTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodo("");
      setEditTodoId(null);
      return;
    }

    let newTodo = {
      id: Date.now(),
      text: todo.trim(),
    };

    console.log(newTodo); // {id : 9876543 , text : "JAVA"}

    //! persisting new todos in localstorage
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    setAllTodos(todos);

    setTodo(""); //clearing input
  };

  const handleDeleteTodo = (id) => {
    let todos = [...allTodos];
    let filteredTodos = todos.filter((ele) => ele.id !== id);
    setAllTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  const handleEditTodo = (id) => {
    const todos = [...allTodos];
    const todoToBeEdited = todos.find((ele) => ele.id === id);
    setTodo(todoToBeEdited.text);
    setEditTodoId(id);
  };

  return (
    <main className={style.wrapper}>
      <h1 className={style.heading}>Todo App</h1>

      <CreateTodo
        todo={todo}
        setTodo={setTodo}
        handleCreateTodo={handleCreateTodo}
        editTodoId={editTodoId}
      />
      <DisplayTodo
        allTodos={allTodos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </main>
  );
};

export default TodoWrapper;
