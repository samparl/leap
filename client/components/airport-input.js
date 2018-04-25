const React = require('react');
const styles = require('./airport-input.scss');
import { AutocompleteDropdown } from './autocomplete-dropdown';

export class AirportInput extends React.Component {
  render() {
    const regex = new RegExp(this.props.value, 'i');
    const options = this.props.options.filter(val => val.match(regex) && val !== this.props.value);
    const select = this.props.value && options.length ?
      <AutocompleteDropdown onChange={ this.props.onChange } options={ options } /> : null;

    return (
      <div className="airport-input">
        <input value={ this.props.value } onChange={ this.props.onChange } />
        {
          select
        }
      </div>
    );
  }
}
