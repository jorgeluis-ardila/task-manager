import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import { useData } from 'providers/context';
import { actionTypesFilters } from 'providers/context/Data/constants';
import { CardList, CategoryCard, StatusMessage } from 'core';
import { CreateButtons, TitleBar } from './components';

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = Object.fromEntries([...searchParams]);
  const { data, dataSearched, layout, searchTerm, filtersActions } = useData();

  const [titleHeight, setTitleHeight] = useState(0);
  const titleRef = useRef(null);
  const cardsLayout = layout[actionTypesFilters.layoutSquare];

  useEffect(() => {
    if (currentParams?.favorite) {
      filtersActions.categoryFilters.favorite(currentParams?.favorite === 'true' ?? false);
      setSearchParams();
    }
    setTitleHeight(titleRef.current?.clientHeight);
  }, [currentParams?.favorite, filtersActions, setSearchParams]);

  return (
    <>
      <TitleBar total={data.length} ref={titleRef} />
      {dataSearched.length ? (
        <CardList
          className={cn({ 'square-view': cardsLayout })}
          style={{ height: `calc(100% - ${titleHeight + 10}px)` }}
        >
          {dataSearched.map(item => (
            <li key={item.id}>
              <CategoryCard categoryData={item} className={cn({ 'half-width': cardsLayout })} />
            </li>
          ))}
        </CardList>
      ) : (
        <StatusMessage type={searchTerm ? 'emptySearch' : 'empty'} />
      )}
      <CreateButtons hasData={!!data.length} />
    </>
  );
};

export { Categories };
