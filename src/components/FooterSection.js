import React, { Component } from 'react';
import Logo from '../images/logo-horizontal.png';

export class FooterSection extends Component {
  render() {
    return (
      <section className="section-footer">
        <div className="section-footer-shell">
          <ul className="section-footer-list">
            <li className="section-footer-list-item">
              <img alt="" src={Logo} />
              <a href="/#" className="button">Join our team</a>
            </li>

            <li className="section-footer-list-item">
              <h4>Company</h4>

              <p>About us</p>
              <p>Team</p>
              <p>Jobs</p>
              <p>Contact</p>
            </li>

            <li className="section-footer-list-item">
              <h4>Invest</h4>

              <p>Features</p>
              <p>How it works</p>
              <p>Pricing</p>
            </li>

            <li className="section-footer-list-item">
              <h4>Legal</h4>

              <p>Privacy</p>
              <p>Terms</p>
              <p>Security</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}