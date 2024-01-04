import PropTypes from 'prop-types';
import { List, ListWrapper } from './style';

const CardList = ({ children, className, style }) => {
  return (
    <ListWrapper style={style}>
      <List className={className}>{children}</List>
    </ListWrapper>
  );
};

CardList.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
};

export { CardList };
