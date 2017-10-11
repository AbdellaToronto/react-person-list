import React, { Component } from 'react';
import { StandardCard, StandardList, DangerButton } from './shared-components';
import { connect } from 'react-redux';


class App extends Component {
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

export default connect(connectStateToProps)(App);
