import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  color: React.PropTypes.string.isRequired,
  activeColor: React.PropTypes.string,
  audio: React.PropTypes.string,
  losingAudio: React.PropTypes.string,
  listeningForPattern: React.PropTypes.bool,
  currentCorrectColor: React.PropTypes.string,
  validateSelection: React.PropTypes.func,
};

class Pad extends Component {
  componentWillReceiveProps(newProps) {
    const { color } = this.props;
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

  handlePadClick() {
    const { color, validateSelection } = this.props;
    this.playSound();
    validateSelection(color);
  }

  playSound() {
    const {
      audio,
      losingAudio,
      listeningForPattern,
      currentCorrectColor,
      color,
    } = this.props;

    let tone = audio;
    if (listeningForPattern && color !== currentCorrectColor) { tone = losingAudio; }

    const sound = new Audio(tone);
    sound.play();
  }

  play() {
    const self = this;
    const temp = this.pad.className;
    this.pad.className = `${this.pad.className} highlight`;

    setTimeout(() => self.pad.className = temp, 300);
    this.playSound();
  }

  renderClickablePad(color, padClass) {
    const { listeningForPattern } = this.props;
    if (!listeningForPattern) { return null; }

    return (
      <div
        className={padClass}
        ref={node => this.pad = node}
        onClick={() => this.handlePadClick()}
      />
    );
  }

  renderNonClickablePad(color, padClass) {
    const { listeningForPattern } = this.props;
    if (listeningForPattern) { return null; }

    return (
      <div
        className={padClass}
        ref={node => this.pad = node}
      />
    );
  }

  render() {
    const { color } = this.props;
    const padClass = this.fetchBaseClass(color);

    return (
      <div>
        {this.renderNonClickablePad(color, padClass)}
        {this.renderClickablePad(color, padClass)}
      </div>
    );
  }
}

Pad.propTypes = propTypes;
module.exports = Pad;
