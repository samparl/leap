const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./app.scss');
import { AirportSearch } from './components';

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <span className="app-title">Leap</span>
          <span className="app-widget">Welcome</span>
        </div>
        <AirportSearch />
      </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
