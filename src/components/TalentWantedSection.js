/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { horizontalScroll } from '../utils/horizontalScroll';
import ArrowRight from '../images/arrow-right.png';
import listedPositions from '../data/listed-positions.json';

function TalentsItem({ positionTitle, description, style }) {
  return (
    <div className="talents-item" style={style}>
      <div className="talents-item-shell">
        <h4>{`< ${positionTitle} >`}</h4>
        <p>{description}</p>
        <a href="/#" className="button no-background">
          More info <img alt='' src={ArrowRight} />
        </a>
      </div>
    </div>
  );
}

const ITEM_HEIGHT = 230;
const ITEM_WIDTH = 300;

export class TalentWantedSection extends Component {

  state = {
    listedPositions: []
  }

  scrollContainer = React.createRef();

  constructor(props) {
    super(props);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  componentDidMount() {
    this.setState({ listedPositions })
  }

  scrollLeft() {
    if (this.scrollContainer.current) {
      horizontalScroll(this.scrollContainer.current, -ITEM_WIDTH * 15, 550);
    }
  }

  scrollRight() {
    if (this.scrollContainer.current) {
      horizontalScroll(this.scrollContainer.current, ITEM_WIDTH * 15, 550);
    }
  }

  render() {
    const { listedPositions } = this.state;

    return (
      <section className="section-talents-wanted" id="talents-wanted-section">
        <div className="section-talents-shell">
          <h2>Talents wanted</h2>
          <p>
            We are hiring software roboticists who want to do applied
            robotics, now. We build software to do real work. <a href="/#" className="btn-join-our-team">Join our Team.</a>
          </p>
        </div>

        <div className="section-talents-items" ref={this.scrollContainer}>
          {
            listedPositions.map((p, i) =>
              <TalentsItem
                key={i}
                style={{ height: ITEM_HEIGHT + 'px', width: ITEM_WIDTH + 'px' }}
                positionTitle={p.positionTitle}
                description={p.description}
              />
            )
          }
        </div>

        <div className="nav-buttons-container">
          <a className="button-circle" onClick={this.scrollLeft}>{'<'}</a>
          <a className="button-circle" onClick={this.scrollRight}>{'>'}</a>
        </div>
      </section>
    );
  }
}
