import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      hidden: false
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
    let lines = event.target.value.split(/\r?\n/)
    if (lines.length === 3 && (lines[0].split(' ').filter(Boolean).length === 5 && lines[1].split(' ').filter(Boolean).length === 3 && lines[2].split(' ').filter(Boolean).length === 5)){
      this.setState({
        hidden: true
      })
    } else {
      this.setState({
        hidden: false
      })
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
          hidden={this.state.hidden}
        >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
