/* External dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/* Internal dependencies */
import Styled from './SideBar.styled';

const SideBar = ({ className }) => (
  <Styled.Wrapper className={className}>
    나는 사이드바...
  </Styled.Wrapper>
);

SideBar.propTypes = {
  className: PropTypes.string,
};

SideBar.defaultProps = {
  className: '',
};

export default SideBar;
