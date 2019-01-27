import React, { Component } from 'react';
import Logo from '../images/logo-horizontal.png';

export class JoinNowPopup extends Component {
  render() {
    return (
      <section className="pop-up" id="active">
        <div className="pop-up-shell-outer">
          <div className="pop-up-shell">
            <div className="pop-up-header">
              <img alt="" src={Logo} />

              <span>X</span>
            </div>

            <div className="pop-up-content">
              <h2>{'< '}Senior{' '}/{' '}Developer{' >'}</h2>

              <h4>Robotic Position</h4>

              <p>
                We are hiring software roboticists who want to do applied robotics, now.
            <br />
                We build software to do real work. Join our Team.
            </p>

              <p>
                <span className="title-bold">As a Robotics Software Developer, you will: </span>

                <ul>
                  <li>
                    Develop software for our autonomous indoor and outdoor robotics
                <br />
                    platform using the Robotic Operating System (ROS), Python, C++, and more.
                </li>

                  <li>
                    Code-review, pair-program, and problem solve with teammates
                </li>

                  <li>
                    Participate in daily stand-ups, weekly sprint planning, retrospectives, and roadmap planning
                </li>

                  <li>
                    Build a great company: it’s up to you how involved you want to be. We are an open book and share
                <br />
                    the experience of building a company from customer discovery to sales to marketing, you can participate and learn all aspects of business.
                </li>
                </ul>
              </p>

              <p>
                <span className="title-bold">As a candidate you already:</span>

                <ul>
                  <li>
                    Have software development experience and solid engineering practices
                </li>

                  <li>
                    Have experience with areas in robotics such as: control systems, machine vision,
                <br />
                    obstacle avoidance, SLAM, and/or other robotics algorithms and libraries
                </li>

                  <li>
                    Have used the Robotic Operating System (ROS) and simulation with Gazebo
                </li>

                  <li>
                    Know Python or other high-level scripting languages
                </li>

                  <li>
                    Know C++ or other lower-level embedded languages
                </li>

                  <li>
                    Have experience with Linux from installation to package management
                </li>

                  <li>
                    Desire to free humans from hard, manual labor
                </li>
                </ul>
              </p>

              <p>
                <span className="title-bold">You might also (nice-to-have):</span>

                <ul>
                  <li>
                    Understand machine learning fundamentals and the most common libraries
                </li>

                  <li>
                    Grow your food on your balcony or a community garden
                </li>

                  <li>
                    Have a customized bash (or zsh) profile and your ssh keys are on at least one other server on the cloud
                </li>

                  <li>
                    Appreciate a results-based, startup culture
                </li>
                </ul>
              </p>
            </div>

            <a href="/#" className="button">Join our team</a>
          </div>
        </div>
      </section>
    );
  }
}
