import React from 'react';
import SessionButtonContainer from '../session/session_button_container';

const Navbar = (props) => {
    return (
      <div className="nav w-nav" data-animation="default" data-collapse="medium" data-duration="400">
          <div className="w-container">
            <a className="w-nav-brand" href="/">
              <div className="logo-text">
                <span data-new-link="true">HOT</span>
                <strong data-new-link="true">SPOTS</strong>
              </div>
            </a>
            <nav className="nav-menu w-nav-menu" role="navigation">
              <a className="nav-link w-nav-link" href="/main">SEARCH</a>
              <SessionButtonContainer />
            </nav>
            <div className="menu-button w-nav-button">
              <div className="w-icon-nav-menu"></div>
            </div>
          </div>
      </div>
    )
};

export default Navbar;
