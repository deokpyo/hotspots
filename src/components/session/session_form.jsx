import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  componentWillUpdate () {
    this.redirectIfLoggedIn() ;
    this.resetErrorMessages() ;
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  redirectIfLoggedIn () {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  // loops through this.props.errors from the backend to the state
  // to display each error messages for the right properties
  displayErrorMessages (property) {
    let usernameInputError = this.props.errors.username;
    let passwordInputError = this.props.errors.password;

    if (property === "username") {
      if (usernameInputError) {
        usernameInputError.map((error, idx) => (
          <h6 key={idx}>{error}</h6>
        ));
      }
    } else if (property === "password") {
      if (passwordInputError) {
        passwordInputError.map((error, idx) => (
          <h6 key={idx}>{error}</h6>
        ));
      }
    }
  }

  resetErrorMessages () {
    let usernameInputError = this.props.errors.username;
    let passwordInputError = this.props.errors.password;

    if (usernameInputError || passwordInputError) {
      usernameInputError = undefined;
      passwordInputError = undefined;
    }
  }

  update(e, property) {
    this.setState({ [property]: e.target.value })
  }

  render () {
    return (
      <Modal
        isOpen={this.props.open}
        onRequestClose={() => this.props.closeModal()}
        contentLabel="Modal"
        className={`react-modal center-block animated fadeInUpBig`}
        overlayClassName='react-modal-overlay'
      >
        <div className="admin-auth">
          <div>
            <h1>ADMIN LOG IN</h1>
          </div>
          <div className="username-wrap">
            <input
              className="username"
              placeholder="Username"
              onChange={(e) => this.update(e, "username")}
              value={this.state.username}
              required
              tabIndex="1"
              autoFocus></input>
            <div className="username-error">
              {() => this.displayErrorMessages("username")}
            </div>
          </div>
          <div className="password-wrap">
            <input
              className="password"
              placeholder="Password"
              onChange={e => this.update(e, "password")}
              value={this.state.password}
              type="password"
              required
              tabIndex="2"></input>
            <div className="password-error">
              {() => this.displayErrorMessages("password")}
            </div>
          </div>
          <button
            className="submit"
            onClick={(e) => this.handleSubmit(e)}
            tabIndex="3">Submit</button>
        </div>
      </Modal>
    )

  }
}

export default withRouter(SessionForm);
