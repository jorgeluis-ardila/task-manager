import React from 'react';
import PropTypes from 'prop-types';
// TODO COMMENTED UNTIL FEATURE WILL BE REQUIRED
import { Button, Icon /* , IconButton */ } from 'core';
import AnonimousUser from 'assets/images/userAnonimus.png';
import { GreetingContainer, UserInfo } from './style';

const Greeting = ({ userData, onOpenProfile, onGoBack, isCategoryOpen }) => {
  const userName = userData?.displayName?.split(' ')[0] ?? '';

  // TODO COMMENTED UNTIL FEATURE WILL BE REQUIRED
  /* const handleOpenProfile = () => {
    onOpenProfile?.();
  }; */

  const handleGoBack = () => {
    onGoBack();
  };

  return (
    <GreetingContainer>
      <UserInfo className="user-info">
        {isCategoryOpen && (
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
