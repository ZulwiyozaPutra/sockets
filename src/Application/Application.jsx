import React from 'react';
import './Application.css';
// import NavigationBar from '../components/NavigationBar/NavigationBar';
import ContentBar from '../components/ContentBar/ContentBar';
import ChatRoom from '../components/ChatRoom';
import SideBar from '../components/SideBar/SideBar';

function Application() {
  return (
    <div className="Application">
      {/* <header className="Application-header">
        <NavigationBar />
      </header> */}
      <main>
        <SideBar />
        <ContentBar>
          <ChatRoom />
        </ContentBar>
      </main>
    </div>
  );
}

export default Application;
