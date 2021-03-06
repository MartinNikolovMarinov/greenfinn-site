/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import companyInfo from '../data/company-info.json';
import Logo from '../images/logo-horizontal.png';

import '../styles/footer.css';

export class FooterSection extends Component {

  render() {
    return (
      <section className="section-footer">
        <div className="section-footer-shell">
          <ul className="section-footer-list">
            <li className="section-footer-list-item">
              <img alt="" src={Logo} />
              <a
                className="button"
                href={`mailto:${companyInfo.email}?Subject=${companyInfo['email-subjet']}`}
              >
                Join Our Team
              </a>
            </li>

            <li className="section-footer-list-item">
              <h4>Company</h4>

              <a href="/#">About us</a>
              <a href="/#">Team</a>
              <a href="/#">Jobs</a>
              <a href="/#">Contact</a>
            </li>

            <li className="section-footer-list-item">
              <h4>Invest</h4>

              <a href="/#">Features</a>
              <a href="/#">How it works</a>
              <a href="/#">Pricing</a>
            </li>

            <li className="section-footer-list-item">
              <h4>Legal</h4>

              <a href="/#">Privacy</a>
              <a href="/#">Terms</a>
              <a href="/#">Security</a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
