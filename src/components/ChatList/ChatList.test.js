import React from 'react';
import ReactDOM from 'react-dom';
import ChatList from './ChatList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
