/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Slider } from './Slider';
import listedPositions from '../data/listed-positions.json';
import positionTypes from '../utils/positionTypes';
import companyInfo from '../data/company-info.json';

function TalentsItem({ positionTitle, description, style, openModal }) {
  return (
    <div className="slide talents-item" style={style}>
      <div className="talents-item-shell">
        <h4>{`< ${positionTitle} >`}</h4>
        <p>{description}</p>
        <a
          className="button no-background"
          onClick={() => openModal({ positionId: positionTypes.seniorDeveloper })}
        >
          More info <div className="right-arrow no-margin"></div>
        </a>
      </div>
    </div>
  );
}

export class TalentWantedSection extends Component {

  static propTypes = {
    openModal: PropTypes.func.isRequired,
  }

  state = {
    listedPositions: [],
    scrollLeft: false,
    scrollRight: false,
  }

  scrollContainer = React.createRef();

  constructor(props) {
    super(props);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollFinished = this.scrollFinished.bind(this);
  }

  componentDidMount() {
    this.setState({ listedPositions })
  }

  scrollLeft() {
    this.setState({ scrollLeft: true })
  }

  scrollRight() {
    this.setState({ scrollRight: true })
  }

  scrollFinished() {
    this.setState({ scrollRight: false, scrollLeft: false })
  }

  render() {
    const { listedPositions, scrollLeft, scrollRight } = this.state;

    return (
      <section className="section-talents-wanted" id="talents-wanted-section">
        <div className="section-talents-shell">
          <h2>Talents wanted</h2>
          <p>
            We are hiring software roboticists who want to do applied
            robotics, now. We build software to do real work.
            <a
              className="btn-join-our-team"
              href={`mailto:${companyInfo.email}?Subject=${companyInfo['email-subjet']}`}
            >
              Join our Team.
            </a>
          </p>
        </div>

        <Slider scrollLeft={scrollLeft} scrollRight={scrollRight} scrollFinished={this.scrollFinished}>
          {
            listedPositions.map((p, i) =>
              <TalentsItem
                key={i}
                positionTitle={p.positionTitle}
                description={p.description}
                openModal={this.props.openModal}
              />
            )
          }
        </Slider>

        <div className="nav-buttons-container">
          <a className="button-circle" onClick={this.scrollLeft}>
            <div className="left-arrow"></div>
          </a>

          <a className="button-circle" onClick={this.scrollRight}>
            <div className="right-arrow"></div>
          </a>
        </div>
      </section>
    );
  }
}
