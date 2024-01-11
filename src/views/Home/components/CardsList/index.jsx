import cn from 'classnames';
import PropTypes from 'prop-types';
import { CardList } from 'core';

const CardsList = ({ className, children }) => {
  return <CardList className={cn('items-list', className)}>{children}</CardList>;
};

CardsList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export { CardsList };
