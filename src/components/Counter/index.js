import React from "react";
import { Context } from "../../context";
import counter from './counter.module.css';

function Counter(props) {

  const { loading, completedTasks, totalTasks } = React.useContext(Context);

  return (
    <div className={counter.container}>
      <h2 className={counter.title}>
        {props.message}
      </h2>
      {(!loading && totalTasks > 0) &&
        <React.Fragment>
          <p className={counter.tasks}>{`${completedTasks} de ${totalTasks} tareas completadas`}</p>
          <div className={counter.progress}>
            <div className={counter['progress-bar']} style={{ width: `${((completedTasks * 100) / totalTasks)}%`}}></div>
          </div>
        </React.Fragment>
      }
    </div>
  );
}

export { Counter };