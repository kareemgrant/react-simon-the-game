import React, { Component } from 'react';
import Board from './Board';

const propTypes = {
  gameData: React.PropTypes.object,
};

class Game extends Component {
  render() {
    console.log('rendering game', this.props);
    const { gameData } = this.props;

    return (
      <div className="container">
        <Board
          {...gameData}
        />
      </div>
    );
  }
}

Game.propTypes = propTypes;
module.exports = Game;
