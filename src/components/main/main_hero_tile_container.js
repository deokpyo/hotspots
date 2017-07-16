import { connect } from 'react-redux';
import MainHeroTile from './main_hero_tile';
import { updateUserSpots } from '../../actions/user_actions';


const mapStateToProps = ({session, spots, user}) => ({
  userSpots: user.spots
});

const mapDispatchToProps = dispatch => ({
  updateUserSpots: spot => dispatch(updateUserSpots(spot))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeroTile);
