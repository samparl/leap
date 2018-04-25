const React = require('react');
const styles = require('./airport-search.scss');
import { AirportInput } from '../airport-input';
import { AirportService } from '../../airport.service';

export class AirportSearch extends React.Component {
  constructor() {
    super();
    this.service = new AirportService();
    this.state = {
      start: '',
      end: '',
      airports: []
    };
  }

  componentDidMount() {
    this.service.getAirports()
      .then(airports => this.setState({ airports }));
  }

  setStart(event) {
    console.log({start: event.target.value });
    this.setState({ start: event.target.value });
  }

  setEnd(event) {
    console.log({end: event.target.value });
    this.setState({ end: event.target.value });
  }

  filteredAirports(query) {
    return this.state.airports.filter(airport => airport.nameAirport.match(query) || airport.codeIataAirport.match(query));
  }

  render() {
    const { start, end } = this.state;
    const startOptions = this.filteredAirports(start);
    const endOptions = this.filteredAirports(end);

    return (
      <div className="airport-search">
        <div className="airport-search-title">Airport Search</div>
        <AirportInput value={ start } onChange={ this.setStart.bind(this) } options={ startOptions } />
        <AirportInput value={ end } onChange={ this.setEnd.bind(this) } options={ endOptions } />
      </div>
    );
  }
}
