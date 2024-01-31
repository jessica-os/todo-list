import { useState } from "react";
import "./todo-form.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
   
  };

  return (
    <div className="form-container">
      <h2 className="title-new-task">Criar nova tarefa</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Insira aqui a nova tarefa"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Selecione uma categoria</option>
          <option value="trabalho">Trabalho</option>
          <option value="estudo">Estudo</option>
          <option value="pessoal">Pessoal</option>
        </select>

        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
  ("");
};

export default TodoForm;
