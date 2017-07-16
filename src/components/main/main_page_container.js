import { connect } from 'react-redux';
import MainPage from './main_page';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser.username)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
