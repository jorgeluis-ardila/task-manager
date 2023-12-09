import { date, object, string, number } from 'yup';
import { Field } from '../../../../core';
import { useStore } from '../../../../providers/context';

const today = new Date();
const addZero = number => (String(number).length === 1 ? '0' : '');

const todayString = `${today.getFullYear()}-${addZero(today.getMonth())}${today.getMonth() + 1}-${addZero(
  today.getDate()
)}${today.getDate()}`;

export const useCreateForm = formType => {
  const { data } = useStore();
  const options = data.map(item => ({ value: item.id, label: item.name }));
  const categories = options.map(option => option.value);

  const formProps = {
    createTask: {
      title: 'Crea tú tarea',
      initialValues: {
        name: '',
        description: '',
        dueDate: todayString,
        category: '',
      },
      validationSchema: () =>
        object({
          name: string().max(30, 'Maximo 30 caracteres').required('Requerido'),
          description: string().max(80, 'Maximo 80 caracteres'),
          dueDate: date().min(todayString, 'La fecha ya paso').required('Requerido'),
          category: number()
            .oneOf([...categories], 'Categoría Invalida')
            .required('Requerido'),
        }),
      fields: () => (
        <>
          <Field variant="placeholder" label="Nombre" max={30} type="text" id="name" name="name" />
          <Field as="textarea" label="Descripción" max={80} type="text" id="description" name="description" />

          <div className="two-fields">
            <Field label="Fecha limite" type="date" id="dueDate" name="dueDate" value={todayString} />
            <Field as="select" label="Categoría" id="category" name="category" options={options} />
          </div>
        </>
      ),
      handleSubmit: () => {},
    },
    createCategory: {
      title: 'Crea tú categoría',
      initialValues: {
        name: '',
        description: '',
      },
      validationSchema: () =>
        object({
          name: string().max(30, 'Maximo 30 caracteres').required('Requerido'),
          description: string().max(80, 'Maximo 80 caracteres'),
        }),
      fields: () => (
        <>
          <Field variant="placeholder" label="Nombre" max={30} type="text" id="name" name="name" />
          <Field as="textarea" label="Descripción" max={80} type="text" id="description" name="description" />
        </>
      ),
      handleSubmit: () => {},
    },
  };

  return formProps[formType];
};
