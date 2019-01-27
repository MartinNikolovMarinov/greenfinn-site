import React, { Component } from "react";
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { TalentWantedSection } from './components/TalentWantedSection';
import { HowWeWorkSection } from './components/HowWeWork';
import { TeamSection } from './components/TeamSection';
import { ContactUsSection } from './components/ContactUsSection';
import { FooterSection } from './components/FooterSection';
import { JoinNowPopup } from './components/JoinNowPopup';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <HomeSection />
        <TalentWantedSection />
        <HowWeWorkSection />
        <TeamSection />
        <ContactUsSection />
        <FooterSection />
        <JoinNowPopup />
      </div>
    );
  }
}

export default App;
