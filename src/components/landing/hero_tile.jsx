import React from 'react';

const HeroTile = ({ size, text, ix, image='' }) => {
  return (
    <div>
      <div className={`_${size}block`} data-ix={`tile-${ix}`}>
          <a className="hero-tile w-inline-block">
              <div className="tile-text">{text}</div>
              <div className={`tile-image ${image}`}>
                  <div className="tile-overlay"></div>
              </div>
          </a>
      </div>
    </div>
  )
}

export default HeroTile;
