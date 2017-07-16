import React from 'react';

const MainHeroTile = ({ image='', tag='hot', name, bed, location, desc, deal, price }) => {
  return (
    <div className="w-clearfix w-col w-col-6 w-dyn-item">
      <div className="_50 _60block" data-ix="tile-1">
        <a className="hero-tile special w-inline-block" href="/about">
          <div className={`tile-image ${image}`}>
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
  )
}

export default MainHeroTile;
