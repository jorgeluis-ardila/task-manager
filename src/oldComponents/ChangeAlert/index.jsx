import React from 'react';
import alert from './alert.module.css';

function ChangeAlert({
  storageChange,
  handleSync
}) {

  if (storageChange) {
    return (
      <div className={alert.content}>
        <p>Contenido desactualizado</p>
        <button
          onClick={handleSync}
        >
          Actualizar
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };