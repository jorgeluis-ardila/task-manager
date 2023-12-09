import { Modal } from '../../core';
import { Body, Header } from './components';
import StyledHome from './style';

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Body />
      <Modal />
    </StyledHome>
  );
};

export default Home;
