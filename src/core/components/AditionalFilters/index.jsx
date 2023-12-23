import cn from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from 'core';
import { useData } from 'providers/context';
import { actionNamesFilters } from 'providers/context/Data/constants';
import { FilterButton, FilterIconButton, FiltersWrapper, MainWrapper, Section } from './style';
import { getCategoryFilterOptions, getLayoutOptions } from './constants';

const AditionalFilters = ({ isCategory }) => {
  const { filtersActions, sort, sortDate, categoryFilters, layout } = useData();
  const filtersOptionsCategory = getCategoryFilterOptions(filtersActions);
  const filtersOptionsLayout = getLayoutOptions(filtersActions);

  return (
    <MainWrapper>
      <Section>
        <p className="title">Ordenar</p>
        <FiltersWrapper>
          <FilterButton
            variant="filter"
            className={cn('filter-button', { active: sort[actionNamesFilters.asc] || sort[actionNamesFilters.dec] })}
            onClick={() => filtersActions.sort()}
          >
            <Icon
              type={sort[actionNamesFilters.asc] ? 'ascSort' : sort[actionNamesFilters.dec] ? 'decSort' : 'ascSort'}
            />
            Nombre
            {sort[actionNamesFilters.asc] && ' ASC'}
            {sort[actionNamesFilters.dec] && ' DESC'}
          </FilterButton>
          {!!isCategory && (
            <FilterButton
              variant="filter"
              className={cn('filter-button', {
                active: sortDate[actionNamesFilters.dateAsc] || sortDate[actionNamesFilters.dateDec],
              })}
              onClick={() => filtersActions.sortDate()}
            >
              <Icon
                type={
                  sortDate[actionNamesFilters.dateAsc]
                    ? 'ascDateSort'
                    : sortDate[actionNamesFilters.dateDec]
                    ? 'decDateSort'
                    : 'ascDateSort'
                }
              />
              Fecha
              {sortDate[actionNamesFilters.dateAsc] && ' ASC'}
              {sortDate[actionNamesFilters.dateDec] && ' DESC'}
            </FilterButton>
          )}
          {!isCategory &&
            filtersOptionsCategory.map(filter => (
              <FilterButton
                variant="filter"
                className={cn('filter-button', { active: categoryFilters[filter.name] })}
                key={filter.name}
                onClick={() => filter.action()}
              >
                <Icon type={filter.icon} />
                {filter.label}
              </FilterButton>
            ))}
        </FiltersWrapper>
      </Section>
      <Section className="layout">
        <p className="title">Cambiar Vista de Tarjetas</p>
        <FiltersWrapper>
          {filtersOptionsLayout.map(filter => (
            <FilterIconButton
              variant="filter"
              className={cn('filter-button', { active: layout[filter.name] })}
              key={filter.name}
              iconType={filter.icon}
              onClick={() => filter.action()}
            />
          ))}
        </FiltersWrapper>
      </Section>
    </MainWrapper>
  );
};

AditionalFilters.protoTypes = {
  isCategory: PropTypes.bool,
};

export { AditionalFilters };
