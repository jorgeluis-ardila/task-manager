import PropTypes from 'prop-types';
import { ItemWrapper } from './style';

const DataItem = ({ label, value }) => {
  return (
    <ItemWrapper>
      <p className="label">{label}</p>
      <p className="data">{value}</p>
    </ItemWrapper>
  );
};

DataItem.protoTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export { DataItem };
