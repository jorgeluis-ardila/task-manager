export const MODAL_TEXT = {
  deleteTask: () => (
    <>
      <span className="bold">¡Hey!</span> Solo quería informarte que luego de borrar una tarea no se podrá recuperar.{' '}
      <span className="bold">Esta acción no se puede deshacer</span>, así que asegúrate de haber revisado todo.
    </>
  ),
  deleteCategory: () => (
    <>
      <span className="bold">¡Hey!</span> Solo quería informarte que al borrar una categoría también se eliminarán todas
      las tareas asociadas. <span className="bold">Esta acción no se puede deshacer</span>, así que asegúrate de haber
      revisado todo.
    </>
  ),
};
