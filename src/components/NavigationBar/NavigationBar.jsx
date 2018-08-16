import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="Navigation-bar">
      <a href="/settings">Sockets</a>
      <nav>
        <a href="/settings">Settings</a>
        <a href="/accounts">Accounts</a>
      </nav>
    </div>
  );
}

export default NavigationBar;
