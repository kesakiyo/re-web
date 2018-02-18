/* External dependencies */
import styled from 'styled-components';

/* Internal dependencies */
import colors from '../../styles/colors';
import BaseSideBar from '../../components/SideBar';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
`;

const SideBar = styled(BaseSideBar)`
  z-index: 1;
`;

const Body = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${colors.whiteTwo};
`;

export default {
  Wrapper,
  SideBar,
  Body,
};
