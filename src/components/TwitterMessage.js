import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.maxChars = this.props.maxChars
    this.state = {
      value: '',
      remaining: this.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      remaining: this.maxChars - event.target.value.length
    })
  }

  remainingChars = () => {
    return (this.maxChars - this.state.value.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange.bind(this)} />
        <span> {this.state.remaining}</span>
      </div>
    );
  }
}

export default TwitterMessage;
