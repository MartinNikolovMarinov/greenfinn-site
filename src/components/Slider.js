import React from 'react';
import PropTypes from 'prop-types';

import './slider.css';

export class Slider extends React.Component {

  static propTypes = {
    scrollLeft: PropTypes.bool.isRequired,
    scrollRight: PropTypes.bool.isRequired,
    scrollFinished: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      translateValue: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scrollLeft) this.goToPrevSlide();
    if (nextProps.scrollRight) this.goToNextSlide();
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0) return;
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
    this.props.scrollFinished();
  }

  goToNextSlide = () => {
    const { children } = this.props;
    const { currentIndex } = this.state;
    if(currentIndex === children.length - 1) return;
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
    this.props.scrollFinished();
  }

  slideWidth = () => {
    const elem = document.querySelector('.slide');
    return elem.clientWidth + 20;
  }

  render() {
    return (
      <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          { this.props.children }
        </div>
      </div>
    );
  }
}
