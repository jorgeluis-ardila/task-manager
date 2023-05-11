import React from "react";
// import formBase from "../formBase.module.css"
import form from "./createForm.module.css"

export function CreateForm({
  addTask,
  closeModal
}) {

  const [newTodoValue, setNewTodoValue] = React.useState(''),
        [showAlert, setShowAlert] = React.useState(false);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    setShowAlert(false)
  }
  function submit() {
    if (newTodoValue.length > 0) {
      addTask(newTodoValue);
      closeModal();
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
      className={form.container}
      onClick={(e) => e.stopPropagation()}
      onSubmit={onSubmit}
      onKeyDownCapture={onKeyUp}
    >
      {/* <div className={formBase['inner-container']}> */}
      <label className={form.create}>Crea tu nueva tarea</label>
      <textarea
        className={form.create}
        value={newTodoValue}
        onChange={onChange}
        placeholder="Que tienes que hacer?"
      />
      {showAlert && <p className={form.alert}>Debes añadir texto a tu tarea</p>}
      <div className={form['button-create-container']}>
        <button
          type="button"
          className={`${form['button-create']} ${form['button-create--cancel']}`}
          onClick={() => closeModal()}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className={`${form['button-create']} ${form['button-create--add']}`}
        >
          Añadir
        </button>
        {/* </div> */}
      </div>
    </form>
  );
}