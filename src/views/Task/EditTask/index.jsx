import { object, string, date } from 'yup';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { findIndex, getCategoriesValues, isExpired, todayString } from 'utils';
import { useData } from 'providers/context';
import { BaseForm, Button, Field, IconButton } from 'core';
import { ButtonsWrapper, FieldsWrapper, Wrapper } from './style';
import { StatusFlag } from '../components';

const EditTask = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data, currentTask, currentCategory, taskActions, defineCurrentCategory } = useData();
  const taskData = state?.taskData ?? currentTask;
  const taskRoute = `/c/${currentCategory?.slug}/t/${currentTask?.slug}`;
  const from = state?.from?.pathname ?? taskRoute;
  const categoriesValues = getCategoriesValues(data);

  const handleCancelEdit = () => navigate(from);

  const handleSubmit = (values, setSubmitting) => {
    const newCategorySlug = data[findIndex(data, values.category, 'id')].slug;

    setSubmitting(false);
    taskActions.edit(values, currentTask.id);
    defineCurrentCategory(values.category);
    navigate(`/c/${newCategorySlug}/t/${currentTask.slug}`, { replace: true, from: `/c/${newCategorySlug}` });
  };

  if (!taskData) return <Navigate to={currentCategory ? taskRoute : '/'} replace />;

  return (
    <Wrapper>
      <BaseForm
        validateOnMount
        initialValues={{
          name: taskData?.name,
          description: taskData?.description,
          dueDate: taskData?.dueDate,
          category: taskData?.category.id,
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
                <StatusFlag isCompleted={taskData.isCompleted} isExpired={isExpired(taskData.dueDate)} />
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
