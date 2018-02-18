/* External dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import autobind from 'core-decorators/lib/autobind';

/* Internal dependencies */
import Styled from './Group.styled';
import GNB from '../../components/GNB';
import actions from '../../redux/actions';
import selectors from '../../redux/selectors';
import ManagerModel from '../../models/Manager';

const mapStateToProps = state => ({
  group: selectors.groupSelectors.getGroup(state),
  manager: selectors.managerSelectors.getManager(state),
});

const mapDispatchToProps = {
  signOut: actions.managerActions.signOut,
};

@connect(mapStateToProps, mapDispatchToProps)
class Group extends React.Component {
  static propTypes = {
    manager: PropTypes.instanceOf(ManagerModel).isRequired,
    signOut: PropTypes.func.isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func,
    }).isRequired,
  }

  @autobind
  handleSignOut() {
    this.props.signOut()
      .promise
      .then(() => {
        this.props.history.replace('/signin');
      });
  }

  render() {
    return (
      <Styled.Wrapper>
        <Styled.SideBar />
        <Styled.Body>
          <GNB
            manager={this.props.manager}
            onSignOut={this.handleSignOut}
          />
        </Styled.Body>
      </Styled.Wrapper>
    );
  }
}

export default Group;
