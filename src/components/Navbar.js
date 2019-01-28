import React, { Component } from 'react';
import PropTypes from 'prop-types';
import companyInfo from '../data/company-info.json';
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

            <li className="nav-item button" >
              <a
                className="nav-join-us-a"
                href={`mailto:${companyInfo.email}?Subject=${companyInfo['email-subjet']}`}
              >
                Join our team
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
