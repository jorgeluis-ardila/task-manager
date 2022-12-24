import React from 'react';
import loading from './loading.module.css'

function Message(props) {
  return <p className={loading['loading-state']}>{props.message}</p>
}

function Loading() {
  return (
    <div className={loading.container}>
      <span className={loading.completeIcon}></span>
      <p className={loading.text}>Cargando TODOs...</p>
      <span className={loading.deleteIcon}></span>
    </div>
  );
}

export { Message, Loading };
