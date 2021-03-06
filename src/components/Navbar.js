import React, { Component } from 'react';
import companyInfo from '../data/company-info.json';
import LogoHorizontal from '../images/logo-horizontal.png';
import { Link, animateScroll as scroll } from 'react-scroll';

import '../styles/navbar.css';

export class Navbar extends Component {

  state = {
    burgerButtonClicked: false,
    burgerMenuDisabled: false
  }

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.burgerButtonClick = this.burgerButtonClick.bind(this);
  }

  componentDidMount() {
    const mediaQuery = window.matchMedia('(min-width: 900px)');
    const mediaQueryCallback = (changed) => {
      if (changed.matches) this.setState({ burgerMenuDisabled: true, burgerButtonClicked: true });
      else this.setState({ burgerMenuDisabled: false, burgerButtonClicked: false });
    }

    mediaQueryCallback(mediaQuery);
    mediaQuery.addListener(mediaQueryCallback);
  }

  scrollToTop() {
    if (this.state.burgerMenuDisabled || !this.state.burgerButtonClicked) {
      scroll.scrollToTop();
      return;
    }

    this.setState((state) => {
      return { burgerButtonClicked: false };
    });
    scroll.scrollToTop();
  }

  burgerButtonClick() {
    if (this.state.burgerMenuDisabled) return;
    this.setState((state) => {
      return { burgerButtonClicked: !state.burgerButtonClicked };
    });
  }

  render() {
    const { burgerButtonClicked } = this.state;

    return (
      <nav className="section-header">
        <div className="section-header-inner">
          <div className="section-header-burger-container">
            <div className="section-header-logo-container">
              <img
                src={LogoHorizontal}
                alt="Logo Horizontal"
                onClick={this.scrollToTop}
              />
            </div>

            <div className="hamburger-menu" onClick={this.burgerButtonClick}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          {
            burgerButtonClicked &&
            <ul className="section-header-nav">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="talents-wanted-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={this.burgerButtonClick}
                >
                  Talents Wanted
                  </Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="how-we-work-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={this.burgerButtonClick}
                >
                  How We Work
                  </Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="team-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={this.burgerButtonClick}
                >
                  Team
                  </Link>
              </li>

              <li className="nav-item" >
                <a
                  className="nav-join-us-a button"
                  href={`mailto:${companyInfo.email}?Subject=${companyInfo['email-subjet']}`}
                >
                  Join our team
                </a>
              </li>
            </ul>
          }

        </div>
      </nav>
    );
  }
}
