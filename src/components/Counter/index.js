import React from "react";
import { Context } from "../../context";
import counter from './counter.module.css';

export function Counter() {

  const { loading, error, completedTasks, totalTasks } = React.useContext(Context);

  const message = loading ? 'Buscando tus tareas' : error ? 'Tenemos malas noticias' : totalTasks > 0 ? 'Tu progreso de hoy' : 'No tienes tareas creadas';

  return (
    <div className={counter.container}>
      <h2 className={counter.title}>
        {message}
      </h2>
      {(!loading && totalTasks > 0) &&
        <>
          <p className={counter.tasks}>{`${completedTasks} de ${totalTasks} tareas completadas`}</p>
          <div className={counter.progress}>
            <div className={counter['progress-bar']} style={{ width: `${((completedTasks * 100) / totalTasks)}%`}}></div>
          </div>
        </>
      }
    </div>
  );
}