import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  color: React.PropTypes.string.isRequired,
  activeColor: React.PropTypes.string,
};

class Pad extends Component {
  componentWillReceiveProps(newProps) {
    if (this.props.color === this.props.activeColor) {
      this.play();
    }
  }

  fetchBaseClass(color) {
    return (
      classNames({
        red: color === 'red',
        yellow: color === 'yellow',
        green: color === 'green',
        blue: color === 'blue',
        pad: true,
        highlight: false,
      })
    );
  }

  playSound() {
    const { audio } = this.props;

    const sound = new Audio(audio);
    sound.play();
  }

  play() {
    this.playSound();
    const self = this;
    const temp = this.pad.className;
    this.pad.className = `${this.pad.className} highlight`;

    setTimeout(() => self.pad.className = temp, 500);
  }

  render() {
    const { color } = this.props;
    const padClass = this.fetchBaseClass(color);

    return (
      <div
        className={padClass}
        ref={node => this.pad = node}
      ></div>
    );
  }
}

Pad.propTypes = propTypes;
module.exports = Pad;
