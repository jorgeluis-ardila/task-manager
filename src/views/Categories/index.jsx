import { useEffect, useRef, useState } from 'react';
import { useData } from 'providers/context';
import { actionNamesFilters } from 'providers/context/Data/constants';
import { CardsList, CreateButtons, TitleBar } from './components';
import { StatusMessage } from 'core';

const Categories = () => {
  const { data, dataSearched, categoryActions, layout, searchTerm } = useData();

  const [titleHeight, setTitleHeight] = useState(0);
  const titleRef = useRef(null);

  useEffect(() => {
    setTitleHeight(titleRef.current?.clientHeight);
  }, []);

  return (
    <>
      <TitleBar total={data.length} ref={titleRef} />
      {dataSearched.length ? (
        <CardsList
          data={dataSearched}
          actions={categoryActions}
          layout={layout[actionNamesFilters.layoutSquare]}
          titleHeight={titleHeight}
        />
      ) : (
        <StatusMessage type={searchTerm ? 'emptySearch' : 'empty'} />
      )}
      <CreateButtons hasData={!!data.length} />
    </>
  );
};

export { Categories };
