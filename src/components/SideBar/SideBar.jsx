import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div className="Side-bar">
    <header>
      <h2>Sockets</h2>
    </header>
    <main>
      <nav>
        <a className="active" href="/x/">Channel X</a>
        <a href="/y/">Channel Y</a>
        <a href="/z/">Channel Z</a>
      </nav>
    </main>
      
    <footer>
      <h4>Zulwiyoza Putra</h4>
      <small>Bataphia</small>
    </footer>
    </div>
  );
}

export default SideBar;
