/* Extenral dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/* Internal dependencies */
import Styled from './GNB.styled';
import Manager from '../../models/Manager';

const GNB = ({ manager, onSignOut }) => (
  <Styled.Wrapper>
    <Styled.Name>
      {manager.name}
    </Styled.Name>
    <Styled.SignOutButton
      width={60}
      height={22}
      radius={10}
      fontSize={10}
      onClick={onSignOut}
    >
      로그아웃
    </Styled.SignOutButton>
  </Styled.Wrapper>
);

GNB.propTypes = {
  manager: PropTypes.instanceOf(Manager).isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default GNB;
