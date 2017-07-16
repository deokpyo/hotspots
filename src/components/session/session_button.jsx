import React from 'react';
import { withRouter } from 'react-router';
import SessionFormContainer from './session_form_container';

class SessionButton extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      action: ''
    };
  }

  toggleModal (action) {
    this.props.toggleModal();
    this.setState({ action });
  }

  logout () {
    this.props.logout();
  }

  render () {
    if (this.props.loggedIn) {
      return (
        <a
          className="contact nav-link w-nav-link"
          onClick={() => this.logout()}
          >
          Log Out
        </a>
      );
    } else {
      return (
        <a
          onClick={() => this.toggleModal("login")}
          className="contact nav-link w-nav-link">
          <div
            className="nav-button"
            data-toggle='modal'
            data-target='#sessionForm'
            >
            Sign In
          </div>
          <SessionFormContainer
            closeModal={() => this.toggleModal()}
            settings={this.state}/>
        </a>
      );
    }
  }
}

export default withRouter(SessionButton);
