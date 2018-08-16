import React, { Component } from 'react';
import './ChatInput.css';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { body } = this.state;
    const inputs = document.getElementsByClassName('Chat-input');
    let input;
    for (let i = 0; i < inputs.length; i += 1) {
      if (inputs[i].value === body) {
        input = inputs[i];
      }
    }
    input.focus();
    input.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        const input = event.path[0]
        this.props.chatHandler(input.value);
        this.setState({
          body: '',
        });
      }
    });
  }

  handleChange(event) {
    this.setState({
      body: event.target.value,
    });
  }

  render() {
    const {
      body,
    } = this.state;

    return (
      <input
        className="Chat-input"
        type="text"
        placeholder="Type a message"
        value={body}
        onChange={this.handleChange}
      />
    );
  }
}

export default ChatInput;
