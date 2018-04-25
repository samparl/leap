const React = require('react');
const styles = require('./autocomplete-dropdown.scss');

export class AutocompleteDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curr: -1 };
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.listener = document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if ([13, 38, 40].includes(event.keyCode)) event.preventDefault();
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

  render() {
    return (
      <ul className="autocomplete-dropdown" onClick={ this.props.onChange }>
        {
          this.props.options.map((option, index) =>
          <option className={ this.state.curr === index ? 'current' : null }
            ref={ this.state.curr === index ? this.ref : null }
            key={ index }
            value={ option }>{ option }</option>)
        }
      </ul>
    );
  }
}
