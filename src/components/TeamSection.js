/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { horizontalScroll } from  '../utils/horizontalScroll';
import Girl from '../images/girl_temp.PNG';
import teamMembers from '../data/team-members.json'

function TeamMemberItem({ name, position, style }) {
  return (
    <div className="talents-item team" style={style}>
      <div className="talents-item-shell team">
        <img alt="" src={Girl} />
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
}

const ITEM_HEIGHT = 230;
const ITEM_WIDTH = 190;

export class TeamSection extends Component {

  state = {
    teamMembers: []
  }

  scrollContainer = React.createRef();

  constructor(props) {
    super(props);
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  componentDidMount() {
    this.setState({ teamMembers })
  }

  scrollLeft() {
    if (this.scrollContainer.current) {
      horizontalScroll(this.scrollContainer.current, -ITEM_WIDTH * 15, 550);
    }
  }

  scrollRight() {
    if (this.scrollContainer.current) {
      horizontalScroll(this.scrollContainer.current, ITEM_WIDTH * 15, 550);
    }
  }

  render() {
    const { teamMembers } = this.state;

    return (
      <section className="section-talents-wanted" id="team-section">
        <div className="section-talents-shell">
          <h2>Our team</h2>
          <p className="team-sub-title">
            Each member of our team is a specialist in his or her field. Together,
            we are building loyalty across every touchpoint. <a href="/#" className="btn-join-our-team">Join our Team.</a>
          </p>
        </div>

        <div className="section-talents-items" ref={this.scrollContainer}>
          {
            teamMembers.map((p, i) =>
              <TeamMemberItem
                key={i}
                style={{ height: ITEM_HEIGHT + 'px', width: ITEM_WIDTH + 'px' }}
                name={p.name}
                position={p.position}
              />
            )
          }
        </div>

        <div className="nav-buttons-container">
          <a className="button-circle" onClick={this.scrollLeft}>{'<'}</a>
          <a className="button-circle" onClick={this.scrollRight}>{'>'}</a>
        </div>
      </section>
    );
  }
}
