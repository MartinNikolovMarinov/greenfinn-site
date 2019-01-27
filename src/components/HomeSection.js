import React, { Component } from 'react';

export class HomeSection extends Component {
  render() {
    return (
      <section className="section-home">
        <div className="section-home-shell">
          <div className="section-home-shell-inner">
            <h1>The next generation of robotics</h1>

            <p><span>Reinvent,</span>
              <span>&nbsp; innovate</span> and
                <span>expand</span> your digital footprint
                      with a forward-thinking partner.</p>

            <a href='/#' className="button">Join our team</a>
          </div>
        </div>
      </section>
    );
  }
}
