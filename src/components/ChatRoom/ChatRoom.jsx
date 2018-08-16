import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatInput from '../ChatInput';
import ChatList from '../ChatList';
import './ChatRoom.css';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
    };
    this.handleChatInput = this.handleChatInput.bind(this);
  }

  handleChatInput(str) {
    this.setState(prevState => {
      return { state: prevState.chats.push(str)}
    });
  }

  render() {

    return (
      <div className="Chat-room">
        <header>
          <h4>Channel X</h4>
          <p>Discussing about X</p>
        </header>
        <main>
          <ChatList chats={this.state.chats} />
        </main>
        <footer>
          <ChatInput chatHandler={this.handleChatInput} />
        </footer>
        
      </div>
    );
  }
}


ChatRoom.propTypes = {
  children: PropTypes.element,
};

ChatRoom.defaultProps = {
  children: null,
};

export default ChatRoom;
