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
        value: '',
        options: [],
        loading: false
      },
      end: {
        value: '',
        options: [],
        loading: false
      }
    };
  }

  setStart(event) {
    this.setState({ start: { ...this.state.start, loading: true } });
    const value = event.target.value;
    this.service.getAirports(value)
      .then(options => this.setState({ start: { value, options, loading: false } }));
  }

  setEnd(event) {
    this.setState({ end: { ...this.state.end, loading: true } });
    const value = event.target.value;
    this.service.getAirports(value)
      .then(options => this.setState({ end: { value, options, loading: false } }));
  }

  render() {
    const { start, end } = this.state;
    return (
      <div className="airport-search">
        <div className="airport-search-title">Airport Search</div>
        <div className="airport-search-inputs">
          <AirportInput { ...start } onChange={ this.setStart.bind(this) } />
          <AirportInput { ...end } onChange={ this.setEnd.bind(this) } />
        </div>
      </div>
    );
  }
}
