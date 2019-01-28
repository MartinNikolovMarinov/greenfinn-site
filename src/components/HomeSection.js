/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import positionTypes from '../utils/positionTypes';

export class HomeSection extends Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired
  }

  render() {
    return (
      <section className="section-home">
        <div className="section-home-shell">
          <div className="section-home-shell-inner">
            <h1>The next generation of robotics</h1>

            <p>
              <span>Reinvent,</span>
              <span>&nbsp; innovate</span> and
              <span>&nbsp; expand</span> your digital footprint
              with a forward-thinking partner.
            </p>

            <a
              className="button"
              onClick={() => this.props.openModal({ positionId: positionTypes.seniorDeveloper })}
            >
              Join our team
            </a>
          </div>
        </div>
      </section>
    );
  }
}
