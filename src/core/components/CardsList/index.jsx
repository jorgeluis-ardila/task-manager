import PropTypes from 'prop-types';
import cn from 'classnames';
import { List, ListWrapper } from './style';

const CardList = ({ children, className, style }) => {
  return (
    <ListWrapper style={style} className={cn('items-list', className)}>
      <List className="list">{children}</List>
    </ListWrapper>
  );
};

CardList.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
};

export { CardList };
