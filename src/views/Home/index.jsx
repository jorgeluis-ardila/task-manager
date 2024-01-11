import cn from 'classnames';
import { useData } from 'providers/context';
import { CardsList, TitleBar } from './components';
import { StatusMessage } from 'core';
// import { CategoryCard } from './components';
import { SectionWrapper } from './style';

const Home = () => {
  const { dataSearched, /* categoryActions, layout, */ searchTerm } = useData();

  return (
    <>
      <SectionWrapper>
        <TitleBar text="Tus Tableros Favoritos" />
        <CardsList className="categories-list">
          {/* {data.map(item => (
            <CategoryCard key={item.id} categoryData={item} actions={actions} className={cn({ 'half-width': true })} />
          ))} */}
        </CardsList>
      </SectionWrapper>
      <SectionWrapper>
        <TitleBar text="Algunas tareas por vencer" />
        <CardsList className="taks-list"></CardsList>
      </SectionWrapper>
      {dataSearched.length ? (
        <>
          {/* <CardsList
          data={dataSearched}
          actions={categoryActions}
          layout={layout[actionNamesFilters.layoutSquare]}
          titleHeight={titleHeight}
        />
         */}
        </>
      ) : (
        <StatusMessage type={searchTerm ? 'emptySearch' : 'empty'} />
      )}
    </>
  );
};

export { Home };
