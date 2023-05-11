import React from "react";
import body from './body.module.css'

export function TaskBody ({
  children,
  loading,
  error,
  empty,
  start,
  isMobile,
  statusMessageText,
  onStatusMessage,
  buttonCreate,
  filters,
  tasks
}) {

  // const renderFn = children || onRender,
  const messageProps = error ? 'error' : loading ? 'loading' : empty ? 'empty' : start && 'start' ;
  console.log(
    'loading' + loading,
    'error' + error,
    'empty' + empty,
    'start' + start
  );
  // console.log(messageProps);
  return (
    <section className={body.body}>
      {/* {error && onError()}
      {loading && onLoading()}

      {(!loading && !totalTodos) && onEmptyTodos()}

      {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(searchText)} */}
      {(loading || error || start)
        ? onStatusMessage(statusMessageText[messageProps])
        : (empty)
        ? <>
            {filters}
            {onStatusMessage(statusMessageText[messageProps])}
          </>
        : <>
            {filters}
            {tasks}
            {(isMobile) && buttonCreate}
          </>
      }
    </section>
  );
}