import cn from 'classnames';
import PropTypes from 'prop-types';

import { CardList } from 'core';
import { CategoryCard } from './components';

const CardsList = ({ data, actions, layout, titleHeight }) => {
  return (
    <CardList
      className={cn('items-list', { 'square-view': layout })}
      style={{ height: `calc(100% - ${titleHeight + 10}px)` }}
    >
      {data.map(item => (
        <CategoryCard key={item.id} categoryData={item} actions={actions} className={cn({ 'half-width': layout })} />
      ))}
    </CardList>
  );
};

CardsList.propTypes = {
  data: PropTypes.array,
  actions: PropTypes.object,
  layout: PropTypes.bool,
  titleHeight: PropTypes.number,
};

export { CardsList };
