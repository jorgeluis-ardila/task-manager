import PropTypes from 'prop-types';
import cn from 'classnames';
import { Field } from 'core';

const TaskFields = ({ currentCategory, categoriesValues }) => (
  <>
    <div className={cn({ 'two-fields': !currentCategory })}>
      <Field label="Fecha limite *" type="date" id="dueDate" name="dueDate" />
      {!currentCategory && (
        <Field as="select" label="Categoría *" id="category" name="category" options={categoriesValues.options} />
      )}
    </div>
    <Field label="Nombre *" max={30} type="text" id="name" name="name" />
    <Field as="textarea" label="Descripción" max={80} id="description" name="description" />
  </>
);

TaskFields.protoTypes = {
  currentCategory: PropTypes.bool,
  categoriesValues: PropTypes.array,
};

export { TaskFields };
