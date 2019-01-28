import React, { Component } from 'react';
import PropTypes from 'prop-types';
import positionTypes from '../utils/positionTypes';
import LogoHorizontal from '../images/logo-horizontal.png';
import { Link, animateScroll as scroll } from 'react-scroll';

export class Navbar extends Component {

  static propTypes = {
    openModal: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="section-header">
        <div className="section-header-inner">
          <img
            src={LogoHorizontal}
            alt="Logo Horizontal"
            onClick={this.scrollToTop}
          />

          <div className="hamburger-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <ul className="section-header-nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="talents-wanted-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
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
              >
                Team
              </Link>
            </li>

            <li
              className="nav-item button"
              onClick={() => this.props.openModal({ positionId: positionTypes.seniorDeveloper })}
            >
              Join our team
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
