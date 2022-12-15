import React from "react";
import { ToDoContext } from "../TodoContext";
import form from "./form.module.css"

function TodoForm() {

  const [newTodoValue, setNewTodoValue] = React.useState(''),
        [showAlert, setShowAlert] = React.useState(false);

  const {
    addTodo,
    setOpenModal
  } = React.useContext(ToDoContext);


  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    setShowAlert(false)
  }
  const onCancel = () => {
    setOpenModal(false);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(newTodoValue.length < 0) {
      addTodo(newTodoValue);
      onCancel();
    } else{
      setShowAlert(true)
    }
  }

  return (
    <form 
      onSubmit={onSubmit}
    >
      <label>Crea tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Que tienes que hacer?"
      />
      {showAlert && <p className={form.alert}>Escribe el texto de tu nuevo To Do</p>}
      <div className={form.buttonContainer}>
        <button
          type="button"
          className={`${form.button} ${form['button--cancel']}`}
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className={`${form.button} ${form['button--add']}`}
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm }