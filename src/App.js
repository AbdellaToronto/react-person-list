import React, { Component } from 'react';
import { StandardCard, StandardList, DangerButton } from './shared-components';
import { connect } from 'react-redux';
import { getUsers } from './features/users/actions/user.actions';


class App extends Component {

  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="app">
        <StandardCard>
          <StandardList data={this.props.users.map(user => user.name)} />
          <DangerButton />
        </StandardCard>
      </div>
    );
  }
}

const connectStateToProps = (state) => ({
  users: state.users.list
});

const mapActionsToProps = {
  getUsers: getUsers
};

export default connect(connectStateToProps, mapActionsToProps)(App);
