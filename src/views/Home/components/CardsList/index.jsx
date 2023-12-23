import cn from 'classnames';
import PropTypes from 'prop-types';

import { CardList } from 'core';
import { CategoryCard } from './components';

const CardsList = ({ data, actions, layout }) => {
  return (
    <CardList className="items-list">
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
};

export { CardsList };
