import React from 'react';
import { withRouter } from 'react-router';

class MainHeroTile extends React.Component {
  constructor(props) {
    super(props);

    let { image='', tag='hot', name, bed, location, desc, deal, price } = this.props;
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateUserSpots(e.target);
  }

  render() {
    return (
      <div className="w-clearfix w-col w-col-6 w-dyn-item">
        <div className="_50 _60block" data-ix="tile-1">
          <a className="hero-tile special w-inline-block">
            <div className={`main-tile-image ${image}`}>
              <div className="tile-overlay">
                <div className={`project-tag ${tag}`}>{tag}</div>
                <div className="spot-name tile-text">{name}</div>
                <div className="details">
                  <div className="bed">{`${bed} beds`}</div>
                  <div className="divider"></div>
                  <div className="location">{location}</div>
                  <div className="divider"></div>
                  <div className="description">{desc}</div>
                </div>
                <div className="hotdeal">
                  <div className="deal">{`$ ${deal}`}</div>
                  <div className="price">{`$ ${price}`}</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default withRouter(MainHeroTile);
