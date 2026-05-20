import style from "./DisplayTodo.module.css";

const DisplayTodo = ({ allTodos, handleDeleteTodo, handleEditTodo }) => {
  console.log(allTodos); // [{},{},{}....]

  return (
    <div>
      {allTodos.length === 0 ? (
        <p>No Todos Available</p>
      ) : (
        <section>
          {allTodos.map((todo) => {
            let { id, text } = todo;
            return (
              <div key={id}>
                <h3>{text}</h3>
                <button onClick={() => handleEditTodo(id)}>Edit</button>
                <button onClick={() => handleDeleteTodo(id)}>Delete</button>
              </div>
            );
            s;
          })}
        </section>
      )}
    </div>
  );
};
export default DisplayTodo;
