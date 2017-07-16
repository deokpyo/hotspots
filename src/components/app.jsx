import React from 'react';
import SessionButtonContainer from './session/session_button_container';

const App = ({ children }) => (
  <div>
    <div className="hero-section home-page-hero">
      <div className="nav w-nav" data-animation="default" data-collapse="medium" data-duration="400">
        <div className="w-container">
          <a className="w-nav-brand" href="index.html">
            <div className="logo-text"><span data-new-link="true">HOT</span><strong data-new-link="true">SPOTS</strong></div>
          </a>
          <nav className="nav-menu w-nav-menu" role="navigation">
            <a className="nav-link w-nav-link" href="index.html">Home</a>
            <a className="nav-link w-nav-link" href="blog.html">SEARCH</a>
            <SessionButtonContainer />
          </nav>
          <div className="menu-button w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </div>
    <div className="home-page section top-section">
      <div className="hero-container w-container">
        <div className="w-clearfix">
          <div className="_60block" data-ix="tile-1">
            <a className="hero-tile w-inline-block" href="about.html">
              <div className="tile-text">Trending.</div>
              <div className="tile-image trending">
                <div className="tile-overlay"></div>
              </div>
            </a>
          </div>
          <div className="_40block" data-ix="tile-3">
            <div className="hero-tile w-dyn-list">
              <div className="w-dyn-items">
                <div className="w-dyn-item">
                  <a className="tile-link w-inline-block" href="portfolio.html">
                    <div className="tile-text">Latest<br/>Deals.</div>
                    <div className="latest tile-image">
                      <div className="tile-overlay"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-dyn-empty">
                <p>No items found.</p>
              </div>
            </div>
          </div>
          <div className="_33block" data-ix="tile-3">
            <div className="hero-tile">
              <div className="w-dyn-list">
                <div className="w-dyn-items">
                  <div className="w-dyn-item">
                    <a className="tile-link w-inline-block" href="blog.html">
                      <div className="tile-text">Fresh<br/>Finds.</div>
                      <div className="tile-image">
                        <div className="tile-overlay"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-dyn-empty">
                  <p>No items found.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="_33block" data-ix="tile-2">
            <a className="hero-tile w-inline-block" data-ix="show-contact-overlay" href="#">
              <div className="tile-text">beat<br/>the heat.</div>
              <div className="featured tile-image">
                <div className="tile-overlay"></div>
              </div>
            </a>
          </div>
          <div className="_33block" data-ix="tile-2">
            <a className="hero-tile w-inline-block" data-ix="show-contact-overlay" href="#">
              <div className="tile-text">See all.</div>
              <div className="seeall tile-image">
                <div className="tile-overlay"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  // {/*<div classNameName="container-fluid">
  //   {children}
  // </div>*/}

export default App;
