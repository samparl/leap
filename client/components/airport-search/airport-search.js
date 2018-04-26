const React = require('react');
const styles = require('./airport-search.scss');
import { AirportInput } from '../airport-input';
import { AirportService } from '../../airport.service';

export class AirportSearch extends React.Component {
  constructor() {
    super();
    this.service = new AirportService();
    this.state = {
      start: {
        text: '',
        airports: []
      },
      end: {
        text: '',
        airports: []
      }
    };
  }

  setStart(event) {
    const text = event.target.value;
    this.service.getAirports(text)
      .then(airports => this.setState({ start: { text, airports } }));
  }

  setEnd(event) {
    const text = event.target.value;
    this.service.getAirports(text)
      .then(airports => this.setState({ end: { text, airports } }));
  }

  filteredAirports(query) {
    return this.state.airports.filter(airport => {
      return airport.nameAirport.match(query) ||
        airport.codeIataAirport.match(query) &&
        airport.codeIataAirport !== query;
    });
  }

  render() {
    const { start, end } = this.state;
    const startOptions = start.airports;
    const endOptions = end.airports;

    return (
      <div className="airport-search">
        <div className="airport-search-title">Airport Search</div>
        <div className="airport-search-inputs">
          <AirportInput value={ start.text } onChange={ this.setStart.bind(this) } options={ startOptions } />
          <AirportInput value={ end.text } onChange={ this.setEnd.bind(this) } options={ endOptions } />
        </div>
      </div>
    );
  }
}
