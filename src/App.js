import React, { Component } from "react";
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { TalentWantedSection } from './components/TalentWantedSection';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <HomeSection />
        <TalentWantedSection />

        <div className="section-how-we-work">
          how we work
        </div>

        <div className="section-our-team">
          out team
        </div>

        <div className="section-contact-us">
          how to reach us
        </div>

        <div className="section-footer">
          footer
        </div>

      </div>
    );
  }
}

export default App;
