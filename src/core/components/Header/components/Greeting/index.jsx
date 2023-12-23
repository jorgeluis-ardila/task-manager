import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// TODO COMMENTED UNTIL FEATURE WILL BE REQUIRED
import { Button, Icon /* , IconButton */ } from 'core';
import AnonimousUser from 'assets/images/userAnonimus.png';
import { GreetingContainer, UserInfo } from './style';

const Greeting = ({ userData, onGoBack, onOpenProfile }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const userName = userData?.displayName?.split(' ')[0] ?? '';
  const params = useParams();
  const isHome = !Object.keys(params).length;
  const from = state?.from;
  const fromPath = from?.pathname || -1;

  // TODO COMMENTED UNTIL FEATURE WILL BE REQUIRED
  /* const handleOpenProfile = () => {
    onOpenProfile?.();
  }; */

  const handleGoBack = () => {
    onGoBack();
    navigate(fromPath);
  };

  return (
    <GreetingContainer>
      <UserInfo className="user-info">
        {!isHome && (
          <Button className="back-button" onClick={handleGoBack}>
            <Icon type="back" />
          </Button>
        )}
        <figure className="image">
          <img src={userData.photoURL ?? AnonimousUser} alt={userName} />
        </figure>
        <h2 className="greet">{`Hola ${userName}`}</h2>
      </UserInfo>
      {/* TODO COMMENTED UNTIL FEATURE WILL BE REQUIRED */}
      {/* <IconButton variant="filter" iconType="menuh" className="edit-profile" onClick={handleOpenProfile} /> */}
    </GreetingContainer>
  );
};

Greeting.propTypes = {
  userData: PropTypes.object,
  onOpenProfile: PropTypes.func,
  onGoBack: PropTypes.func,
  isCategoryOpen: PropTypes.bool,
};

export { Greeting };
