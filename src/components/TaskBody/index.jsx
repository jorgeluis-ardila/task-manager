import React from "react";
import body from './body.module.css';

export function TaskBody ({
  children,
  loading,
  error,
  empty,
  start,
  isMobile,
  onStatusMessage,
  buttonCreate,
  filters,
  tasks
}) {

  // const renderFn = children || onRender,
  const messageProps = error ? 'error' : loading ? 'loading' : empty ? 'empty' : start && 'start' ;
  /* console.log(
    'loading' + loading,
    'error' + error,
    'empty' + empty,
    'start' + start
  ); */

  return (
    <section className={body.body}>
      {((!loading && !error && !start)) && filters}
      {(loading || error || start || empty) && onStatusMessage({type: messageProps})}
      {(!loading && !error && !start && !empty) && tasks}
      {(isMobile && (!loading && !error && !empty)) && buttonCreate}
    </section>
  );
}