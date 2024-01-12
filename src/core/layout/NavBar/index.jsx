import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { useAuth, useData } from 'providers/context';
import { useGetNavRoutes } from './constants';
import { Button, Icon } from 'core/components';
import { NavItem, NavList, Navigation } from './style';

const NavBar = () => {
  const { logOut } = useAuth();
  const { defineCurrentTask, defineCurrentCategory } = useData();
  const navRoutes = useGetNavRoutes();

  const handleNavigate = async () => {
    await defineCurrentCategory();
    defineCurrentTask();
  };

  return (
    <Navigation>
      <NavList>
        {navRoutes.map(route => {
          if (route.isDetail) return null;
          return (
            <NavItem key={route.text}>
              <NavLink
                onClick={handleNavigate}
                to={route?.to}
                className={({ isActive }) => cn('ancor', { active: isActive })}
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
