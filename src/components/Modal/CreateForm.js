import React from "react";
import { Context } from "../../context";
import form from "./modal.module.css"

function CreateForm(props) {

  const [newTodoValue, setNewTodoValue] = React.useState(''),
        [showAlert, setShowAlert] = React.useState(false);

  const {
    addTask,
    // openModal,
    setOpenModal
  } = React.useContext(Context);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    setShowAlert(false)
  }
  const onCancel = () => {
    setOpenModal(false);
  }
  function submit() {
    if (newTodoValue.length > 0) {
      addTask(newTodoValue);
      onCancel();
    } else {
      setShowAlert(true)
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    submit()
  }
  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      submit()
    }
  };

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      onSubmit={onSubmit}
      onKeyDownCapture={onKeyUp}
    >
      <label>Crea tu nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Que tienes que hacer?"
      />
      {showAlert && <p className={form.alert}>Debes añadir texto a tu tarea</p>}
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

export { CreateForm }