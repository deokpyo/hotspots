import React from 'react';
import { withRouter } from 'react-router';
import Navbar from '../shared/navbar';
import HeroTile from './hero_tile';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    debugger;
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
