import React from 'react';
import { withRouter } from 'react-router';

import Navbar from '../shared/navbar';
import Footer from '../shared/footer';
import MainHeroTile from './main_hero_tile';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
        <div className="fixed-search">
          <div className="hero-overlay">
            <div className="nav w-nav" data-animation="default" data-collapse="medium" data-duration="400">
              <div className="w-container">
                <a className="w-nav-brand" href="index.html">
                  <div className="logo-text"><span data-new-link="true">HOT</span><strong data-new-link="true">SPOTS</strong></div>
                </a>
                <nav className="nav-menu w-nav-menu" role="navigation"><a className="nav-link w-nav-link" href="/blog">SEARCH</a><a className="contact nav-link w-nav-link" data-ix="show-contact-overlay" href="#">SIGN IN</a></nav>
                <div className="menu-button w-nav-button">
                  <div className="w-icon-nav-menu"></div>
                </div>
              </div>
            </div>
            <div className="nav w-nav" data-animation="default" data-collapse="medium" data-duration="400">
              <div className="w-container">
                <a className="w-nav-brand" href="index.html">
                  <div className="logo-text"><span data-new-link="true">HOT</span><strong data-new-link="true">SPOTS</strong></div>
                </a>
                <nav className="nav-menu w-nav-menu" role="navigation"><a className="nav-link w-nav-link" href="/blog">SEARCH</a><a className="contact nav-link w-nav-link" data-ix="show-contact-overlay" href="#">SIGN IN</a></nav>
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
                  <MainHeroTile image='trending'/>
                  <MainHeroTile image='seeall'/>
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
