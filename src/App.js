import React, { Component } from "react";
import LogoHorizontal from './images/logo-horizontal.png';
import ArrowRight from './images/arrow-right.png';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="section-header">
          <div className="section-header-inner">
            <img src={LogoHorizontal} alt="Logo Horizontal" />

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
            <div className="section-home-shell-inner">
              <h1>The next generation of robotics</h1>

              <p><span>Reinvent,</span>
                <span>&nbsp; innovate</span> and
                <span>expand</span> your digital footprint
                      with a forward-thinking partner.</p>

              <a href='/#' className="button">Join our team</a>
            </div>
          </div>
        </div>

        <div className="section-talents-wanted">
          <div className="section-talents-shell">
            <h2>Talents wanted</h2>

            <p>We are hiring software roboticists who want to do applied
            robotics, now. We build software to do real work. <span>Join our Team.</span></p>
          </div>

          <div className="section-talents-items">
            <div className="talents-item">
              <div className="talents-item-shell">
                <h4>&lt; Mechanical engineers &gt;</h4>

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
            <a className="button no-background" href="/#">btn 1</a>
            <a className="button no-background" href="/#">btn 2 </a>
          </div>
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
