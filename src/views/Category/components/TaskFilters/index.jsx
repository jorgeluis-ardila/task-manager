import cn from 'classnames';
import { useData } from 'providers/context';
import { FilterButton, FiltersWrapper } from './style';
import { getTaskFilterOptions } from './constants';

const TaskFilters = () => {
  const { filtersActions, taskFilters } = useData();
  const filtersOptions = getTaskFilterOptions(filtersActions);

  return (
    <FiltersWrapper>
      {filtersOptions.map(filter => (
        <FilterButton className={cn({ active: taskFilters[filter.name] })} key={filter.name} onClick={filter.action}>
          {filter.label}
        </FilterButton>
      ))}
    </FiltersWrapper>
  );
};

export { TaskFilters };
