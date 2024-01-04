import PropTypes from 'prop-types';
import cn from 'classnames';
import { ReactComponent as LogoIcon } from 'assets/images/logo-icon.svg';
import { ReactComponent as LogoTextLigth } from 'assets/images/logo-text-ligth.svg';
import { ReactComponent as LogoTextDark } from 'assets/images/logo-text-dark.svg';
import { LogoWrapper } from './style';

const AppLogo = ({ className, hasText = true, hasIcon = true, mode = 'dark' }) => {
  return (
    <LogoWrapper className={cn('app-logo', className)}>
      {hasIcon && <LogoIcon className="icon" />}
      {hasText && (mode === 'dark' ? <LogoTextDark className="text" /> : <LogoTextLigth className="text" />)}
    </LogoWrapper>
  );
};

AppLogo.propTypes = {
  className: PropTypes.string,
  hasText: PropTypes.bool,
  hasIcon: PropTypes.bool,
  mode: PropTypes.string,
};

export { AppLogo };
