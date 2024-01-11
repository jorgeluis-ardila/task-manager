import { useAuth } from 'providers/context';
import { AuthOptionsWrapper } from './style';
import { IconButton } from 'core';

const AuthOptions = () => {
  const { authGoogle } = useAuth();

  return (
    <AuthOptionsWrapper>
      <p>Ó</p>
      <div className="buttons">
        <IconButton className="google-auth-button" variant="action" iconType="google" onClick={authGoogle} />
      </div>
    </AuthOptionsWrapper>
  );
};

export { AuthOptions };
