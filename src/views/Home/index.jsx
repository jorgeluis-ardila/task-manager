import { useData } from 'providers/context';
import { actionNamesFilters } from 'providers/context/Data/constants';
import { MainWrapper, Header, Body } from 'core';
import { CardsList, CreateButtons, TitleBar } from './components';

const Home = () => {
  const { data, dataSearched, categoryActions, layout } = useData();
  return (
    <MainWrapper>
      <Header />
      <Body>
        <TitleBar total={data.length} />
        <CardsList data={dataSearched} actions={categoryActions} layout={layout[actionNamesFilters.layoutSquare]} />
        <CreateButtons hasData={!!data.length} />
      </Body>
    </MainWrapper>
  );
};

export { Home };
