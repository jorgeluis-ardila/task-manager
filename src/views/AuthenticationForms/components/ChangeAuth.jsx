import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from 'core';
import { ChangeOption } from './style';

const VALUES = {
  login: {
    url: '/register',
    text: 'Aun no tienes cuenta?',
    buttonText: 'Registrate',
  },
  register: {
    url: '/login',
    text: 'Ya tienes cuenta?',
    buttonText: 'Inicia Sesión',
  },
};

const ChangeAuth = ({ isLogin, from, email }) => {
  const navigate = useNavigate();
  const currentView = isLogin ? 'login' : 'register';

  const handleClick = () => navigate(VALUES[currentView].url, { replace: true, state: { from, email } });

  return (
    <ChangeOption className="change-form">
      {VALUES[currentView].text} <Button onClick={handleClick}>{VALUES[currentView].buttonText}</Button>
    </ChangeOption>
  );
};

ChangeAuth.protoTypes = {
  isLogin: PropTypes.bool,
  from: PropTypes.object,
};

export { ChangeAuth };
