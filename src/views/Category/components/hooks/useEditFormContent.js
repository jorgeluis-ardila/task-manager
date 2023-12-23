import { date, object, string } from 'yup';
import { useData, useModal } from 'providers/context';
import { getCategoriesValues, todayString } from 'utils';
import { Alert, EditForm } from '../Body/components';
import { CategoryFields, TaskFields } from '../TitleBar/components/EditForm/components';

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

  const handleCancelDelete = () => modalActions.change(<EditForm isEditingEnabled />, 'edit');

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
            dueDate: date().min(todayString, 'La fecha ya paso').required('Requerido'),
            category: string()
              .oneOf([...categoriesValues.categories], 'Categoría Invalida')
              .required('Requerido'),
          }),
        onSubmit: (values, { setSubmitting, resetForm }) =>
          handleSubmit(values, setSubmitting, resetForm, currentTask.id, taskActions.edit),
      },
      content: ({ isEditing }) => (
        <TaskFields
          isEditing={isEditing}
          categoriesValues={categoriesValues}
          currentTask={currentTask}
          onCompleteTask={taskActions.complete}
        />
      ),
      handleDelete: () => {
        const handleAccept = () => {
          taskActions.delete(currentTask.id);
          taskActions.open();
        };

        modalActions.change(
          <Alert title="¡Oye, cuidado!" textType="deleteTask" onAccept={handleAccept} onCancel={handleCancelDelete} />,
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
      content: ({ isEditing }) => <CategoryFields isEditing={isEditing} currentCategory={currentCategory} />,
      handleDelete: () => {
        const handleAccept = () => {
          categoryActions.delete(currentCategory.id);
          categoryActions.open();
        };

        modalActions.change(
          <Alert
            title="¡Oye, cuidado!"
            textType="deleteCategory"
            onAccept={handleAccept}
            onCancel={handleCancelDelete}
          />,
          'alert'
        );
      },
    },
  };

  const getProps = type => props[type];

  return { getProps };
};
