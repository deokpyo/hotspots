import { connect } from 'react-redux';
import { logout, toggleModal } from '../../actions/session_actions';
import SessionButton from './session_button';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser.username)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleModal: () => dispatch(toggleModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButton);
