import "./todo-list.css";

function TodoList({ todo, removeTodo, completeTodo }) {
  return (
    
    <div className="todo-list">
    
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <p className="text">- {todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>

      <div className="buttons">
        <button className="btn_completed" onClick={() => completeTodo(todo.id)}>
          Completo
        </button>
        <button className="btn_delete" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
}

export default TodoList;
