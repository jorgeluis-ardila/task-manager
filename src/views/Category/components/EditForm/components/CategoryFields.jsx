import PropTypes from 'prop-types';
const { Field } = require('core');

const CategoryFields = ({ isEditing, currentCategory }) => (
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
        max={150}
        disabled={!isEditing}
      />
    )}
  </>
);

CategoryFields.protoTypes = {
  isEditing: PropTypes.bool,
  currentCategory: PropTypes.object,
};

export { CategoryFields };
