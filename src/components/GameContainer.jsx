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
      <div>
        <Game {...this.state} />

        <div className="attribution">
          <p>
            Made with &#x26a1; by <a href="https://github.com/kareemgrant" target="_blank">Kareem Grant</a> <a href="https://github.com/kareemgrant/react-simon-the-game" target="_blank">(code)</a> using <a href="https://facebook.github.io/react/" target="_blank">React</a> and <a href="http://redux.js.org/" target="_blank">Redux</a>
          </p>
        </div>
      </div>
    );
  }
}

module.exports = GameContainer;
