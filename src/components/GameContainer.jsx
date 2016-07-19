import React from 'react';
import Store from '../store/Store';
import Game from './Game';

class GameContainer extends React.Component {
  componentWillMount() {
    this.setState(Store.getState());
    Store.subscribe(() => this.setState(Store.getState()));
  }

  render() {
    return (
      <Game {...this.state} />
    );
  }
}

module.exports = GameContainer;
