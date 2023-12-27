import PropTypes from 'prop-types';
import { ProtectedRoute } from 'core';
import { Body, Header, MainWrapper } from './components';
import { Outlet } from 'react-router-dom';

const LoggedLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <MainWrapper>
        <Header />
        <Body>
          {children}
          <Outlet />
        </Body>
      </MainWrapper>
    </ProtectedRoute>
  );
};

LoggedLayout.protoTypes = {
  children: PropTypes.element,
};

export { LoggedLayout };
