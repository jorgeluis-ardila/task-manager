import React from "react";
import greeting from './greeting.module.css';

export function Greeting({
  isLogged,
  userData
}) {

  return (
    <div className={greeting.container}>
      <h1 className={greeting.great}>
        {`Hola${isLogged ? ` ${userData.displayName.split(' ')[0]}` : ''}!`}
      </h1>
      <p className={greeting.welcome}>
        Bienvenido a tu gestor de tareas
      </p>
    </div>
  );
}