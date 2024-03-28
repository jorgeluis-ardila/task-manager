import PropTypes from 'prop-types';
import { Body, MainWrapper } from '..';
import { Outlet } from 'react-router-dom';
import { AppLogo } from 'core/components';
import { IntroIMG, LogoWrapper } from './style';

const UnLoggedLayout = ({ children }) => {
  return (
    <MainWrapper>
      <LogoWrapper>
        <AppLogo className="login" />
        <IntroIMG />
      </LogoWrapper>
      <Body className="login">
        {children}
        <Outlet />
      </Body>
    </MainWrapper>
  );
};

UnLoggedLayout.propTypes = {
  children: PropTypes.element,
};

export { UnLoggedLayout };
