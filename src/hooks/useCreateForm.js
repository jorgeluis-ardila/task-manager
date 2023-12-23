import { date, object, string } from 'yup';
import { getCategoriesValues, todayString } from 'utils';
import { useData, useModal } from 'providers/context';
import { CreateForm } from 'core';

export const useCreateForm = () => {
  const { modalActions } = useModal();
  const { data, currentCategory, categoryActions, taskActions } = useData();
  const categoriesValues = getCategoriesValues(data);

  const handleSubmit = (values, setSubmitting, resetForm, submitAction) => {
    submitAction(values);
    setSubmitting(false);
    resetForm({});
    modalActions.close();
  };

  const props = {
    task: {
      title: 'Crea tú tarea',
      initialValues: {
        name: '',
        description: '',
        dueDate: todayString,
        category: currentCategory ? currentCategory.id : '',
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
      fields: () => <CreateForm.TaskFields currentCategory={currentCategory} categoriesValues={categoriesValues} />,
      onSubmit: (values, { setSubmitting, resetForm }) =>
        handleSubmit(values, setSubmitting, resetForm, taskActions.add),
    },
    category: {
      title: 'Crea tú categoría',
      initialValues: {
        name: '',
        description: '',
      },
      validationSchema: () =>
        object({
          name: string().min(5, 'Minimo 5 caracteres').max(30, 'Maximo 30 caracteres').required('Requerido'),
          description: string().max(80, 'Maximo 80 caracteres'),
        }),
      fields: () => <CreateForm.CategoryFields />,
      onSubmit: (values, { setSubmitting, resetForm }) =>
        handleSubmit(values, setSubmitting, resetForm, categoryActions.add),
    },
  };

  const getProps = type => props[type];

  return { getProps };
};
