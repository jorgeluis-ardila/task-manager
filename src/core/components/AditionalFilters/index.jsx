import cn from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from 'core';
import { useData } from 'providers/context';
import { actionTypesFilters } from 'providers/context/Data/constants';
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
            className={cn('filter-button', { active: sort[actionTypesFilters.asc] || sort[actionTypesFilters.dec] })}
            onClick={() => filtersActions.sort()}
          >
            <Icon
              type={sort[actionTypesFilters.asc] ? 'ascSort' : sort[actionTypesFilters.dec] ? 'decSort' : 'ascSort'}
            />
            Nombre
            {sort[actionTypesFilters.asc] && ' ASC'}
            {sort[actionTypesFilters.dec] && ' DESC'}
          </FilterButton>
          {!!isCategory && (
            <FilterButton
              variant="filter"
              className={cn('filter-button', {
                active: sortDate[actionTypesFilters.dateAsc] || sortDate[actionTypesFilters.dateDec],
              })}
              onClick={() => filtersActions.sortDate()}
            >
              <Icon
                type={
                  sortDate[actionTypesFilters.dateAsc]
                    ? 'ascDateSort'
                    : sortDate[actionTypesFilters.dateDec]
                    ? 'decDateSort'
                    : 'ascDateSort'
                }
              />
              Fecha
              {sortDate[actionTypesFilters.dateAsc] && ' ASC'}
              {sortDate[actionTypesFilters.dateDec] && ' DESC'}
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
