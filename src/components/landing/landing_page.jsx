import React from 'react';
import { withRouter } from 'react-router';
import Navbar from '../shared/navbar';
import HeroTile from './hero_tile';
import { APIManager } from '../../utils';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
        // check current user
        APIManager.get('/admin/currentuser', null, (err, response) => {
            if (err) {
                console.log('error ' + err);
                return
            }
            if (response.profile == null) {
                console.log('user not logged in');
                return
            }
            // user is logged in
            console.log('current user: ' + JSON.stringify(response))

        })
    }


  render() {
    return (
      <div>
        <div className="hero-section home-page-hero">
          <Navbar />
          <div className="hero-overlay"></div>
        </div>
        <div className="home-page section top-section">
            <div className="hero-container w-container">
              <div className="w-clearfix">
                <HeroTile size='60' text='Trending' ix='1' image='trending'/>
                <HeroTile size='40' text='Latest Deals' ix='3' image='latest'/>
                <HeroTile size='33' text='Fresh Finds' ix='3'image='phone'/>
                <HeroTile size='33' text='Beat the heat' ix='2' />
                <HeroTile size='33' text='See all' ix='2' image='seeall'/>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LandingPage);
