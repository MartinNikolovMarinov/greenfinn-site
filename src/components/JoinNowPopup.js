/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../images/logo-horizontal.png';
import CloseIcon from '../images/close.svg';
import positionDescriptions from '../data/position-descriptions.json';
import companyInfo from '../data/company-info.json';

function handleBold(line) {
  if (line.startsWith('{b}')) {
    return <span className="title-bold">{line.replace('{b}', '')}</span>
  }
  return line;
}

function Description({ lines }) {
  return (
    <p>
      {
        lines.map((line, i) => {
          if (i !== lines.length - 1) {
            return (<React.Fragment key={i}>{handleBold(line)}<br /></React.Fragment>);
          }
          return line;
        })
      }
    </p>
  )
}

function Paragraphs({ paragraphs }) {
  return (
    <li>
      {
        paragraphs &&
        paragraphs.length > 0 &&
        paragraphs.map((p, i) => {
          return <React.Fragment key={i}>{p}<br /></React.Fragment>
        })
      }
    </li>
  );
}

function Responsibility({ resp }) {
  const { list } = resp;

  return (
    <React.Fragment>
      <span className="title-bold">{resp.title}</span>
      {
        list &&
        list.length > 0 &&
        <div>
          <ul>
            {
              list.map((section, i) => {
                if (section && section.paragraphs) {
                  return (<Paragraphs paragraphs={section.paragraphs} key={i} />)
                }
                return null;
              })
            }
          </ul>
        </div>
      }
    </React.Fragment>
  );
}

export class JoinNowPopup extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    positionId: PropTypes.string
  }

  static defaultTypes = {
    positionId: undefined
  }

  state = {
    positionDescription: []
  }

  componentDidMount() {
    const positionDescription = positionDescriptions[this.props.positionId];
    if (!positionDescription) return;
    this.setState({ positionDescription });
  }

  render() {
    const { positionDescription } = this.state;
    const { descriptionLines } = positionDescription;
    const { responsibilities } = positionDescription;

    return (
      <section className="pop-up">
        <div className="pop-up-shell-outer">
          <div className="pop-up-shell">
            <div className="pop-up-header">
              <img alt="" src={Logo} className="logo-popup" />
              <a onClick={this.props.closeModal} className="pop-up-close-btn">
                <img src={CloseIcon} alt="close icon" className="close-icon" />
              </a>
            </div>

            <div className="pop-up-content">
              <h2>{`< ${positionDescription.name} >`}</h2>

              <h4>{positionDescription.type}</h4>

              {
                descriptionLines &&
                descriptionLines.length > 0 &&
                <Description lines={descriptionLines} />
              }

              {
                responsibilities &&
                responsibilities.length > 0 &&
                responsibilities.map((resp, i) => <Responsibility resp={resp} key={i} />)
              }

              <p className="title-bold">Our Values</p>
              <br/>
              <p className="title-bold">Ecological. Ethical. Profitable - No Less. No More.</p>
              At Greenfinn Technologies we only develop modern sustainable products that
              have a positive impact on our planet, and are not harmful for the environment
              and our health. We behave ethically at all times, creating benefits for our
              customers and profits for our employees, investors, and owners.
              <br />
              <p class="title-bold">We, the people</p>
              Our passion comes from nature; our inspiration comes from people.
              <br />
              <p class="title-bold">Greenfinn gives back</p>
              We give 1% of our sales revenue to charities.
              <br />
              <p class="title-bold">Contact</p>
              jobs@greenfinn.com
            </div>

            <br />

            <a
              href={`mailto:${companyInfo.email}?Subject=${companyInfo['email-subjet']}`}
              className="button"
              style={{ width: '200px' }}
            >
              Send us your Resume
            </a>
          </div>
        </div>
      </section>
    );
  }
}
