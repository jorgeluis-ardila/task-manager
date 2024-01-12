import { object, string, date } from 'yup';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { findIndex, getCategoriesValues, isExpired, todayString } from 'utils';
import { useData } from 'providers/context';
import { BaseForm, Button, Field, IconButton } from 'core';
import { ButtonsWrapper, FieldsWrapper, Wrapper } from './style';
import { StatusFlag } from '../components';

const EditTask = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, currentTask, currentCategory, taskActions, defineCurrentCategory } = useData();
  const taskRoute = `/boards/${currentCategory?.slug}/t/${currentTask?.slug}`;
  const categoriesValues = getCategoriesValues(data);

  const handleCancelEdit = () => navigate(taskRoute, { state: { from: location.state.fromTask } });

  const handleSubmit = (values, setSubmitting) => {
    const newCategorySlug = data[findIndex(data, values.category, 'id')].slug;

    setSubmitting(false);
    taskActions.edit(values, currentTask.id, values.category);
    defineCurrentCategory(values.category);
    navigate(`/boards/${newCategorySlug}/t/${currentTask.slug}`, { replace: true, from: `/boards/${newCategorySlug}` });
  };

  if (!currentTask) return <Navigate to={currentCategory ? taskRoute : '/'} replace />;

  return (
    <Wrapper>
      <BaseForm
        validateOnMount
        initialValues={{
          name: currentTask?.name,
          description: currentTask?.description,
          dueDate: currentTask?.dueDate,
          category: currentTask?.category.id,
        }}
        validationSchema={() =>
          object({
            name: string().min(3, 'Minimo 3 caracteres').max(30, 'Maximo 30 caracteres').required('Requerido'),
            description: string().max(150, 'Maximo 150 caracteres'),
            dueDate: date().min(todayString, 'La fecha ya paso').required('Requerido'),
            category: string()
              .oneOf([...categoriesValues.categories], 'Categoría Invalida')
              .required('Requerido'),
          })
        }
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
        renderChildren={(isSubmitting, isValid, dirty) => (
          <>
            <FieldsWrapper>
              <div className="two-fields">
                <Field variant="underlined" label="Fecha Limite" type="date" id="dueDate" name="dueDate" />
                <StatusFlag isCompleted={currentTask.isCompleted} isExpired={isExpired(currentTask.dueDate)} />
              </div>
              <Field variant="underlined" label="Nombre" max={30} type="text" id="name" name="name" />
              <Field
                as="select"
                variant="underlined"
                label="Categoría"
                id="category"
                name="category"
                options={categoriesValues.options}
              />
              <Field
                as="textarea"
                label="Descripción"
                variant="underlined"
                id="description"
                name="description"
                max={150}
              />
            </FieldsWrapper>
            <ButtonsWrapper>
              <Button
                className="accept-button success-button"
                type="submit"
                variant="action"
                disabled={!dirty || isSubmitting || !isValid}
              >
                Guardar Cambios
              </Button>
              <IconButton
                type="button"
                variant="delete"
                iconType="cancel"
                disabled={isSubmitting}
                onClick={handleCancelEdit}
              />
            </ButtonsWrapper>
          </>
        )}
      />
    </Wrapper>
  );
};

export { EditTask };
