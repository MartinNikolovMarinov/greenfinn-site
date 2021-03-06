/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import companyInfo from '../data/company-info.json';

import '../styles/contact-us.css';

export class ContactUsSection extends Component {

  render() {
    return (
      <section className="section-contact-us">
        <div className="section-contact-us-shell">
          <div className="rectangle">
            <div className="rectangle-shell">
              <h2>How to reach us</h2>

              <div className="contact-us-shell">
                <ul className="contact-us-list">
                  <li className="contact-us-list-item">
                    <h4>Jobs</h4>
                    <p>jobs@greenfinn.com</p>
                    <p>
                      <a
                        className="btn-join-our-team"
                        href={`mailto:${companyInfo.email}?Subject=${companyInfo['email-subjet']}`}
                      >
                        Join Our Team
                      </a>
                    </p>
                  </li>

                  <li className="contact-us-list-item">
                    <h4>Visit</h4>
                    <p>Visit Cherni Vrah</p>
                    <p>47A 1407 Sofia</p>
                  </li>

                  <li className="contact-us-list-item">
                    <h4>Sales</h4>
                    <p>+359 xxx xxxxx</p>
                    <p>info@greenfinn.com</p>
                  </li>

                  <li className="contact-us-list-item">
                    <h4>Investors</h4>
                    <p>+359 xxx xxxxx</p>
                    <p>info@greenfinn.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="triangle-topleft"></div>
        </div>
      </section>
    );
  }
}
