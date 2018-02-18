/* External dependencies */
import styled from 'styled-components';

/* Internal dependendcies */
import colors from '../../styles/colors';
import Button from '../../elements/Button';

const Wrapper = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  padding-right: 33px;
`;

const Name = styled.div`
  margin: 0 21px 0 auto;
  font-size: 16px;
`;

const SignOutButton = Button.extend`
  border: none;
  background-color: ${colors.coolGreyTwo};

  &:hover {
    background-color: ${colors.purpleBlue};
  }
`;

export default {
  Wrapper,
  Name,
  SignOutButton,
};
