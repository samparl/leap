const React = require('react');
const ReactDOM = require('react-dom');

import { AirportSearch } from './components';

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <span className="app-title">Leap</span>
        </div>
        <AirportSearch />
      </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
