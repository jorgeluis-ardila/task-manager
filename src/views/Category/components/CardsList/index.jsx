import cn from 'classnames';
import PropTypes from 'prop-types';
import { useModal } from 'providers/context';
import { CardList } from 'core';
import { TaskCard } from './components';
import { actionNamesFilters } from 'providers/context/Data/constants';

const CardsList = ({ data, actions, layout }) => {
  const { modalActions } = useModal();

  return (
    <CardList className="items-list">
      {data.map(item => (
        <TaskCard
          key={item.id}
          taskData={item}
          actions={{
            taskActions: actions,
            modalActions,
          }}
          className={cn({ 'half-width': layout[actionNamesFilters.layoutSquare] })}
        />
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
