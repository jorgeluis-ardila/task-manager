import cn from 'classnames';
import PropTypes from 'prop-types';
import { useModal } from 'providers/context';
import { CardList } from 'core';
import { TaskCard } from './components';

const CardsList = ({ data, actions, layout, titleHeight }) => {
  const { modalActions } = useModal();

  return (
    <CardList
      className={cn('items-list', { 'square-view': layout })}
      style={{ height: `calc(100% - ${titleHeight + 39}px)` }}
    >
      {data.map(item => (
        <TaskCard
          key={item.id}
          taskData={item}
          actions={{
            taskActions: actions,
            modalActions,
          }}
          isSquareView={layout}
        />
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
