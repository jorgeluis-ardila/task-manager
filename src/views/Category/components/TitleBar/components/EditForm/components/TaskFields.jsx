import PropTypes from 'prop-types';
import cn from 'classnames';
import { isExpired } from 'utils';
import { Button, Field } from 'core';

const TaskFields = ({ isEditing, categoriesValues, currentTask, onCompleteTask }) => (
  <>
    <div className="two-fields">
      <Field variant="underlined" label="Fecha Limite" type="date" id="dueDate" name="dueDate" disabled={!isEditing} />
      <p
        className={cn('status-field', {
          completed: currentTask.isCompleted,
          expired: isExpired(currentTask.dueDate) && !currentTask.isCompleted,
        })}
      >
        {currentTask.isCompleted ? 'Completada' : isExpired(currentTask.dueDate) ? 'Expirada' : 'En Progreso'}
      </p>
    </div>
    {!isEditing ? (
      <p className="name-field">{currentTask.name}</p>
    ) : (
      <Field variant="underlined" label="Nombre" max={30} type="text" id="name" name="name" />
    )}
    <Field
      as="select"
      variant="underlined"
      label="Categoría"
      id="category"
      name="category"
      options={categoriesValues.options}
      disabled={!isEditing}
    />
    {!currentTask?.description && !isEditing ? null : (
      <Field
        as="textarea"
        label="Descripción"
        variant="underlined"
        id="description"
        name="description"
        max={80}
        disabled={!isEditing}
        placeholder="Descripción"
      />
    )}
    {!isEditing && (
      <Button
        type="button"
        variant={currentTask.isCompleted ? 'action' : 'outlined'}
        iconType="check"
        className={cn('complete-button', { completed: !currentTask.isCompleted })}
        onClick={() => onCompleteTask(currentTask.id)}
      >
        {currentTask.isCompleted ? 'Completar' : 'Descompletar'}
      </Button>
    )}
  </>
);

TaskFields.protoTypes = {
  isEditing: PropTypes.bool,
  categoriesValues: PropTypes.array,
  currentTask: PropTypes.object,
  onCompleteTask: PropTypes.func,
};

export { TaskFields };
