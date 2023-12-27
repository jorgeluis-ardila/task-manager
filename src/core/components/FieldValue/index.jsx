import PropTypes from 'prop-types';
import { ItemWrapper } from './style';

const FieldValue = ({ label, value }) => {
  return (
    <ItemWrapper>
      <p className="label">{label}</p>
      <p className="data">{value}</p>
    </ItemWrapper>
  );
};

FieldValue.protoTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export { FieldValue };
