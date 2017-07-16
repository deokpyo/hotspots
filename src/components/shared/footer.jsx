import React from 'react';

const Footer = (props) => {
  return (
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
  )
}

export default Footer;
