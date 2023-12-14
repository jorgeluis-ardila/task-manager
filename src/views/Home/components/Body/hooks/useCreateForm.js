import cn from 'classnames';
import { date, object, string } from 'yup';
import { useData } from 'providers/context';
import { Field } from 'core';

const today = new Date();
const addZero = number => (String(number).length === 1 ? '0' : '');

const todayString = `${today.getFullYear()}-${addZero(today.getMonth())}${today.getMonth() + 1}-${addZero(
  today.getDate()
)}${today.getDate()}`;

export const useCreateForm = modalActions => {
  const { data, currentCategory, categoryActions, taskActions } = useData();
  const options = data.map(item => ({ value: item.id, label: item.name }));
  const categories = options.map(option => option.value);

  const handleSubmit = (values, setSubmitting, resetForm, submitAction) => {
    submitAction(values);
    setSubmitting(false);
    resetForm({});
    modalActions.close();
  };

  const formProps = {
    createTask: {
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
            .oneOf([...categories], 'Categoría Invalida')
            .required('Requerido'),
        }),
      fields: () => (
        <>
          <Field variant="placeholder" label="Nombre *" max={30} type="text" id="name" name="name" />
          <Field as="textarea" label="Descripción" max={80} type="text" id="description" name="description" />

          <div className={cn({ 'two-fields': !currentCategory })}>
            <Field label="Fecha limite *" type="date" id="dueDate" name="dueDate" value={todayString} />
            {!currentCategory && (
              <Field as="select" label="Categoría" id="category" name="category" options={options} />
            )}
          </div>
        </>
      ),
      onSubmit: (values, { setSubmitting, resetForm }) =>
        handleSubmit(values, setSubmitting, resetForm, taskActions.add),
    },
    createCategory: {
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
      fields: () => (
        <>
          <Field variant="placeholder" label="Nombre *" max={30} type="text" id="name" name="name" />
          <Field as="textarea" label="Descripción" max={80} type="text" id="description" name="description" />
        </>
      ),
      onSubmit: (values, { setSubmitting, resetForm }) =>
        handleSubmit(values, setSubmitting, resetForm, categoryActions.add),
    },
  };

  const getFormProps = formType => formProps[formType];

  return { getFormProps };
};
