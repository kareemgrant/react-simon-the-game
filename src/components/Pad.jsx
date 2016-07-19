import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  color: React.PropTypes.string.isRequired,
  activeColor: React.PropTypes.string,
};

class Pad extends Component {
  render() {
    const { color, activeColor } = this.props;
    console.log('color', color);
    console.log('activeColor', activeColor);

    const padClass = classNames({
      red: color === 'red',
      yellow: color === 'yellow',
      green: color === 'green',
      blue: color === 'blue',
      pad: true,
      highlight: color === activeColor,
    });

    return (
      <div className={padClass}></div>
    );
  }
}

Pad.propTypes = propTypes;
module.exports = Pad;
