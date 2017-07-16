import { connect } from 'react-redux';
import { login, logout, toggleModal } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser.username),
  errors: session.errors,
  open: session.modal
});

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  closeModal: () => dispatch(toggleModal())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
