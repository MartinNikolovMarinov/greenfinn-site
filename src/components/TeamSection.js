import React, { Component } from 'react';
import ArrowRight from '../images/arrow-right.png';
import Girl from '../images/girl_temp.PNG';

export class TeamSection extends Component {
  render() {
    return (
      <section className="section-talents-wanted" id="team-section">
        <div className="section-talents-shell">
          <h2>Our team</h2>
          <p className="team-sub-title"> Each member of our team is a specialist in his or her field. Together,
            we are building loyalty across every touchpoint. <span>Join our Team.</span>
          </p>
        </div>

        <div className="section-talents-items">
          <div className="talents-item team">
            <div className="talents-item-shell team">
              <img alt="" src={Girl} />
              <h4>Maria</h4>
              <p>Tech Team</p>
            </div>
          </div>

          <div className="talents-item team">
            <div className="talents-item-shell team">
              <img alt="" src={Girl} />
              <h4>Maria</h4>
              <p>Tech Team</p>
            </div>
          </div>

          <div className="talents-item team">
            <div className="talents-item-shell team">
              <img alt="" src={Girl} />
              <h4>Maria</h4>
              <p>Tech Team</p>
            </div>
          </div>

          <div className="talents-item team">
            <div className="talents-item-shell team">
              <img alt="" src={Girl} />
              <h4>Maria</h4>
              <p>Tech Team</p>
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
