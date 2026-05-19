import style from "./CreateTodo.module.css";

const CreateTodo = ({ todo, setTodo, handleCreateTodo }) => {
  return (
    <form className={style.todoForm} onSubmit={handleCreateTodo}>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter a todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
export default CreateTodo;
