import React, { Component } from "react";
import Modal from 'react-modal';

import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { TalentWantedSection } from './components/TalentWantedSection';
import { HowWeWorkSection } from './components/HowWeWork';
import { TeamSection } from './components/TeamSection';
import { ContactUsSection } from './components/ContactUsSection';
import { FooterSection } from './components/FooterSection';
import { JoinNowPopup } from './components/JoinNowPopup';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {

  state = {
    modalIsOpen: false
  }

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { modalIsOpen } = this.state;

    return (
      <div className="app-container">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className="react-modal-container"
        >
          <JoinNowPopup closeModal={this.closeModal} />
        </Modal>

        <Navbar openModal={this.openModal} />
        <HomeSection openModal={this.openModal} />
        <TalentWantedSection openModal={this.openModal} />
        <HowWeWorkSection />
        <TeamSection openModal={this.openModal}/>
        <ContactUsSection openModal={this.openModal}/>
        <FooterSection openModal={this.openModal}/>
      </div>
    );
  }
}

export default App;
