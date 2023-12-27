import PropTypes from 'prop-types';
import { FieldValue } from 'core';
import { FieldsWrapper } from './style';

const View = ({ currentCategory }) => {
  return (
    <FieldsWrapper>
      <p className="name-field">{currentCategory.name}</p>
      <FieldValue label="Descripción" value={currentCategory.description} />
    </FieldsWrapper>
  );
};

View.protoTypes = {
  currentCategory: PropTypes.object,
};

export { View };
