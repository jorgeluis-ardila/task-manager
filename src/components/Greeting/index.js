import React from "react";
import greeting from './greeting.module.css';

function Greeting() {

  return (
    <div className={greeting.container}>
      <h1 className={greeting.great}>
        Hola!
      </h1>
      <p className={greeting.welcome}>
        Bienvenido a tu gestor de tareas
      </p>
    </div>
  );
}

export { Greeting };