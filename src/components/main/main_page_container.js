import { connect } from 'react-redux';
import MainPage from './main_page';
import { fetchAllSpots } from '../../actions/spot_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({session, spots}) => ({
  loggedIn: Boolean(session.currentUser.username),
  spots
});

const mapDispatchToProps = dispatch => ({
  fetchAllSpots: () => dispatch(fetchAllSpots()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
