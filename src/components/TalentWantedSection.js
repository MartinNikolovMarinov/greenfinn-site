import React, { Component } from 'react';
import ArrowRight from '../images/arrow-right.png';

export class TalentWantedSection extends Component {
  render() {
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
          <div className="talents-item">
            <div className="talents-item-shell">
              <h4>&lt; Mechanical engineers &gt;</h4>
              <p>
                We are hiring software roboticists who want to do applied robotics, now. We
                build software to do real work.
              </p>
              <a href="/#" className="button no-background">
                More info<img alt='' src={ArrowRight} />
              </a>
            </div>
          </div>

          <div className="talents-item">
            <div className="talents-item-shell">
              <h4>&lt; Mechanical engineers &gt;</h4>
              <p>
                We are hiring software roboticists who want to do applied robotics, now. We
                build software to do real work.
              </p>

              <a href="/#" className="button no-background">
                More info <img alt='' src={ArrowRight} />
              </a>
            </div>
          </div>

          <div className="talents-item">
            <div className="talents-item-shell">
              <h4>&lt; Senior / Developer &gt;</h4>

              <p>We are hiring software roboticists who want to do applied robotics, now. We
                  build software to do real work.</p>

              <a href="/#" className="button no-background">More info
                <img alt='' src={ArrowRight} /></a>
            </div>
          </div>

          <div className="talents-item">
            <div className="talents-item-shell">
              <h4>&lt; Mechanical engineers &gt;</h4>

              <p>We are hiring software roboticists who want to do applied robotics, now. We
                  build software to do real work.</p>

              <a href="/#" className="button no-background">More info
                <img alt='' src={ArrowRight} /></a>
            </div>
          </div>
        </div>

        <div className="nav-buttons-container">
          <a className="button-circle" href="/#"> 1</a>
          <a className="button-circle" href="/#"> 2 </a>
        </div>
      </section>
    );
  }
}
