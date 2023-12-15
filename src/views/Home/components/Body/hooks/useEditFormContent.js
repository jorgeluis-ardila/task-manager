import { date, object, string } from 'yup';
import cn from 'classnames';
import { isExpired } from 'utils';
import { useData, useModal } from 'providers/context';
import { Field } from 'core';
import { deleteModaltext } from '../constants';
import { getCategoriesValues, todayString } from './helpers';
import { Alert, EditForm } from '../components';

export const useEditFormContent = () => {
  const { modalActions } = useModal();
  const { data, currentCategory, currentTask, categoryActions, taskActions } = useData();
  const categoriesValues = getCategoriesValues(data);

  const handleSubmit = (values, setSubmitting, resetForm, id, submitAction) => {
    submitAction(values, id);
    setSubmitting(false);
    resetForm({});
    modalActions.close();
  };

  const props = {
    task: {
      form: {
        initialValues: {
          name: currentTask?.name,
          description: currentTask?.description,
          dueDate: currentTask?.dueDate,
          category: currentTask?.category.id,
        },
        validationSchema: () =>
          object({
            name: string().min(5, 'Minimo 5 caracteres').max(30, 'Maximo 30 caracteres').required('Requerido'),
            description: string().max(80, 'Maximo 80 caracteres'),
            dueDate: date().required('Requerido'), //.min(todayString, 'La fecha ya paso')
            category: string()
              .oneOf([...categoriesValues.categories], 'Categoría Invalida')
              .required('Requerido'),
          }),
        onSubmit: (values, { setSubmitting, resetForm }) =>
          handleSubmit(values, setSubmitting, resetForm, currentTask.id, taskActions.edit),
      },
      content: isEditing => (
        <>
          <div className="two-fields">
            <Field
              variant="underlined"
              label="Fecha Limite"
              type="date"
              id="dueDate"
              name="dueDate"
              disabled={!isEditing}
            />
            <p
              className={cn('status-field', {
                completed: currentTask.isCompleted,
                expired: isExpired(currentTask.dueDate) && !currentTask.isCompleted,
              })}
            >
              {currentTask.isCompleted ? 'Completada' : isExpired(currentTask.dueDate) ? 'Vencida' : 'En Progreso'}
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
        </>
      ),
      handleDelete: () => {
        const text = deleteModaltext.task();

        const handleAccept = () => {
          taskActions.delete(currentTask.id);
          taskActions.open();
        };
        const handleCancel = () => modalActions.change(<EditForm />, 'edit');

        modalActions.change(
          <Alert title="¡Oye, cuidado!" text={text} onAccept={handleAccept} onCancel={handleCancel} />,
          'alert'
        );
      },
    },
    category: {
      form: {
        initialValues: {
          name: currentCategory?.name,
          description: currentCategory?.description,
        },
        validationSchema: () =>
          object({
            name: string().min(5, 'Minimo 5 caracteres').max(30, 'Maximo 30 caracteres').required('Requerido'),
            description: string().max(80, 'Maximo 80 caracteres'),
          }),
        onSubmit: (values, { setSubmitting, resetForm }) =>
          handleSubmit(values, setSubmitting, resetForm, currentCategory.id, categoryActions.edit),
      },
      content: isEditing => (
        <>
          <p className="active-tasks">
            <span>{currentCategory.totalTasks - currentCategory.completedTasks} </span>
            Tareas Activas
          </p>
          {!isEditing ? (
            <p className="name-field">{currentCategory.name}</p>
          ) : (
            <Field variant="underlined" label="Nombre" max={30} type="text" id="name" name="name" />
          )}
          {!currentCategory?.description && !isEditing ? null : (
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
        </>
      ),
      handleDelete: () => {
        const text = deleteModaltext.category();

        const handleAccept = () => {
          categoryActions.delete(currentCategory.id);
          categoryActions.open();
        };
        const handleCancel = () => modalActions.change(<EditForm isEditingEnabled />, 'edit');

        modalActions.change(
          <Alert title="¡Oye, cuidado!" text={text} onAccept={handleAccept} onCancel={handleCancel} />,
          'alert'
        );
      },
    },
  };

  const getProps = type => props[type];

  return { getProps };
};
