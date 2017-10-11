import React, { Component } from 'react';
import { StandardCard, StandardList, DangerButton } from './shared-components';
import { connect } from 'react-redux';
import { getUsers } from './features/users/actions/user.actions';
import { DynamicForm } from './features/dynamic-form/dynamic-form.component';


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


        <StandardCard>
          <DynamicForm data={this.props.formSchema} />
        </StandardCard>
      </div>
    );
  }
}

const connectStateToProps = (state) => ({
  users: state.users.list,
  formSchema: state.formSchema
});

const mapActionsToProps = {
  getUsers: getUsers
};

export default connect(connectStateToProps, mapActionsToProps)(App);
