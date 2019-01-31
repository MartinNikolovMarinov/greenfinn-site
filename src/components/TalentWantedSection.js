/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import listedPositions from '../data/listed-positions.json';
import positionTypes from '../utils/positionTypes';
import companyInfo from '../data/company-info.json';

function TalentsItem({ positionTitle, description, style, openModal }) {
  return (
    <div className="slide-talent-wanted talents-item" style={style}>
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
    translateValue: 0,
    currentIndex: 0
  }

  scrollContainer = React.createRef();

  constructor(props) {
    super(props);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.slideWidth = this.slideWidth.bind(this);
  }

  componentDidMount() {
    this.setState({ listedPositions })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scrollLeft) this.goToPrevSlide();
    if (nextProps.scrollRight) this.goToNextSlide();
  }

  slideWidth() {
    const elem = document.querySelector('.slide-talent-wanted');
    return elem.clientWidth + 20;
  }

  goToPrevSlide() {
    if (this.state.currentIndex === 0) return;
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide() {
    const { currentIndex, listedPositions } = this.state;
    if (currentIndex === listedPositions.length - 1) return;
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  render() {
    const { listedPositions } = this.state;

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

        <div className="slider">
          {
            listedPositions.map((p, i) =>
              <TalentsItem
                key={i}
                positionTitle={p.positionTitle}
                description={p.description}
                openModal={this.props.openModal}
                style={{
                  transform: `translateX(${this.state.translateValue}px)`,
                  transition: 'transform ease-out 0.45s'
                }}
              />
            )
          }
        </div>

        <div className="nav-buttons-container">
          <a className="button-circle" onClick={this.goToPrevSlide}>
            <div className="left-arrow"></div>
          </a>

          <a className="button-circle" onClick={this.goToNextSlide}>
            <div className="right-arrow"></div>
          </a>
        </div>
      </section>
    );
  }
}
