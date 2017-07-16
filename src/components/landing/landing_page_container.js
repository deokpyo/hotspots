import { connect } from 'react-redux';
import LandingPage from './landing_page';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser.username)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
