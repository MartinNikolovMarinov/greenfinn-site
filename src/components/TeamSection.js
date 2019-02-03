/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Girl from '../images/girl_temp.PNG';
import teamMembers from '../data/team-members.json';
import companyInfo from '../data/company-info.json';
import '../styles/our-team.css';

function TeamMemberItem({ name, position, style }) {
  return (
    <div className="slide-team talents-item" style={style}>
      <div className="talents-item-shell team">
        <img alt="" src={Girl} />
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
}

export class TeamSection extends Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired
  }

  state = {
    teamMembers: [],
    translateValue: 0,
    currentIndex: 0
  }

  constructor(props) {
    super(props);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.slideWidth = this.slideWidth.bind(this);
  }

  componentDidMount() {
    this.setState({ teamMembers })
  }

  slideWidth() {
    const elem = document.querySelector('.slide-team');
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
    const { currentIndex, teamMembers } = this.state;
    if (currentIndex === teamMembers.length - 1) return;
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  render() {
    const { teamMembers } = this.state;

    return (
      <section className="section-talents-wanted" id="team-section">
        <div className="section-talents-shell">
          <h2>Our team</h2>
          <p className="team-sub-title">
            Each member of our team is a specialist in his or her field. Together,
            we are building loyalty across every touchpoint.
            <a
              className="btn-join-our-team"
              href={`mailto:${companyInfo.email}?Subject=${companyInfo['email-subjet']}`}
            >&nbsp;Join our Team.
            </a>
          </p>
        </div>

        <div className="slider">
          {
            teamMembers.map((p, i) =>
              <TeamMemberItem
                key={i}
                name={p.name}
                position={p.position}
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
