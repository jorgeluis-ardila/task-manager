import React from 'react';
import loading from './stateLoading.module.css'

export function Loading() {
  return (
    <div className={loading.container}>
      <span className={loading.completeIcon}></span>
      <p className={loading.text}>Cargando TODOs...</p>
      <span className={loading.deleteIcon}></span>
    </div>
  );
}