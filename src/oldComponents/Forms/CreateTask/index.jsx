import React, { useState } from "react";
import { onKeyUp } from "../../../utils";
// import formBase from "../formBase.module.css"
import form from "./createTask.module.css";

export function CreateForm({ addTask, closeModal }) {
  const [newTodoValue, setNewTodoValue] = useState(""),
    [showAlert, setShowAlert] = useState(false);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    setShowAlert(!event.target.value);
  };
  function submit() {
    if (newTodoValue.length > 0) {
      addTask(newTodoValue);
      closeModal();
    } else {
      setShowAlert(true);
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <form
      className={form.container}
      onClick={(e) => e.stopPropagation()}
      onSubmit={onSubmit}
      onKeyDownCapture={(e) => onKeyUp(e, "enter", submit)}
    >
      {/* <div className={formBase['inner-container']}> */}
      <label className={form.create}>Crea tu nueva tarea</label>
      <textarea
        className={`${form.create} ${showAlert && form["create--error"]}`}
        value={newTodoValue}
        onChange={onChange}
        placeholder="Que tienes que hacer?"
        autoFocus
      />
      {showAlert && <p className={form.alert}>Debes añadir texto a tu tarea</p>}
      <div className={form["button-create-container"]}>
        <button
          type="button"
          className={`${form["button-create"]} ${form["button-create--cancel"]}`}
          onClick={() => closeModal()}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className={`${form["button-create"]} ${form["button-create--add"]}`}
          disabled={showAlert}
        >
          Añadir
        </button>
        {/* </div> */}
      </div>
    </form>
  );
}
