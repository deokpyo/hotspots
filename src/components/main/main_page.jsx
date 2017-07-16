import React from 'react';
import { withRouter } from 'react-router';

import Navbar from '../shared/navbar';
import Footer from '../shared/footer';
import MainHeroTile from './main_hero_tile';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spots: [],
      left: {},
      right: {}
    }
  }

  mapMainHeroTiles() {
    return this.state.map(tile => {
      let assets = {
        image: tile.image,
        tag: tile.tag,
        name: tile.name,
        bed: tile.bed,
        location: tile.location,
        desc: tile.description,
        deal: tile.deal,
        price: tile.price
      };

      return <MainHeroTile assets={assets}/>
    });
  }

  renderCandidates(array) {

  }

  randomSpots(list) {
    let randomNum = Math.floor(Math.random() * list.length);
    let chosenObj = list[randomNum];
    this.setState({spots: list.splice(randomNum, 1)});
    return chosenObj;
  }

  handleClick(e) {
    e.preventDefault();
    // this.setState({ !loggedIn });
    this.props.logout();
  }

  render () {
    return(
      <div>
        <div className="fixed-search">
          <div className="hero-overlay">
            <div className="nav w-nav" data-animation="default" data-collapse="medium" data-duration="400">
              <div className="w-container">
                <a className="w-nav-brand" href="/">
                  <div className="logo-text"><span data-new-link="true">HOT</span><strong data-new-link="true">SPOTS</strong></div>
                </a>
                <nav className="nav-menu w-nav-menu" role="navigation">
                  <a className="nav-link w-nav-link" href="/main">SEARCH</a>
                  <a
                    className="contact nav-link w-nav-link"
                    data-ix="show-contact-overlay"
                    onClick={e => this.handleClick(e)}>LOG OUT</a>
                </nav>
                <div className="menu-button w-nav-button">
                  <div className="w-icon-nav-menu"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page section top-section">
          <div className="hero-container w-container">
            <div className="div-block-3">
              <div className="w-dyn-list">
                <div className="collection-list w-dyn-items w-row">
                  <MainHeroTile
                    image='urban'
                    tag='New'
                    name='shell house vacation'
                    bed='6'
                    location='San Francisco, CA'
                    desc='5'
                    deal='108'
                    price='200'/>
                  <MainHeroTile
                    image='shell'
                    tag='Featured'
                    name='urban getaway in downtown'
                    bed='4'
                    location='Austin, TX'
                    desc='4'
                    deal='75'
                    price='30'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="w-container">
            <div className="cta-heading">Show me more</div><a className="button w-button" data-ix="show-contact-overlay" href="#">SHUFFLE</a></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(MainPage);
