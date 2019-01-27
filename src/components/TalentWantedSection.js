import React, { Component } from 'react';
import ArrowRight from '../images/arrow-right.png';
import listedPositions from '../data/listed-positions.json';

function TalentsItem({ positionTitle, description }) {
  return (
    <div className="talents-item" style={{ height: '230px', width: '300px' }}>
      <div className="talents-item-shell">
        <h4>{positionTitle}</h4>
        <p>{description}</p>
        <a href="/#" className="button no-background">
          More info <img alt='' src={ArrowRight} />
        </a>
      </div>
    </div>
  );
}

export class TalentWantedSection extends Component {

  state = {
    listedPositions: []
  }

  componentDidMount() {
    this.setState({ listedPositions })
  }

  render() {
    const { listedPositions } = this.state;

    return (
      <section className="section-talents-wanted" id="talents-wanted-section">
        <div className="section-talents-shell">
          <h2>Talents wanted</h2>
          <p>
            We are hiring software roboticists who want to do applied
            robotics, now. We build software to do real work. <span>Join our Team.</span>
          </p>
        </div>

        <div className="section-talents-items">
          {
            listedPositions.map((p, i) =>
              <TalentsItem
                key={i}
                style={{ height: '230px', width: '300px' }}
                positionTitle={p.positionTitle}
                description={p.description}
              />
            )
          }
        </div>

        <div className="nav-buttons-container">
          <a className="button no-background" href="/#">btn 1</a>
          <a className="button no-background" href="/#">btn 2 </a>
        </div>
      </section>
    );
  }
}
