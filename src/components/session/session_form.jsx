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

  handleSignUp(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  redirectIfLoggedIn () {
    if (this.props.loggedIn) {
      this.props.router.push('/main');
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
    const customStyle = {
      content: {
        top: '50%',
        right: 'auto',
        left: '50%',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)'
      }
    }
    return (
      <Modal
        isOpen={this.props.open}
        onRequestClose={() => this.props.closeModal()}
        contentLabel="Modal"
        id='sessionForm'
        style={customStyle}
        overlayClassName='react-modal-overlay'
      >
        <form>
          <div className="form-group">
            <label>ADMIN LOG IN</label>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              id="username"
              placeholder="Enter Username"
              aria-describedby="usernameHelp"
              onChange={(e) => this.update(e, "username")}
              value={this.state.username}
              required
              tabIndex="1"
              autoFocus></input>
            <small id="usernameHelp" className="form-text text-muted">
              Will never share your information with anyone else
            </small>
            <div className="username-error">
              {() => this.displayErrorMessages("username")}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              id="password"
              placeholder="Enter Password"
              onChange={e => this.update(e, "password")}
              value={this.state.password}
              type="password"
              required
              tabIndex="2"></input>
            <small id="passwordHelp" className="form-text text-muted">
              Password longer than 6 characters
            </small>
            <div className="password-error">
              {() => this.displayErrorMessages("password")}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => this.handleSubmit(e)}
            tabIndex="3">Submit</button>
          <hr/>
          <button
            type='submit'
            className='btn btn-warning'
            onClick={e => this.handleSignUp(e)}
            tabIndex='4'>
            Sign Up
          </button>
        </form>
      </Modal>
    )

  }
}

export default withRouter(SessionForm);
