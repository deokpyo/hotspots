import React, { PropTypes } from 'react';

const HeroTile = (props) => {
  return (
    <div className="w-clearfix w-col w-col-6 w-dyn-item">
      <div className="_50 _60block" data-ix="tile-1">
        <a className="hero-tile special w-inline-block">
          <div className={`main-tile-image ${props.image}`}>
            <div className="tile-overlay">
              <div className={`project-tag ${props.tag}`}>{props.tag}</div>
              <div className="spot-name tile-text">{props.name}</div>
              <div className="details">
                <div className="bed">{`${props.bed} beds`}</div>
                <div className="divider"></div>
                <div className="location">{props.location}</div>
                <div className="divider"></div>
                <div className="description">{props.desc}</div>
              </div>
              <div className="hotdeal">
                <div className="deal">{`$ ${props.deal}`}</div>
                <div className="price">{`$ ${props.price}`}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default HeroTile;
