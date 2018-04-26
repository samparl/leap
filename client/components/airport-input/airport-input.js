const React = require('react');
const styles = require('./airport-input.scss');

export class AirportInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curr: -1 };
    this.ref = React.createRef();
  }

  handleKeyDown(event) {
    if ([13, 38, 40].includes(event.keyCode)) { event.preventDefault(); }
    const curr = this.state.curr;
    const ref = this.ref.current;
    switch (event.keyCode) {
      case 40:
        if (curr < this.props.options.length - 1) this.setState({ curr: curr + 1 });
        break;
      case 38:
        if (curr > 0) this.setState({ curr: curr - 1 });
        break;
      case 13:
        if (ref) {
          const change = new Event('click', { bubbles: true });
          ref.dispatchEvent(change);
        }
        break;
    }
  }

  onHover(index) {
    this.setState({ curr: index });
  }

  render() {
    const { value, loading, options, onChange } = this.props;
    const classes = `airport-input ${ loading ? 'loading' : ''}`;
    const dropdown = (!loading && value && options.length) ? (
      <ul className="autocomplete-dropdown" onClick={ onChange }>
        {
          options.map((option, index) =>
            <option className={ this.state.curr === index ? 'current' : null }
              onMouseEnter={ this.onHover.bind(this, index) }
              ref={ this.state.curr === index ? this.ref : null }
              value={ option.codeIataAirport }
              key={ index }>
                { `${option.nameAirport} (${option.codeIataAirport})` }
            </option>
          )
        }
      </ul>
    ) : null;

    return (
      <div className={ classes } onKeyDown={ this.handleKeyDown.bind(this) }>
          <input { ...{ value, onChange } } />
          { dropdown }
      </div>
    );
  }
}
