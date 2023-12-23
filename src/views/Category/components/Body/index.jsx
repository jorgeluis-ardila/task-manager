import { CreateButtons, TitleBar, CardsList } from './components';
import { StyledBody } from './style';

const Body = () => {
  return (
    <StyledBody>
      <div className="inner-body">
        <TitleBar />
        <CardsList />
        <CreateButtons />
      </div>
    </StyledBody>
  );
};

export { Body };
