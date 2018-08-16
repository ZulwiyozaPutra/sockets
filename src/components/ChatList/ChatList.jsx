import React from 'react';
import PropTypes from 'prop-types';
import './ChatList.css';


function ChatListItem(props) {
  const { value } = props;

  return (
    <li className="card">{ value }</li>
  );
}

ChatListItem.propTypes = {
  children: PropTypes.element,
};

ChatListItem.defaultProps = {
  children: null,
};

function ChatList(props) {
  const { chats } = props;

  return (
    <ul className="Chat-list">
      { chats.map((value, index) => {
        return <ChatListItem value={value} key={index}/>
      })}
    </ul>
  );
}


export default ChatList;
