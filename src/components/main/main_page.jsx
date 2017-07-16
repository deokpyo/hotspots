import React from 'react';
import { withRouter } from 'react-router';

import Navbar from '../shared/navbar';
import Footer from '../shared/footer';

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
                  <div className="w-clearfix w-col w-col-6 w-dyn-item">
                    <div className="_50 _60block" data-ix="tile-1">
                      <a className="hero-tile special w-inline-block" href="/about">
                        <div className="tile-image trending">
                          <div className="tile-overlay">
                            <div className="project-tag"></div>
                            <div className="spot-name tile-text"></div>
                            <div className="details">
                              <div className="bed"></div>
                              <div className="divider"></div>
                              <div className="location"></div>
                              <div className="divider"></div>
                              <div className="description"></div>
                            </div>
                            <div className="hotdeal">
                              <div className="deal"></div>
                              <div className="price"></div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-section">
          <div className="w-container">
            <div className="cta-heading">Show me more</div><a className="button w-button" data-ix="show-contact-overlay" href="#">SHUFFLE</a></div>
        </div>
        <div className="footer-section">
          <div className="w-container">
            <div className="w-row">
              <div className="w-col w-col-3">
                <a className="logo-footer w-nav-brand" href="index.html">
                  <div className="footer-logo logo-text">HOT<strong data-new-link="true">SPOTS</strong></div>
                </a>
              </div>
              <div className="footer-link-col w-clearfix w-col w-col-9"><a className="contact footer-link nav-link" data-ix="show-contact-overlay" href="#">Contact</a><a className="footer-link nav-link" href="/blog">Blog</a><a className="footer-link nav-link" href="/about">About</a><a className="footer-link nav-link" href="index.html">Home</a></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MainPage);
