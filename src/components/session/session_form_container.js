import { connect } from 'react-redux';
import { login, logout, toggleModal, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => {
  debugger; 
  return {
  loggedIn: Boolean(session.currentUser.username),
  errors: session.errors,
  open: session.modal
}};

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  closeModal: () => dispatch(toggleModal())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
