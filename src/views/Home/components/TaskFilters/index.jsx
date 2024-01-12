import cn from 'classnames';
import PropTypes from 'prop-types';
import { taskFilters } from './constants';
import { FilterButton, FiltersWrapper } from './style';

const TaskFilters = ({ data, activeFilter, onChangeFilter }) => {
  const handleClick = name => {
    onChangeFilter(name);
  };

  return (
    <FiltersWrapper>
      {taskFilters.map(filter => (
        <FilterButton
          className={cn({ active: activeFilter === filter.name })}
          key={filter.label}
          onClick={() => handleClick(filter.name)}
        >
          {filter.label}
        </FilterButton>
      ))}
    </FiltersWrapper>
  );
};

TaskFilters.protoTypes = {
  data: PropTypes.array,
  onChangeTasks: PropTypes.func,
  activeFilter: PropTypes.func,
  onChangeFilter: PropTypes.func,
};

export { TaskFilters };
