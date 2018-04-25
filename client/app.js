const React = require('react');
const ReactDOM = require('react-dom');

import { AirportSearch } from './components';

export class App extends React.Component {
  render() {
    return (
      <div>
        Leap is up!
        <AirportSearch />
      </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
