import React, { Component } from "react";
import LogoHorizontal from './images/logo-horizontal.png';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="section-header">
          <div className="section-header-inner">
            <img src={LogoHorizontal} alt="Logo Horizontal"/>

            <ul className="section-header-nav">
              <li className="nav-item">
                Talents wanted
              </li>

              <li className="nav-item">
                How We Work
             </li>

              <li className="nav-item">
                Team
              </li>

              <li className="nav-item button">
                Join our team
             </li>
            </ul>
          </div>
        </div>

        <div className="section-home">
          <div className="section-home-shell">
            <p>TEST</p>
          </div>
        </div>

        <div className="section-talents-wanted">
          talents wanted
        </div>

        <div className="section-how-we-work">
          how we work
        </div>

        <div className="section-our-team">
          out team
        </div>

        <div className="section-contact-us">
          how to reach us
        </div>

        <div className="section-footer">
          footer
        </div>

      </div>
    );
  }
}

export default App;
