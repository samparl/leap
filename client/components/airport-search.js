// import * as React from 'react';
const React = require('react');
import { AirportInput } from './airport-input';

export class AirportSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      start: '',
      end: ''
    };
  }

  setStart(event) {
    this.setState({ start: event.target.value });
  }

  setEnd(event) {
    this.setState({ end: event.target.value });
  }

  render() {
    const options = [
      'ABC', 'ACL', 'LAX'
    ];
    return (
      <div>
        Airport Search
        <AirportInput value={ this.state.start} onChange={ this.setStart.bind(this) } options={ options } />
        <AirportInput value={ this.state.end} onChange={ this.setEnd.bind(this) } options={ options } />
      </div>
    );
  }
}
