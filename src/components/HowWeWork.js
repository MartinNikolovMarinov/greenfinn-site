import React, { Component } from 'react';
import IconCPU from '../images/icon-cpu.png';
import IconLabStyle from '../images/icon-labstyle.png';
import IconTeam from '../images/icon-team.png';

export class HowWeWorkSection extends Component {
  render() {
    return (
      <section className="section-how-we-work" id="how-we-work-section">
        <div className="section-how-we-work-shell">
          <h2>How we work</h2>

          <div className="how-we-work-content">

            <div className="content technologies">
              <div className="content-icon-container">
                <img alt="" src={IconCPU} />
              </div>

              <div className="content-title">
                <h4>
                  Dive deep into <br /> newest technologies
                </h4>
              </div>

              <div className="content-info">
                <p className="lato-font">Software algorithms promising open source
                technologies robot electronics and HW
                </p>
              </div>
            </div>

            <div className="content lab-style">
              <div className="content-icon-container">
                <img alt="" src={IconLabStyle} />
              </div>

              <div className="content-title">
                <h4>
                  Lab <br /> style
                </h4>
              </div>

              <div className="content-info">
                <p className="lato-font"> Future playground <br /> Always learn new stuff </p>
              </div>
            </div>

            <div className="content team">
              <div className="content-icon-container">
                <img alt="" src={IconTeam} />
              </div>

              <div className="content-title">
                <h4>
                  Non hierarchical &amp; <br /> team result oriented
                </h4>
              </div>

              <div className="content-info">
                <p className="lato-font"> We can only accomplish the unusual with teams that work together
                  We work, were it is good to work, in the lab, on field trips, at home </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}