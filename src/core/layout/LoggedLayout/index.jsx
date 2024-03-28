import PropTypes from 'prop-types';
import { ProtectedRoute } from 'core';
import { Body, Header, MainWrapper } from '..';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar';

const LoggedLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <MainWrapper>
        <Header />
        <Body>
          {children}
          <Outlet />
        </Body>
        <NavBar />
      </MainWrapper>
    </ProtectedRoute>
  );
};

LoggedLayout.propTypes = {
  children: PropTypes.element,
};

export { LoggedLayout };
