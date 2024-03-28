import cn from 'classnames';
import PropTypes from 'prop-types';
import { FilterButton, FiltersWrapper } from './style';
import { getTaskFilterOptions } from './constants';

const TaskFilters = ({ actions, filters }) => {
  const filtersOptions = getTaskFilterOptions(actions);

  return (
    <FiltersWrapper>
      {filtersOptions.map(filter => (
        <FilterButton className={cn({ active: filters[filter.name] })} key={filter.name} onClick={filter.action}>
          {filter.label}
        </FilterButton>
      ))}
    </FiltersWrapper>
  );
};

TaskFilters.propTypes = {
  actions: PropTypes.object,
  filters: PropTypes.object,
};

export { TaskFilters };
