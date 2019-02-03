/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import companyInfo from '../data/company-info.json';
import '../styles/home.css';

export class HomeSection extends Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired
  }

  render() {
    return (
      <section className="section-home">
        <div className="section-home-shell">
          <div className="section-home-shell-inner">
            <h1>The next <br/> generation of <br/> robotics</h1>

            <p>
              <span>Reinvent,</span>
              <span>&nbsp; innovate</span> and
              <span>&nbsp; expand</span> your digital footprint
              with a forward-thinking partner.
            </p>

            <a
              className="button"
              href={`mailto:${companyInfo.email}?Subject=${companyInfo['email-subjet']}`}
            >
              Join our team
            </a>
          </div>
        </div>
      </section>
    );
  }
}
