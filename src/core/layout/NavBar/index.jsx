import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { useGetNavRoutes } from './constants';
import { Button, Icon } from 'core/components';
import { NavItem, NavList, Navigation } from './style';
import { useAuth } from 'providers/context';

const NavBar = () => {
  const { logOut } = useAuth();
  const navRoutes = useGetNavRoutes();

  return (
    <Navigation>
      <NavList>
        {navRoutes.map(route => {
          if (route.isDetail) return null;
          return (
            <NavItem key={route.text}>
              <NavLink
                onClick={route?.onClick}
                className={({ isActive }) => cn('ancor', { active: isActive })}
                to={route?.to}
                end
              >
                {({ isActive }) => (isActive ? route.text : <Icon type={route.icon} />)}
              </NavLink>
            </NavItem>
          );
        })}
        <NavItem>
          <Button className="ancor" onClick={logOut}>
            <Icon type="exit" />
          </Button>
        </NavItem>
      </NavList>
    </Navigation>
  );
};

export { NavBar };
